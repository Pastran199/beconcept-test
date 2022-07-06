import React from 'react'
import { Products } from './Products'

const Menu = (props) => {
  return (
    <div className={`${props.isOpen? '' : 'hidden'} max-w-fit h-full fixed z-40 bg-gray-50 drop-shadow-lg md:hidden`}>
        <Products header={false} isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
    </div>
  )
}

export default Menu