import React from 'react'
import { Link } from 'react-router-dom'
import { NAVBAR_CONTENT } from '@/contants'

function Mobile() {
  return (
    <div className='w-full flex gap-2 bg-orange-200 bottom-0 absolute justify-center md:hidden py-5'>
      <ul className='flex justify-center items-center w-1/2 bg-white rounded-md shadow-md'>
        {NAVBAR_CONTENT.map((val, idx) => {
          return (
            <Link
              to={val.to}
              key={idx}
              className='flex m-2 text-center items-center gap-3 border-2 px-2 py-2 rounded-md '
            >
              <span>{val.icon}</span>
              <span>{val.name}</span>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default Mobile
