import { ChartBarIcon, EyeIcon, ViewGridIcon } from '@heroicons/react/outline'
import { ChartBarIcon as ChartBarIconSolid,
         EyeIcon as EyeIconSolid,
         ViewGridIcon as ViewGridIconSolid } from '@heroicons/react/solid'
import { Link, useLocation } from "react-router-dom";
import { AppRoutes } from "../properties/AppRoutes";
import React from 'react'

export const Products = (props) => {

  let location = useLocation();

  const checkLocation = (currentLocation, path) => {
    if (currentLocation === path) {
        return true;
    }
    return false;
  }

  const clickHandler = () => {
    if (!props.header) {
        props.setIsOpen(!props.isOpen)
    }
  }

  return (
    <nav>
        <ul className={
            `${props.header?
                'hidden md:flex' : 
                'mx-10'}`
        }>
            <li className='font-bold'>
                <Link to={AppRoutes.home} className='flex' onClick={clickHandler}>
                    <ViewGridIcon className={`${!checkLocation(location.pathname, AppRoutes.home)? '' : 'hidden'} w-4 mr-1 mt-[2px]`} />
                    <ViewGridIconSolid className={`${checkLocation(location.pathname, AppRoutes.home)? '' : 'hidden'} w-4 mr-1 mt-[2px]`} />
                    Home
                </Link>
            </li>
            <li className='font-bold'>
                <Link to={AppRoutes.home} className='flex' onClick={clickHandler}>
                    <EyeIcon className={`${!checkLocation(location.pathname, AppRoutes.home)? '' : 'hidden'} w-4 mr-1 mt-[2px]`} />
                    <EyeIconSolid  className={`${checkLocation(location.pathname, AppRoutes.home)? '' : 'hidden'} w-4 mr-1 mt-[2px]`} />
                    Tracciamento
                </Link>
            </li>
            <li className='font-bold'>
                <Link to={AppRoutes.stats} className='flex' onClick={clickHandler}>
                    <ChartBarIcon  className={`${!checkLocation(location.pathname, AppRoutes.stats)? '' : 'hidden'} w-4 mr-1 mt-[2px]`} />
                    <ChartBarIconSolid  className={`${checkLocation(location.pathname, AppRoutes.stats)? '' : 'hidden'} w-4 mr-1 mt-[2px]`} />
                    Statistiche
                </Link>
            </li>
        </ul>
    </nav>
  )
}
