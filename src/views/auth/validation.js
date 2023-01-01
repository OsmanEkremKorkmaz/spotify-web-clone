import * as Yup from "yup"

export const registerSchema = Yup.object().shape({
    email: Yup.string()
        .required()
        .email(),
    confirmEmail: Yup.string()
        .oneOf([Yup.ref("email"), null], "E-posta adresleri eşleşmiyor."),
    username: Yup.mixed()
        .required()
        .test({
            message: "Enter a valid username",
            test: str => /^[a-zA-Z0-9\.\_]+$/i.test(str),
        }),
    password: Yup.string()
        .required(),
});

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .required()
        .email(),
    password: Yup.string()
        .required(),
});