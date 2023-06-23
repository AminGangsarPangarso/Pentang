import React from 'react'
import { Outlet } from 'react-router-dom'

function MobileNav() {
  return (
    <>
      <div className=' MobileNav w-full bg-orange-500 h-36 fixed top-0 flex justify-center'>
        <div className='w-full flex justify-between items-center px-6 py-5'>
          <div className='flex justify-center items-center px-2'>
            <svg
              width='50'
              height='50'
              viewBox='0 0 21 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.1554 0.63562C8.59744 0.63562 7.33446 1.8766 7.33446 3.40742C7.33446 3.5372 7.34354 3.66489 7.3611 3.78992C3.11121 4.98248 0 8.82719 0 13.3859V20.5926C0 22.1234 1.26298 23.3644 2.82095 23.3644H17.4899C19.0478 23.3644 20.3108 22.1234 20.3108 20.5926C20.3108 19.6741 19.553 18.9295 18.6182 18.9295H12.9764C12.6648 18.9295 12.4122 18.6813 12.4122 18.3751V16.7121C12.4122 16.4059 12.6648 16.1577 12.9764 16.1577L17.4899 16.1577C19.0478 16.1577 20.3108 14.9167 20.3108 13.3859C20.3108 8.82719 17.1996 4.98248 12.9497 3.78992C12.9673 3.66489 12.9764 3.5372 12.9764 3.40742C12.9764 1.8766 11.7134 0.63562 10.1554 0.63562Z'
                fill='#FDF5F2'
              />
            </svg>
            <h1 className='text-white text-[30px] font-semibold px-2 '>
              Petang
            </h1>
          </div>
          <svg
            width='50'
            height='50'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 2.39999C10.0904 2.39999 8.25906 3.15856 6.9088 4.50883C5.55853 5.85909 4.79996 7.69044 4.79996 9.59999V13.9032L3.95156 14.7516C3.78379 14.9194 3.66954 15.1332 3.62326 15.366C3.57698 15.5987 3.60075 15.8399 3.69155 16.0592C3.78235 16.2784 3.93612 16.4658 4.13341 16.5977C4.33071 16.7295 4.56266 16.7999 4.79996 16.8H19.2C19.4373 16.7999 19.6692 16.7295 19.8665 16.5977C20.0638 16.4658 20.2176 16.2784 20.3084 16.0592C20.3992 15.8399 20.4229 15.5987 20.3767 15.366C20.3304 15.1332 20.2161 14.9194 20.0484 14.7516L19.2 13.9032V9.59999C19.2 7.69044 18.4414 5.85909 17.0911 4.50883C15.7409 3.15856 13.9095 2.39999 12 2.39999V2.39999ZM12 21.6C11.0452 21.6 10.1295 21.2207 9.45438 20.5456C8.77925 19.8704 8.39996 18.9548 8.39996 18H15.6C15.6 18.9548 15.2207 19.8704 14.5455 20.5456C13.8704 21.2207 12.9547 21.6 12 21.6Z'
              fill='#FDF5F2'
            />
          </svg>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MobileNav