import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Mobile from './Component/Navbar/Mobile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mobile />,
  },
])

export default router
