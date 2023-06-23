import React from 'react'
import { Card, Progress } from 'flowbite-react'

function CardBilling() {
  return (
    <div className='w-full shadow-md h-screen mt-40 flex justify-center  '>
      <div className='w-full px-10 shadow-md '>
        <Card className='w-full'>
          <Card className='w-full px-6'>
            <p className='text-gray-400'>Hallo,Amin</p>
            <p className='font-bold'>
              Jangan lupa,bulan ini kamu punya tagihan 👋
            </p>

            <h1 className='font-extrabold text-[40px]'>RP 1.000.000</h1>
          </Card>
          <Card className='w-full px-2'>
            <div className='flex justify-between'>
              <p className=''>Cicilan Motor</p>
              <span className=''>Rp 600.000</span>
            </div>
            <span className='float-right'>
              45%
              <Progress progress={45} />
            </span>
            <p className='font-bold'>Tagihan ke XX dari XX</p>
          </Card>
          <Card className='w-full px-2'>
            <div className='flex justify-between'>
              <p className=''>Cicilan Motor</p>
              <span className=''>Rp 600.000</span>
            </div>
            <Progress progress={45} />
            <p className='font-bold'>Tagihan ke XX dari XX</p>
          </Card>
          <Card className='w-full px-2'>
            <div className='flex justify-between'>
              <p className=''>Cicilan Motor</p>
              <span className=''>Rp 600.000</span>
            </div>
            <Progress progress={45} />
            <p className='font-bold'>Tagihan ke XX dari XX</p>
          </Card>
          <Card className='w-full px-2'>
            <div className='flex justify-between'>
              <p className=''>Cicilan Motor</p>
              <span className=''>Rp 600.000</span>
            </div>
            <Progress progress={25} />
            <p className='font-bold'>Tagihan ke XX dari XX</p>
          </Card>
        </Card>
      </div>
    </div>
  )
}

export default CardBilling
