// import React from 'react'
import { sidebarLinks } from "@/data/dummy"
import * as Icons from "lucide-react";
import { NavLink } from "react-router-dom";


const Sidebar = () => {

  const IconRender = ({ name }: { name: string }) => {
    const Icon = (Icons as any)[name]
    return Icon ? <Icon className="h-5 w-5"/> : null;

  }
  return (
    <div className="hidden md:flex flex-col h-screen overflow-y-auto scrollbar-thin scrollbar-thin scrollbar-thumb-gray-500
  scrollbar-track-transparent w-65 p-8 border-r bg-card">
      {sidebarLinks.map((element) => (
        <div key={element.section} className="flex flex-col mt-4 gap-5 items-start left-0">
            <h1 className="left-2 font-semibold text-[20x]">{element.section}</h1>
            {element.links.map((link) => (
              <div key={link.path} className="flex flex-col">
                <NavLink to={link.path} className={({ isActive }) => 
    isActive ? "flex flex-row p-2 bg-[#ADEED9] cursor-pointer text-[18px] gap-2 w-50 rounded-sm" : "flex flex-row p-2 cursor-pointer text-[18px] gap-2 w-50 hover:bg-gray-50 rounded-sm"
  }>
                  <IconRender name={link.icon} />
                  <h2>{link.name}</h2>
                </NavLink>
              </div>
            ))}
        </div>
      ))}
      <div className="h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-black">
  {Array.from({ length: 50 }).map((_, i) => (
    <p key={i}>Item {i}</p>
  ))}
</div>

    </div>
  )
}

export default Sidebar
