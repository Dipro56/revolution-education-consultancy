import React from 'react';
import ServiceCard from '../card/ServiceCard';

const ServiceSection = () => {
  const whyUsData = [
    {
      id: 1,
      title: 'Experience',
      description:
        'Experience - all that matters! Having more than 16+ years of experience in education consultancy, NHP Education Consultants have constructed a history of success and unprecedented growth from a small consulting firm. Our dedication and unwavering commitment made it possible to create the goodwill that we achieved. We have a team of trained professional that you can rely on and trust. With us, you will get services from the best in the industry. We provide accurate, factual and updated information only. There are many pitfalls to avoid, important decisions to make, and systems to navigate. Our experts will make sure you have the best advice throughout your study abroad journey.',
    },
    {
      id: 2,
      title: 'Transparency',
      description:
        'Straight Talk is Good Business! Our services are our commitments to you and we deliver what we commit. We do not chase the impossible and make fake promises - we live in reality. We are truthful to our words and maintain accountability and integrity. We maintain transparency (openness, communication and accountability) in every aspect of our business. We work to ensure students and families receive the fullest picture of admissions with real insight into how they can navigate their futures, guiding them through the whole admissions process, visa application and even pre-departure orientation.',
    },
    {
      id: 3,
      title: 'Personal Care',
      description:
        'We look at the consultancy differently! We are highly clinical to take care of your problems and remain focused until we can find the right solution. We dedicate ourselves to understand your individual needs and provide special tailored service you may require. We are always in touch and responsive to your queries.',
    },
    {
      id: 4,
      title: 'Authorized Agent',
      description:
        'Our excellent network with the Universities helps us to deliver superlative services to our students. We provide end to end services in the application process and visa formalities along with tutorials to crack entry-level tests IELTS, PTE, TOEFL, etc  which makes us a single point of contact for overseas education. We work closely with students and institutions to ensure that students receive the best and most appropriate guidance. Our aim is to ensure that every student get proper advice, and this, together with our extensive educational knowledge and our excellent relationship with Universities/Colleges, means that we always achieve optimum placement for our students.',
    },
    {
      id: 5,
      title: 'Intelligency & Skill',
      description:
        'Practical wisdom, trusted advice! Our success rate with visa applications and university admissions is one of the highest in the industry. So, you can be rest assured that your whole application process is in good hands with our certified and professionally trained education consultants. We provide helps with accurate and error-free application for admission and visa application lodgement. Once we take an assignment, we carry on our work on time and follow correct procedures. Our target is to achieve 100% success rate.',
    },
    {
      id: 6,
      title: 'Long Term Partnership',
      description:
        'Business is our signature! At RC, we are committed to provide much more than excellent education consultancy – with us, you are not a number only; you are an individual whom we take care of. We hope that you can take great inspiration and motivation from our counselling and drive your ambition to the optimum level. We also guide you from the start to finish during your studies, taking total care of you throughout and then help you with career planning for the future.',
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center  w-full p-5 lg:p-28">
      <h1 className="text-3xl font-semibold">Why Us?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-10 items">
        {/* Correctly using map */}
        {whyUsData?.map((item) => (
          <ServiceCard
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
