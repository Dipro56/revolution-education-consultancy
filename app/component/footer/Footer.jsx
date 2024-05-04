import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className="w-full px-10 md:px-24 py-5 bg-indigo-950">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-start md:justify-center items-start md:items-center gap-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
          <Image src={'/rc_logo.PNG'} height={150} width={150} alt="logo" />
          <div>
            <h1 className="text-white">Email: test@gmail.com</h1>
            <h1 className="text-white">Phone: 01717680510</h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start md:items-center  gap-3">
          <Link href={'#about_us'}>
            <p className="text-white text-md">About Us</p>
          </Link>

          <Link href={'#service'}>
            <p className="text-white">Service</p>
          </Link>

          <Link href={'/'}>
            <p className="text-white">Appoinment</p>
          </Link>
        </div>

        <div className="flex flex-col items-start md:items-center  gap-3">
          <h1 className="text-md text-white">Follow Us</h1>
          <div className="flex">
            <FaFacebookSquare
              className="mx-2 cursor-pointer"
              fill="white"
              size={26}
            />
            <IoLogoYoutube
              className="mx-2 cursor-pointer"
              fill="white"
              size={26}
            />
            <RiInstagramFill
              className="mx-2 cursor-pointer"
              fill="white"
              size={26}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
