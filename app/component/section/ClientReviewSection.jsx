import React from 'react';
import ClinetReviewCard from '../card/ClinetReviewCard';

const ClientReviewSection = () => {
  return (
    <div className="flex flex-col justify-center items-center  w-full p-5 lg:p-28">
      <h1 className="text-3xl font-semibold">What Our Client Says</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-10">
        <ClinetReviewCard />
        <ClinetReviewCard />
        <ClinetReviewCard />
      </div>
    </div>
  );
};

export default ClientReviewSection;
