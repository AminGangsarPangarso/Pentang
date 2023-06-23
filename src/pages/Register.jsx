import React from 'react'
import { Button, Label, TextInput } from 'flowbite-react'
import logo from '@/assets/Images/Union.png'

export default function Register() {
  return (
    <div className=' w-full h-screen flex justify-center  items-center '>
      <form className='flex w-1/2 flex-col gap-4'>
        <div className='flex'>
          <img src={logo} alt='logo' className='w-10 h-10' />
          <span className='font-extrabold text-[30px] flex justify-center px-2'>
            Petang
          </span>
        </div>
        <h1 className='font-extrabold text-[40px]'>Daftar</h1>
        <div>
          <div className='mb-2 block'>
            <Label
              htmlFor='namaLengkap'
              value='Nama Lengkap'
              className='font-bold'
            />
          </div>
          <TextInput
            id='namaLengkap'
            placeholder='Nama Lengkap'
            required
            shadow
            type='text'
          />
        </div>
        <div>
          <div className='mb-2 block'>
            <Label
              htmlFor='namaPanggilan'
              value='Nama Panggilan'
              className='font-bold'
            />
          </div>
          <TextInput
            id='namaPanggilan'
            required
            shadow
            type='text'
            placeholder='Nama Panggilan'
          />
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='email' value='Email' className='font-bold' />
          </div>
          <TextInput
            id='email'
            required
            shadow
            type='email'
            placeholder='Email'
          />
        </div>

        <div>
          <div className='mb-2 block'>
            <Label htmlFor='password' value='password' className='font-bold' />
          </div>
          <TextInput
            id='password'
            required
            shadow
            type='password'
            placeholder='Kata Sandi'
          />
        </div>

        <Button type='submit' className='bg-orange-600 hover:bg-orange-600'>
          Masuk
        </Button>
      </form>
    </div>
  )
}
