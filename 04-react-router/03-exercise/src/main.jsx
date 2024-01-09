import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/style/index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  // insert your path here
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
