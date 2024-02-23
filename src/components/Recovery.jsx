import React from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import styles from "../styles/Login.module.css";

function Recovery() {
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

            <form className="pt-20">
              <div className="textbox flex flex-col items-center gap-6">
                <div className="input text-center">
                  <span className="py-5 text-lg text-left text-gray-500">
                    Enter 6 digit OTP sent to your Email address
                  </span>
                  <input
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

              <div className="text-center pt-5">
                <span className="text-gray-500">
                  Can't get OTP?{" "}
                  <Link className="text-red-500" to="/register">
                    Resend
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recovery;
