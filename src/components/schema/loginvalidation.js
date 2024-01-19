import * as Yup from "yup";

export const loginValue = {
    email: "",
    password: ""
};


export const loginValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
});