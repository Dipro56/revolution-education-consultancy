import Image from 'next/image';
import React from 'react';

const ClinetReviewCard = () => {
  return (
    <div className="p-6 rounded-lg shadow-xl flex flex-col items-end  cursor-pointer hover:border-2 hover:border-blue-700 hover:bg-blue-100">
      <q className="text-md italic font-semibold">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, recusandae!
      </q>
      <Image
        height={30}
        width={30}
        src={'/Idea.svg'}
        alt="image"
        className="my-4"
      />
      <h1 className="text-md mb-6 font-semibold">Muktadir Hossain</h1>
    </div>
  );
};

export default ClinetReviewCard;
