import React, { useEffect, useState } from "react";

import avatar from "../assets/profile.png";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
import { registerValidation } from "../helper/validate";

import { registerUser } from "../helper/helper";

import { toast, Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import convertToBase64 from "../helper/convert";
import { useAuthStore } from "../store/store";

function Register() {
  const setUsername = useAuthStore((state) => state.setUsername);
  const { username } = useAuthStore((state) => state.auth);

  useEffect(() => {
    console.log(username);
  });

  const navigate = useNavigate();
  const [file, setFile] = useState();

  const setProfile = useAuthStore((state) => state.setProfile);
  const { profile } = useAuthStore((state) => state.auth);

  const setUserProvideType = useAuthStore((state) => state.setUserProvideType);
  const { userProvideType } = useAuthStore((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      if (userType == "Admin" && secretKey != "SecretKey") {
        // e.preventDefault();
        toast.error("Invalid admin");
      } else {
        values = Object.assign(
          values,
          { profile: file || "" },
          { userType: userType }
        );
        console.log(values);
        setUsername(values.username);
        setProfile(values.file);
        setUserProvideType(values.userType);
        let registerPromise = registerUser(values);
        toast.promise(registerPromise, {
          loading: "Creating...",
          success: <b>Register Successfully...!</b>,
          error: <b>Could not Register.</b>,
        });

        registerPromise.then(function () {
          navigate("/login");
        });
      }
    },
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  const [userType, setUserType] = useState("");
  // console.log(userType);
  const [secretKey, setSecretKey] = useState("");

  return (
    <div>
      <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <div className="flex justify-center items-center h-screen">
          <div
            className={styles.glass}
            style={{ width: "35%", height: "900px" }}
          >
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Register</h4>
              <h6 className="text-base font-bold mt-4">As</h6>
              <div className="flex">
                <div className="pr-3 text-xl">
                  <input
                    type="radio"
                    name="userType"
                    id=""
                    value="User"
                    onChange={(e) => setUserType(e.target.value)}
                  />{" "}
                  User
                </div>
                <div className="text-xl">Or</div>
                <div className="text-xl pl-3">
                  <input
                    className=""
                    type="radio"
                    name="userType"
                    id=""
                    onChange={(e) => setUserType(e.target.value)}
                    value="Admin"
                  />{" "}
                  Admin
                </div>
              </div>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Happy to join you!
              </span>
            </div>

            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center py-4">
                <label htmlFor="profile">
                  <img
                    src={file || avatar}
                    className={styles.profile_img}
                    alt="avatar"
                  />
                </label>
                <input
                  onChange={onUpload}
                  type="file"
                  name="profile"
                  id="profile"
                />
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                {userType == "Admin" ? (
                  <input
                    className={styles.textbox}
                    type="text"
                    placeholder="Secret Key"
                    onChange={(e) => setSecretKey(e.target.value)}
                  />
                ) : null}

                <input
                  {...formik.getFieldProps("username")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Username"
                />
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
                  Register
                </button>
              </div>

              <div className="text-center pt-5">
                <span className="text-gray-500">
                  Already Register?{" "}
                  <Link className="text-red-500" to="/login">
                    Login Now
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

export default Register;
