import React from 'react'
import { sidebarLinks } from "@/data/dummy"
import { X } from "lucide-react"; // Import the Close icon
import * as Icons from "lucide-react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "@/context/contextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext()

  const IconRender = ({ name }: { name: string }) => {
    const Icon = (Icons as any)[name]
    return Icon ? <Icon className="h-5 w-5"/> : null;
  }

  return (
    <div className={`
        fixed inset-y-0 left-0 z-50 bg-white border-r transition-all duration-300
        ${activeMenu ? 'w-72' : 'w-0'} 
        md:static 
        ${!activeMenu && 'md:hidden'}
    `}>
      <div className="h-full flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 pb-10">
        
        <div className="flex justify-between items-center p-4 border-b">
            <h1 className="font-bold text-xl">Dashboard</h1>
            
            <button 
                type="button"
                onClick={() => setActiveMenu(false)}
                className="p-2 hover:bg-gray-100 rounded-full md:hidden"
            >
                <X className="w-6 h-6" />
            </button>
        </div>

        <div className="p-4">
          {sidebarLinks.map((element) => (
            <div key={element.title} className="mt-4">
               <h1 className="text-gray-400 uppercase font-bold text-sm mb-3">
                 {element.title}
               </h1>
               {element.links.map((link) => (
                 <NavLink 
                   key={link.name}
                   to={`/${link.path}`}
                   onClick={() => setActiveMenu(false)} 
                   className={({ isActive }) => 
                     `flex items-center gap-4 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 
                     ${isActive ? "bg-[#ADEED9] text-black" : "text-gray-700 hover:bg-gray-100"}`
                   }
                 >
                   <IconRender name={link.icon} />
                   <span className="capitalize">{link.name}</span>
                 </NavLink>
               ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar