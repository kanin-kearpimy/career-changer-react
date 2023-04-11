import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Admin from './Admin'
import Login from './Login'
import './assets/style/index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserContext from './UserContext';
import Signup from './Signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContext>
    <RouterProvider router={router} />
  </UserContext>
)
