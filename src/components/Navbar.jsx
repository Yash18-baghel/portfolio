import React from 'react'
import { NavLink } from 'react-router-dom'
import { nameLogo } from '../assets/images'

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to='/' className="items-center justify-center flex ">
                <img src={nameLogo} alt="" className='w-10 h-10 rounded-full object-contain' />
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to='/about' className={(isActive) => isActive ? 'text-blue-900' : 'text-black'}>
                    About
                </NavLink>
                <NavLink to='/projects' className={(isActive) => isActive ? 'text-blue-900' : 'text-black'}>
                    Projects
                </NavLink>
                <NavLink to='/contact' className={(isActive) => isActive ? 'text-blue-900' : 'text-black'}>
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar