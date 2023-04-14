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
import James from './James';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <Navbar />
      <App />
    </div>
  },
  {
    path: '/page-2',
    element: <div>
      <Navbar />
      <Page2 />
    </div>
  },
  {
    path: '/james',
    element: <div>
      <Navbar />
      <James />
    </div>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
