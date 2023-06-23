import React from 'react'
import { FaHome } from 'react-icons/fa'
import { GrDashboard } from 'react-icons/gr'

const NAVBAR_CONTENT = [
  {
    icon: <FaHome />,
    to: '/',
    name: 'Tagihan ',
  },
  {
    icon: <GrDashboard />,
    to: '/',
    name: 'Lunas',
  },
]

export { NAVBAR_CONTENT }
