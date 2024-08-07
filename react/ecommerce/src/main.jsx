import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Component/Home.jsx';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Profile from './Component/Profile.jsx';

  let AppRouter = createBrowserRouter([
    {
        path : "/",
        element : <App/>
    },{
        path : "/profile",
        element : <Profile></Profile>
    }
  ])




ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={AppRouter}></RouterProvider>
)
