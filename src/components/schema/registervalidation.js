import * as Yup from "yup";

export const registerValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
    
};


export const registerValidationSchema = Yup.object({
    firstName:Yup.string().required("FirstName is required"),
    lastName:Yup.string().required("LastName is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
});