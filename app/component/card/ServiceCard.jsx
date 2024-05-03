import Image from 'next/image';
import React from 'react';

const ServiceCard = ({title, description}) => {
  return (
    <div className="p-6 rounded-lg shadow-xl flex flex-col justify-start items-center cursor-pointer hover:border-2 hover:border-blue-700 hover:bg-blue-100">
      <Image height={50} width={50} src={'/Idea.svg'} alt="image" className='my-4' />
      <h1 className="text-2xl mb-6 text-center font-semibold">{title}</h1>
      <p className="text-md  ">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
