import { toast } from "react-hot-toast";
import { authenticate } from "./helper";
export async function userPassValidate(values) {
  const error = emailVerify({}, values);
  const errors = passwordVerify({}, values);

  if (values.email) {
    const { status } = await authenticate(values.email);
    if (status !== 200) {
      error.exist = toast.error("Email does't exist");
    }
  }
  return error, errors;
}

export async function resetPassValidation(values) {
  const errors = passwordVerify({}, values);
  if (values.password !== values.confirm_pwd) {
    errors.exist = toast.error("Password not match...!");
  }
}

export async function registerValidation(values) {
  const error = usernameverify({}, values);
  passwordVerify(error, values);
  emailVerify(error, values);
  return error;
}

function passwordVerify(errors = {}, values) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    errors.password = toast.error("Password Required...!");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Wrong Password...!");
  } else if (values.password.length < 4) {
    errors.password = toast.error(
      "Password must be more than 4 characters long"
    );
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must have special character");
  }

  return errors;
}

function usernameverify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username required..!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid username..!");
  }
  return error;
}

function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email required..!");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Wrong email ..!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid email address..!");
  }
  return error;
}
