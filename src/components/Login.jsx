import React, { useEffect } from "react";
import { Link, useActionData } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Login.module.css";
import { userPassValidate } from "../helper/validate";
import { useAuthStore } from "../store/store";

import { Toaster, toast } from "react-hot-toast";
import { useFormik } from "formik";
import useFetch from "../hooks/useFetch";
import { verifyPassword } from "../helper/helper";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const setEmail = useAuthStore((state) => state.setEmail);
  const setProfile = useAuthStore((state) => state.setProfile);

  // const username = useAuthStore((state) => state.auth.username);
  const { email } = useAuthStore((state) => state.auth);
  const { profile } = useAuthStore((state) => state.auth);
  // const [{ isLoading, apiData, serverError }] = useFetch(`/user/${email}`);

  useEffect(() => {
    console.log(email);
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: userPassValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
      setEmail(values.email);
      setProfile(values.profile);
      let loginPromise = verifyPassword({
        email: values.email,
        password: values.password,
      });
      toast.promise(loginPromise, {
        loading: "Checking...",
        success: <b>Login Successfully...!</b>,
        error: <b>Password Not Match!</b>,
      });

      loginPromise.then((res) => {
        // console.log(res);
        let { token, userType } = res.data;
        localStorage.setItem("token", token);
        {
          userType == "Admin" ? navigate("/home") : navigate("/homeBrand");
        }
      });
    },
  });

  return (
    <div
    //   style={{
    //     background: "#dcdce6",
    //     backgroundImage: 'url("../assets/Background.png)',
    //   }}
    >
      <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <div className="flex justify-center items-center h-screen">
          <div className={styles.glass} style={{ width: "35%" }}>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Hello Again!</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Explore More by connecting with us.
              </span>
            </div>

            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center py-4">
                <img
                  src={profile || avatar}
                  className={styles.profile_img}
                  alt="avatar"
                />
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                <input
                  {...formik.getFieldProps("email")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Email"
                />
                <input
                  {...formik.getFieldProps("password")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Password"
                />
                <button
                  className="border bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-red-400"
                  type="submit"
                >
                  Log In
                </button>
              </div>

              <div className="text-center pt-5">
                <span className="text-gray-500">
                  Not a Member{" "}
                  <Link className="text-red-500" to="/register">
                    Register Now
                  </Link>
                </span>
              </div>
              <p className="text-center text-lg py-1">Or</p>

              <div className="text-center pn-4">
                <span className="text-gray-500">
                  Forgot Password?{" "}
                  <Link className="text-red-500" to="/recovery">
                    Recover Now
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

export default Login;
