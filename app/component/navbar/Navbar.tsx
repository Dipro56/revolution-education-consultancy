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
      <div className="px-5 md:px-10 lg:px-28 py-5 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={'/rc_logo.PNG'} height={120} width={120} alt="logo" />
        </div>
        <div className="flex items-center">
          <Link className="hidden md:block" href={'#about_us'}>
            <p className="text-lg font-bold mx-2 cursor-pointer border-b-2 border-transparent hover:text-red-500 hover:border-red-500 transition duration-300">
              ABOUT US
            </p>
          </Link>

          <Link className="hidden md:block" href={'#service'}>
            <p className="text-lg font-bold mx-2 cursor-pointer border-b-2 border-transparent hover:text-red-500 hover:border-red-500 transition duration-300">
              SERVICE
            </p>
          </Link>
          <p className="hidden md:block text-lg font-bold mx-2 cursor-pointer border-b-2 border-transparent hover:text-red-500 hover:border-red-500 transition duration-300">
            CONTACT
          </p>
          <FaBars
            className="block md:hidden mx-2 cursor-pointer"
            onClick={handleDrawer}
          />
        </div>
      </div>

      {/* Side navigation */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-600">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-blue-950 shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out p-5">
            <RxCross2
              className="text-white"
              onClick={handleDrawer}
              fill="white"
              size={25}
            />
            <Link className="md:midden" href={'#about_us'}>
              <p className="text-lg text-white font-bold mx-2 cursor-pointer border-b-2 border-transparent hover:text-red-500 hover:border-red-500 transition duration-300 my-2">
                ABOUT US
              </p>
            </Link>

            <Link className="md:midden" href={'#service'}>
              <p className="text-lg  text-white font-bold mx-2 cursor-pointer border-b-2 border-transparent hover:text-red-500 hover:border-red-500 transition duration-300 my-2">
                SERVICE
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
