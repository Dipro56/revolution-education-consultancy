'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      {/* Your main content */}
      <div className="px-72 py-8 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={'/logo.PNG'} height={120} width={120} alt="logo" />
        </div>
        <div className="flex items-center">
          <Link href={'#about_us'}>
            <p className="text-lg font-bold mx-2 cursor-pointer border-b-2 border-transparent hover:text-red-500 hover:border-red-500 transition duration-300">
              ABOUT US
            </p>
          </Link>

          <Link href={'#service'}>
            <p className="text-lg font-bold mx-2 cursor-pointer border-b-2 border-transparent hover:text-red-500 hover:border-red-500 transition duration-300">
              SERVICE
            </p>
          </Link>
          <p className="text-lg font-bold mx-2 cursor-pointer border-b-2 border-transparent hover:text-red-500 hover:border-red-500 transition duration-300">
            CONTACT
          </p>
          {/* <FaBars className="mx-2 cursor-pointer" onClick={handleDrawer} /> */}
        </div>
      </div>

      {/* Side navigation */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-600">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out">
            <RxCross2 onClick={handleDrawer} />
            <p className="text-md mx-4 my-2 cursor-pointer border-b-2 border-transparent hover:text-red-500 hover:border-red-500 transition duration-300">
              Drawer Item 1
            </p>
            <p className="text-md mx-4 my-2 cursor-pointer border-b-2 border-transparent hover:text-red-500 hover:border-red-500 transition duration-300">
              Drawer Item 2
            </p>
            <p className="text-md mx-4 my-2 cursor-pointer border-b-2 border-transparent hover:text-red-500 hover:border-red-500 transition duration-300">
              Drawer Item 3
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
