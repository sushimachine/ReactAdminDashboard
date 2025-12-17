import React from 'react'
import { useStateContext } from '@/context/contextProvider'
import { userProfileData, userProfile } from '@/data/dummy'
import { XCircle } from 'lucide-react'

const Profile = () => {
  const { handleClick } = useStateContext();

  return (
    <div className='absolute z-50 shadow-xl h-3/4 w-96 p-5 bg-white right-10 top-20 flex flex-col'>
      
      <div className='flex w-full justify-between items-center p-7 pl-5 pb-5'>
        <h1 className='font-semibold text-[20px]'>User Profile</h1>
        <button 
            type="button"
            onClick={() => handleClick("profile")} 
            className='rounded-full p-1 hover:bg-gray-100'
        >
            <XCircle className='text-xl hover:text-red-500 transition'/>
        </button>
      </div>

      <div className='flex-1'>
        
        <div className='flex gap-4 items-center p-3'>
            <img src={userProfileData.avatar} className='rounded-full w-16 h-16' alt="" />
            <div className='flex flex-col text-left items-start'>
                <h1 className='text-[18px] font-serif font-bold'>{userProfileData.name}</h1>
                <p className='text-gray-500'>{userProfileData.role}</p>
                <h1 className='text-[14px] text-gray-400'>{userProfileData.email}</h1>
            </div>
        </div>

        <div className="w-full h-px bg-black/10 my-4"></div>

        <div className='flex flex-col'>
          {userProfile.map((item, index) => (
            <div key={index} className="flex gap-5 border-b border-color p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464D]">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-xl rounded-lg p-3"
              >
                {item.icon}
              </button>

              <div className='flex flex-col w-full text-left'>
                <p className="font-semibold dark:text-gray-200">{item.title}</p>
                <p className="text-gray-500 text-sm dark:text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 p-2">
            <button className="bg-blue-600 text-white w-full py-3 rounded-lg hover:opacity-90">
                Logout
            </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
