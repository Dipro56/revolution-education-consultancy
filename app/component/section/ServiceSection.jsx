'use client';
import React, { useEffect } from 'react';
import ServiceCard from '../card/ServiceCard';
import { FaPeopleCarryBox } from 'react-icons/fa6';
import { FaUniversity } from 'react-icons/fa';
import { FaPassport } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaPlane } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div
      id="service"
      className="flex flex-col justify-center items-center  w-full p-5 lg:p-28"
    >
      <h1 className="text-3xl font-semibold">Our Serivce</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-10">
        <div
          data-aos="flip-right"
          className="p-6 rounded-lg shadow-xl flex flex-col justify-start items-center cursor-pointer hover:border-2 hover:border-blue-700 hover:bg-blue-100"
        >
          <div className="p-5 bg-blue-200 rounded-full border-blue-700 border-2">
            <FaPeopleCarryBox size={35} fill="black" />
          </div>
          <h1 className="text-2xl text-center font-semibold my-5">
            Career Counseling
          </h1>
          <p className="text-md  ">
            Career Advice, Pick a Suitable Place to Study, Pick Suitable
            University, Finance Discussion
          </p>
        </div>

        <div
          data-aos="flip-right"
          className="p-6 rounded-lg shadow-xl flex flex-col justify-start items-center cursor-pointer hover:border-2 hover:border-blue-700 hover:bg-blue-100"
        >
          <div className="p-5 bg-blue-200 rounded-full border-blue-700 border-2">
            <FaUniversity size={35} fill="black" />
          </div>
          <h1 className="text-2xl text-center font-semibold my-5">
            University Admissions
          </h1>
          <p className="text-md  ">
            Bring all the Required Document, Pick a Suitable University, Our
            Counselor will do all the Paperwork, Accept Offer Letter & Pay
            Tuition Fee, Wait for Confirmation on Enrollment
          </p>
        </div>

        <div
          data-aos="flip-right"
          className="p-6 rounded-lg shadow-xl flex flex-col justify-start items-center cursor-pointer hover:border-2 hover:border-blue-700 hover:bg-blue-100"
        >
          <div className="p-5 bg-blue-200 rounded-full border-blue-700 border-2">
            <FaPassport size={35} fill="black" />
          </div>
          <h1 className="text-2xl text-center font-semibold my-5">
            Visa Consultancy
          </h1>
          <p className="text-md  ">
            After Receiving COE Bring all the Required Document, Our Application
            Manager will do all the Paperwork, Our Head will double check all
            Paperwork, Bring the required fee for visa office, Submit the
            Paperwork to visa office.
          </p>
        </div>

        <div
          data-aos="flip-right"
          className="p-6 rounded-lg shadow-xl flex flex-col justify-start items-center cursor-pointer hover:border-2 hover:border-blue-700 hover:bg-blue-100"
        >
          <div className="p-5 bg-blue-200 rounded-full border-blue-700 border-2">
            <FaHome size={35} fill="black" />
          </div>
          <h1 className="text-2xl text-center font-semibold my-5">
            Accommodation Advice
          </h1>
          <p className="text-md  ">
            Place to live for a student, Living cost discussion, Money saving
            advice.
          </p>
        </div>

        <div
          data-aos="flip-right"
          className="p-6 rounded-lg shadow-xl flex flex-col justify-start items-center cursor-pointer hover:border-2 hover:border-blue-700 hover:bg-blue-100"
        >
          <div className="p-5 bg-blue-200 rounded-full border-blue-700 border-2">
            <FaPlane size={35} fill="black" />
          </div>
          <h1 className="text-2xl text-center font-semibold my-5">
            Pre-Departure Briefing
          </h1>
          <p className="text-md  ">
            Air Ticket Pricing, What to take and what not to take, Airplane
            Safety Precautions, Understand Local Airport Rules, Understand
            International Airport Rules.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
