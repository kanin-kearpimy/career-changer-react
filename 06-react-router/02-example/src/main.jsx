import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/style/index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Page2 from './Page_2';
import Navbar from './Nav';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/page-2',
    element: <Page2 />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
