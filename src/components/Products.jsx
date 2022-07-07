import { BriefcaseIcon, ChartBarIcon, CurrencyDollarIcon, ViewGridIcon } from '@heroicons/react/outline'
import { BriefcaseIcon as BriefcaseIconSolid,
         ChartBarIcon as ChartBarIconSolid,
         CurrencyDollarIcon as CurrencyDollarIconSolid,
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
                <Link to={AppRoutes.home.path} className='flex' onClick={clickHandler}>
                    <ViewGridIcon className={`${!checkLocation(location.pathname, AppRoutes.home.path)? '' : 'hidden'} w-4 mr-1 mt-[2px]`} />
                    <ViewGridIconSolid className={`${checkLocation(location.pathname, AppRoutes.home.path)? '' : 'hidden'} w-4 mr-1 mt-[2px]`} />
                    {AppRoutes.home.name}
                </Link>
            </li>
            <li className='font-bold'>
                <Link to={AppRoutes.vitals.path} className='flex' onClick={clickHandler}>
                    <ChartBarIcon  className={`${!checkLocation(location.pathname, AppRoutes.vitals.path)? '' : 'hidden'} w-4 mr-1 mt-[2px]`} />
                    <ChartBarIconSolid  className={`${checkLocation(location.pathname, AppRoutes.vitals.path)? '' : 'hidden'} w-4 mr-1 mt-[2px]`} />
                    {AppRoutes.vitals.name}
                </Link>
            </li>
            <li className='font-bold'>
                <div className='flex' onClick={clickHandler}>
                    <CurrencyDollarIcon className={`${!checkLocation(location.pathname, AppRoutes.ecommerce.path)? '' : 'hidden'} w-4 mr-1 mt-[2px]`} />
                    <CurrencyDollarIconSolid  className={`${checkLocation(location.pathname, AppRoutes.ecommerce.path)? '' : 'hidden'} w-4 mr-1 mt-[2px]`} />
                    {AppRoutes.ecommerce.name}
                </div>
            </li>
            <li className='font-bold'>
                <div className='flex' onClick={clickHandler}>
                    <BriefcaseIcon  className={`${!checkLocation(location.pathname, AppRoutes.marketing.path)? '' : 'hidden'} w-4 mr-1 mt-[2px]`} />
                    <BriefcaseIconSolid  className={`${checkLocation(location.pathname, AppRoutes.marketing.path)? '' : 'hidden'} w-4 mr-1 mt-[2px]`} />
                    {AppRoutes.marketing.name}
                </div>
            </li>
        </ul>
    </nav>
  )
}
