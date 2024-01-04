import { string, object } from "yup";

const validateString = string().trim();

export const onSignUpValidation = object({
  name: validateString.required("Name is required"),
  email: validateString.email("Email is invalid").required("Email is reqiured"),
  password: validateString.min(8).required().label("Password"),
});

export const onLoginValidation = object({
  email: validateString.email("Email is invalid").required("Email is reqiured"),
  password: validateString.min(8).required().label("Password"),
});
