import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React from 'react'
import { Products } from './Products';

const Navbar = (props) => {
  return (
    <div className='sticky top-0 z-50'>
        <div className='w-screen h-[80px] px-3 pb-3 flex items-center bg-white drop-shadow-md md:justify-between'>
            <div className='md:hidden mr-4'>
                <MenuIcon className={`${props.isOpen? 'hidden' : ''} w-6`} onClick={() => props.setIsOpen(!props.isOpen)} />
                <XIcon className={`${props.isOpen? '' : 'hidden'} w-6`} onClick={() => props.setIsOpen(!props.isOpen)} />
            </div>
            <h1 className='text-3xl font-bold md:text-5xl'>
                Beconcept.
            </h1>
            <Products header={true} />
        </div>
        <hr />
    </div>
  )
}

export default Navbar