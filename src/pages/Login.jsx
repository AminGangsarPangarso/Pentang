import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import logo from '@/assets/Images/Union.png'

export default function Login() {
  return (
    <div className=' w-full h-screen flex justify-center  items-center '>
      <form className='flex w-1/2 flex-col gap-4'>
        <div className='flex'>
          <img src={logo} alt='logo' className='w-10 h-10' />
          <span className='font-extrabold text-[30px] flex justify-center px-2'>
            Petang
          </span>
        </div>
        <h1 className='font-extrabold text-[40px]'>Masuk</h1>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='email1' value=' Email' className='font-bold' />
          </div>
          <TextInput
            id='email1'
            placeholder='Masukan Email'
            required
            type='email'
          />
        </div>
        <div>
          <div className='mb-2 block'>
            <Label
              htmlFor='password1'
              value=' Password'
              className='font-bold'
            />
          </div>
          <TextInput
            id='password1'
            required
            type='password'
            placeholder='Kata Sandi'
          />
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Label htmlFor='remember'>Remember me</Label>
        </div>
        <Button
          type='submit'
          className='bg-orange-600 masuk hover:bg-orange-600'
        >
          Masuk
        </Button>
      </form>
    </div>
  )
}
