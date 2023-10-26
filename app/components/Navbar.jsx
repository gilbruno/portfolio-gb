import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between px-4 mx-auto'>
            <Link href={'/'} className='text-2xl text-white font-lg-semibold text md:text-5xl'>
                Logo
            </Link>
            <div className='hidden menu md:block md:w-auto' id="navbar">
                <ul className='flex p-4 mt-0 md:flex-row md:p-0 md:space-x-8'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title}></NavLink>
                            </li>
                        ))
                        
                    }
                    
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar