import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import { styles } from '../../styles'
import { navLinks } from '../../constants'
import { logo, menu, close } from '../../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const location = useLocation();


  const links = [
    { to: "/", title: "Landing 1" },
    { to: "/landing_2", title: "Landing 2" },
    // { to: "/landing_3", title: "Landing 3" },
    { to: "/landing_3", title: "Landing 3" },

  ];

  React.useEffect(() => {
    const matchingLink = links.find(link => link.to === location.pathname);
    if (matchingLink) {
      setActive(matchingLink.title);
    } else {
      setActive("");
    }
  }, [location.pathname, links]);


  return (
    <nav
    className={`${styles.paddingX} w-full items-center py-5 top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
        to="/"
        aria-label='Logo'
        className='flex items-center gap-2'
        onClick={() => {
          setActive("")
          window.scrollTo(0, 0);
        }}
        >
          <img src={logo} 
          alt='logo' 
          className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Karl&nbsp;
          <span className='sm:block hidden'>| Full Stack Developer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {links.map((link, index) => (
            <li
            key={index}
            className={`${active === link.title ? "text-white" : "text-secondary"}
            hover:text-white text-[18px] font-medium cursor-pointer transition-all duration-150 ease-linear
            `}
            >
              <Link to={link.to} onClick={() => setActive(link.title)}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}
            />

            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient
            absolute top-20 right-0 mx-4 my-2 min-w-[140px]  rounded-md
            `}>
              <ul className='list-none flex justify-end items-start flex-col gap-4 '>
          {links.map((link, index) => (
            <li
            key={index}
            className={`${active === link.title ? "text-white" : "text-secondary"}
            hover:text-white text-[18px] font-medium cursor-pointer transition-all duration-150 ease-linear z-50
            `}
            >
              <Link to={link.to} onClick={() => setActive(link.title)}>
                {link.title}
              </Link>
            </li>
          ))}
              </ul>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar