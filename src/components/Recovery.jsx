import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
import { useState, useEffect } from "react";
import { useAuthStore } from "../store/store";
import { generateOTP, verifyOTP } from "../helper/helper";

function Recovery() {
  const { email } = useAuthStore((state) => state.auth);
  const [OTP, setOTP] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(email);
    generateOTP(email).then((OTP) => {
      console.log(OTP);
      if (OTP) return toast.success("OTP has been send to your email!");
      return toast.error("Problem while generating OTP!");
    });
  }, [email]);

  async function onSubmit(e) {
    e.preventDefault();
    console.log("hello");
    try {
      let { status } = await verifyOTP({ email, code: OTP });
      console.log(status);
      if (status === 201) {
        toast.success("Verify Successfully!");
        navigate("/reset");
      }
    } catch (error) {
      return toast.error("Wront OTP! Check email again!");
    }
  }

  // handler of resend OTP
  function resendOTP() {
    let sentPromise = generateOTP(email);

    toast.promise(sentPromise, {
      loading: "Sending...",
      success: <b>OTP has been send to your email!</b>,
      error: <b>Could not Send it!</b>,
    });

    sentPromise.then((OTP) => {
      console.log(OTP);
    });
  }

  return (
    <div>
      <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <div className="flex justify-center items-center h-screen">
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Recovery</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Enter OTP to recover password
              </span>
            </div>

            <form className="pt-20" onSubmit={onSubmit}>
              <div className="textbox flex flex-col items-center gap-6">
                <div className="input text-center">
                  <span className="py-5 text-lg text-left text-gray-500">
                    Enter 6 digit OTP sent to your Email address
                  </span>
                  <input
                    onChange={(e) => setOTP(e.target.value)}
                    className={styles.textbox}
                    type="text"
                    placeholder="OTP"
                  />
                </div>

                <button
                  className="border bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-red-400"
                  type="submit"
                >
                  Recover
                </button>
              </div>
            </form>
            <div className="text-center pt-5">
              <span className="text-gray-500">
                Can't get OTP?{" "}
                <button className="text-red-500" onClick={resendOTP}>
                  Resend
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recovery;
