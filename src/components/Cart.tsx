import React from 'react'
import { XCircle } from "lucide-react";

const Cart = () => {

  return (
    <div className='absolute h-full w-96 p-10 right-0 bg-white'>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold text-[20px]'>Shopping Cart</h1>
        <XCircle className='hover: text-red-500 transition text-[20px]'/>
      </div>
    </div>
  )
}

export default Cart
