import React from 'react';

const ApponmentBanner = () => {
  return (
    <div className="flex justify-between bg-indigo-950 py-10 px-28 w-full">
      <div className="flex flex-col">
        <h1 className="text-white text-2xl font-bold">Get Consultation</h1>
        <h1 className="text-gray-200 text-md">
          Book an appointment with our experieneced consultanats to discuss your
          study abroad options.
        </h1>
      </div>
      <button className='bg-white p-5 rounded-md text-red-700 font-bold hover:text-indigo-950'>
          Book Appoinment
      </button>
    </div>
  );
};

export default ApponmentBanner;
