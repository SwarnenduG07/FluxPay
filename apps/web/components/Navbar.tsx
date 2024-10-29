import React from 'react'
import { Button } from './ui/button'

export const Navbar = () => {
  return (
    <div className='pt-10 ml-40 flex justify-between'>
         <div className='text-neutral-100 font-light text-lg'>
            PayDev 
         </div>
         <div className='text-neutral-100/75 flex gap-16 mx-48  items-center'>
             <h1 className='cursor-pointer hover:text-purple-600 hover:'>Log In</h1>
             <div>
                <Button className='bg-gradient-to-br rounded-full from-purple-500 to-fuchsia-800 hover:bg-gradient-to-tl hover:from-neutral-800 hover:to-purple-800 w-28 cursor-pointer'>
                    Signup
                </Button>
             </div>
         </div>
    </div>
  )
}
