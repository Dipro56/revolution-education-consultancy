import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const SocialNavbar = () => {
  return (
    <div className="bg-indigo-950 py-4 text-white flex justify-between items-center px-72">
      <div className='flex flex-col justify-center'>
        <p className='text-lg'>Book an Appoinment</p>
        <div className="flex items-center">
          <FaPhoneAlt />
          <p className="mx-2">+8801717680510</p>
        </div>
      </div>
      <div className="flex">
        <p className="mx-2 cursor-pointer hover:text-red-500">Facebook</p>
        <p className="mx-2 cursor-pointer hover:text-red-500">Linked In</p>
      </div>
    </div>
  );
};

export default SocialNavbar;
