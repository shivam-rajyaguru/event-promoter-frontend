import axios from "axios";
import { jwtDecode } from "jwt-decode";

// axios.defaults.baseURL = "http://localhost:5173/api/v1";

export async function getUsername() {
  const token = localStorage.getItem("token");
  if (!token) return Promise.reject("Cannot find Token");
  let decode = jwtDecode(token);
  return decode;
}

/** get User details */
export async function getUser({ email }) {
  try {
    const { data } = await axios.get(
      `http://localhost:2516/api/v1/username/${email}`
    );
    return { data };
  } catch (error) {
    return { error: "Password doesn't Match...!" };
  }
}

/** generate OTP */
export async function generateOTP(email) {
  try {
    console.log(email);
    // const {
    //   data: { code },
    //   status,
    // } = await axios.get("http://localhost:2516/api/v1/generateOTP", {
    //   params: { email },
    // });
    // console.log(data);

    const res = await axios.get("http://localhost:2516/api/v1/generateOTP", {
      params: { email },
    });
    const data = res.data;
    const status = res.status;
    const code = res.data.code;

    // send mail with the OTP
    if (status === 201) {
      let {
        data: { emai1 },
      } = await getUser({ email });
      let text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`;
      await axios.post("http://localhost:2516/api/v1/registermail", {
        email,
        userEmail: email,
        text,
        subject: "Password Recovery OTP",
      });
    }
    return Promise.resolve(code);
  } catch (error) {
    return Promise.reject({ error });
  }
}

/** verify OTP */
export async function verifyOTP({ email, code }) {
  try {
    const { data, status } = await axios.get(
      "http://localhost:2516/api/v1/verifyOTP",
      {
        params: { email, code },
      }
    );
    return { data, status };
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function authenticate(email) {
  try {
    // console.log("hello");
    return await axios.post("http://localhost:2516/api/v1/authenticate", {
      email,
    });
  } catch (error) {
    return { error: "Email does't exist" };
  }
}

export async function verifyPassword({ email, password }) {
  try {
    if (email) {
      console.log("hello");
      const { data } = await axios.post("http://localhost:2516/api/v1/login", {
        email,
        password,
      });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Password does't match" });
  }
}

/** register user function */
export async function registerUser(credentials) {
  try {
    const {
      data: { msg },
      status,
    } = await axios.post(`http://localhost:2516/api/v1/register`, credentials);
    console.log(credentials);
    let { username, email } = credentials;
    /** send email */
    if (status === 201) {
      await axios.post("http://localhost:2516/api/v1/registermail", {
        username,
        userEmail: email,
        text: msg,
      });
    }
    return Promise.resolve(msg);
  } catch (error) {
    return Promise.reject({ error });
  }
}

/** reset password */
export async function resetPassword({ email, password }) {
  try {
    const { data, status } = await axios.put(
      "http://localhost:2516/api/v1/resetPassword",
      { email, password }
    );
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject({ error });
  }
}
