"use client"

import { IoIosArrowDown } from 'react-icons/io';
import { FaTimes } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Link from "next/link";
import { useState } from 'react';

  const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <main className='text border-b-2 bg-neutral-100'>
      <div className='w-full flex items-center justify-center bg-white h-[70px]'>
        {/* all content */}
        <div className='sm:w-full md:w-[80%]  flex items-center justify-between h-[50px]'>

          <div>
            {/* logo */}
            <h2 className="title-font font-extrabold tracking-widest text-xl mb-3">
        Hekto
        </h2>
          </div>

          <div className='navbar-links items-center lg:flex hidden'>
            <ul className=' flex gap-4 flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-10 sm:text-md md:text-sm lg:text-md xl:text-md text-white md:text-black '>
              <li className='flex gap-1 p-4 hover:underline hover:text-pink-600 underline-offset-2'>
                <Link href="/">Home </Link> <IoIosArrowDown className='pt-1 text-lg'/>
              </li>
              <li className='p-4 hover:underline  hover:text-pink-600 underline-offset-2'>
                <Link href="/ShopLeftSidebar">Pages</Link>
              </li>
              <li className='p-4 hover:underline  hover:text-pink-600 underline-offset-2'>
                <Link href="/GridDefault">Products</Link>
              </li>
              <li className='p-4 hover:underline  hover:text-pink-600 underline-offset-2'>
                <Link href="/blog">Blog</Link>
              </li>
              <li className='p-4 hover:underline  hover:text-pink-600 underline-offset-2'>
                <Link href="/ShopList">Shop</Link>
              </li>
              <li className='p-4 hover:underline  hover:text-pink-600 underline-offset-2'>
                <Link href="/Faq">Contact</Link>
              </li>

            </ul>
          </div>

          <div className='flex gap-x-4 items-center'>
            {/* Search bar - hidden on small screens */}
            <div className='hidden lg:flex w-full bg-gray-200 rounded-md items-center '>
              <input
                className='w-full p-1 border-2 border-gray-200 outline-none'
                type="search"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="text-xl ml-3 bg-pink-600 px-1 py-1 text-white"
              />
            </div>

            {/* Toggle Button for mobile */}
            <button className='block sm:hidden transition text-2xl font-bold' onClick={handleClick}>
          {click ? <FaTimes /> : <IoMenu />}
        </button>
          </div>

             {/* Mobile Menu */}
        {click && (
          <div className='lg:hidden block absolute top-28 right-0 w-44 bg-slate-100 transition-transform duration-300 z-50'>
            <ul className='text-center text-xl py-8'>
              <Link href="/"><li className='my-4 py-2 hover:border-b-2 border-pink-600 uppercase'>Home</li></Link>
              <Link href="/ShopLeftSidebar"><li className='my-4 py-2 hover:border-b-2 border-pink-600 uppercase'>Pages</li></Link>
              <Link href="/GridDefault"><li className='my-4 py-2 hover:border-b-2 border-pink-600 uppercase'>Products</li></Link>
              <Link href=""><li className='my-4 py-2 hover:border-b-2 border-pink-600 uppercase'>Blog</li></Link>
              <Link href="/ShopList"><li className='my-4 py-2 hover:border-b-2 border-pink-600 uppercase'>Shop</li></Link>
              <Link href="/Faq"><li className='my-4 py-2 hover:border-b-2 border-pink-600 uppercase'>Contact</li></Link>
            </ul>
          </div>
        )}

        </div>
      </div>
    </main>

  );
}

export default Navbar;
