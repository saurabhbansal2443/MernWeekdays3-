import * as Yup from 'yup' ; 

export const signupSchema = Yup.object({
    userName : Yup.string().min(2, "Name is too short").required('Required'),
    email : Yup.string().email('Invalid email address').required('Required'),
    password : Yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
})

export const loginSchema = Yup.object({
    email : Yup.string().email('Invalid email address').required('Required'),
    password : Yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
})  