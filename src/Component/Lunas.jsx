// import React, { useEffect, useState } from 'react'
// import { format } from 'date-fns'
// import { FiMoon } from 'react-icons/fi'

// function Lunas() {
//   const [date, setDate] = useState(new Date())

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDate(new Date())
//     }, 1000)
//     return () => clearInterval(interval)
//   }, [])

//   const getMoonPhase = () => {
//     if (date.getDate() === 1) {
//       return 'purnama'
//     }
//     return 'tidak purnama'
//   }
//   return (
//     <div className='flex items-center'>
//       <FiMoon className='mr-2' />
//       <div>
//         <div className='text-sm text-gray-500'>
//           {format(date, 'EEEE, dd MMMM yyyy')}
//         </div>
//         <div className='text-lg'>{getMoonPhase()}</div>
//       </div>
//     </div>
//   )
// }

// export default Lunas
