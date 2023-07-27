import React from 'react'
import logo from '../img/logo.png'
import { NavLink } from 'react-router-dom'
import { BiSolidDashboard } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { FaMoneyBills } from 'react-icons/fa6'
import { GiMeshBall } from 'react-icons/gi'
import { AiFillProject } from 'react-icons/ai'

export const SidebarNav = () => {
  return (
    <div className='bg-white w-full h-screen'>
      <div className='w-full h-full'>
        <div className='border-b border-black mb-10 h-16'>
          <img src={logo} alt="logo" className='relative px-2 py-2' />
        </div>
        <div className='nav-links'>
          <NavLink to='/'><BiSolidDashboard />Dashboard</NavLink>
          <NavLink to='/products'><AiFillProject />Products</NavLink>
          <NavLink to='/orders'><FaShoppingCart />Orders</NavLink>
          <NavLink to='/customers' ><BsPeopleFill />Customers</NavLink>
          <NavLink to='/transaction'><FaMoneyBills />Transaction</NavLink>
          <NavLink to='/sellers'><GiMeshBall />Sellers</NavLink>
        </div>
      </div>
    </div>
  )
}
