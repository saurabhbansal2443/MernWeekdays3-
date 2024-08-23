import React  , {Suspense, lazy}  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter , RouterProvider } from "react-router-dom"
import Profile from './Components/Profile.jsx'
import Cart from './Components/Cart.jsx'
import Home from './Components/Home.jsx'
import ProductPage from './Components/ProductPage.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import ThemeContext from './Components/ThemeContext.jsx'
import AppStore from './Store/Store.js';
import {Provider} from "react-redux";
let Food= lazy(()=> import ( './Components/Food.jsx' ) )

const AppRouter = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        children : [
            {
                path : "/",
                element :<Home></Home> 
            },
            {
                path : "/profile",
                element : <Profile></Profile>
            },
            {
                path : "/cart",
                element : <Cart></Cart>
            },{
                path : "/food",
                element : (<Suspense fallback={<h1> Food page is coming </h1>}>
                    <Food></Food>
                </Suspense>)
            }, {
                path : "/product/:id",
                element : <ProductPage></ProductPage>
            },
        ],
        errorElement : <ErrorPage></ErrorPage>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={AppStore}>
    <ThemeContext>
  <RouterProvider router={AppRouter}></RouterProvider>
  </ThemeContext>
  </Provider>
   
  
)
