// import React from 'react'
import { Bell, Menu, ShoppingCart, MessageCircle, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full cursor-pointer flex justify-between p-4 text-[#00B7B5  ] font-semibold">
      <Menu/>

      <div className="flex justify-around gap-6">
        <ShoppingCart/>
        <MessageCircle/>
        <Bell/>
        <User/>
      </div>
    </div>
  )
}

export default Navbar
