import React , {useState } from "react";

const Login = () => {
    let [isSignup , setIsSignup] = useState(true)  ; 
  return (
    <div className="w-screen h-screen  flex justify-center items-center">
        
      <div className="max-w-xl py-6 px-8  w-1/4  bg-white rounded shadow-xl">
      <h1 className="text-center text-3xl text-red-700  "> Unlock JustBuy </h1>
        <form action="">
          {isSignup ? (<div className="mb-6">
            <label htmlFor="name" className="block text-gray-800 font-bold">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="username"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
          </div>) : null }
          <div>
            <label htmlFor="email" className="block text-gray-800 font-bold">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="@email"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
            
            <label htmlFor="password" className="block text-gray-800 font-bold mt-4 ">
              Password:
            </label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
          </div>
          <button className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">
            {isSignup ? "Signup " : "Login"}
          </button>
          <p className="text-black text-2xl mt-3 "> {isSignup ? "Already have a account ?" : "Don't have account? " } <span className="text-blue-500" onClick={()=>{setIsSignup(!isSignup)}}>{isSignup ? "Login" : "Signup"}</span> </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
