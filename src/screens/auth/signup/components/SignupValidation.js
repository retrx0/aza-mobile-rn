"use strict";
exports.__esModule = true;
exports.signUpValidationSchema = void 0;
var yup = require("yup");
exports.signUpValidationSchema = yup.object().shape({
    firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
    email: yup
        .string()
        .email("Please enter valid email")
        .required("Email is required")
});
