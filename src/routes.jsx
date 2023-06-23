import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import CardBilling from './Component/CardBilling'
import Login from './pages/Login'
import Register from './pages/Register'
import MobileNav from './Component/MobileNav'

const router = createBrowserRouter([
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: '/',
    element: <MobileNav />,
    children: [
      {
        path: '',
        element: <CardBilling />,
      },
    ],
  },
])

export default router
