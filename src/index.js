import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom'
import Error from './Components/error';
import Body from './Components/Body/body';
import RestaurantMenu from './Components/RestaurantMenu/restaurantMenu';
import Shimmer from './Components/Card/shimmerCard';
import Instamart from './Components/Instamart/Instamart';
import ProfileClass from './Components/profileClass';
const ContactUs=lazy(()=>import("./Components/Contact US/contactUS.js"));
const Offer=lazy(()=>import("./Components/Offer/offer"));


const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      errorElement:<Error/>,
      children:[
        {
          path:'/',
          element:<Body/>
        },
        {
          path:'/contact_us',
          element:<Suspense fallback={<Shimmer/>}><ContactUs/></Suspense>
        },
        {
          path:'/offer',
          element:<Suspense><Offer/></Suspense>
        },
        {
          path:'/restaurant/:id',
          element:<RestaurantMenu/>
        },
        {
          path:'/instamart',
          element:<ProfileClass></ProfileClass>
        }
      ]
    },
  ]
)
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
