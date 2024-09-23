import React, { useState } from "react";
import { useFormik } from "formik";
import { signupSchema, loginSchema } from "../utility/ValidationSchema";
import { baseUrl , signupUrl , loginUrl } from "../utility/Constant";
import axios from 'axios';

const Login = () => {
  const [isSignup, setIsSignup] = useState(true);
  

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validationSchema: isSignup ? signupSchema : loginSchema,

    onSubmit: async (value , action ) => {
      // console.log( "valies" , value);
      // signup //login 
      let {userName , email  , password} = value ;  
      let response = await axios.post ( baseUrl + signupUrl , { userName , email , password }) ;  

      console.log( response)

      action.resetForm();
    },
  });
  return (
    <div className="w-screen h-screen  flex justify-center items-center">
      {/* {console.log(formik)} */}
      <div className="max-w-xl py-6 px-8  w-1/4  bg-white rounded shadow-xl">
        <h1 className="text-center text-3xl text-red-700  ">
          {" "}
          Unlock JustBuy{" "}
        </h1>
        <form onSubmit={formik.handleSubmit}>
          {isSignup ? (
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 font-bold">
                Name:
              </label>
              <input
                type="text"
                name="userName"
                id="name"
                placeholder="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              />
             {formik.touched.userName && formik.errors.userName ? <p className="text-red-700"> {formik.errors.userName}  </p> : null  }
            </div>
           
          ) : null}
          <div>
            <label htmlFor="email" className="block text-gray-800 font-bold">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="@email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
           {formik.touched.email  && formik.errors.email?<p className="text-red-700"> {formik.errors.email}  </p> : null } 
            <label
              htmlFor="password"
              className="block text-gray-800 font-bold mt-4 "
            >
              Password:
            </label>
            <input
              type="password" 
              name="password"
              id="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
            
          </div>
          {formik.touched.password && formik.errors.password ?<p className="text-red-700"> {formik.errors.password}  </p> : null }
          <button
            type="submit"
            className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded"
          >
            {isSignup ? "Signup " : "Login"}
          </button>
          <p className="text-black text-2xl mt-3 ">
            {" "}
            {isSignup
              ? "Already have a account ?"
              : "Don't have account? "}{" "}
            <span
              className="text-blue-500"
              onClick={() => {
                setIsSignup(!isSignup);
              }}
            >
              {isSignup ? "Login" : "Signup"}
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
