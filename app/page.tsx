import Image from 'next/image';
import Banner from './component/banner/Banner';
import ApponmentBanner from './component/banner/ApponmentBanner';
import ServiceSection from './component/section/ServiceSection';
import WhyUsSection from './component/section/WhyUsSection';
import ClientReviewSection from './component/section/ClientReviewSection';
import AboutUsSection from './component/section/AboutUsSection';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <ApponmentBanner />
      <AboutUsSection />
      <WhyUsSection/>
      <ServiceSection />
      <ClientReviewSection />
      {/* <h2 className={`mb-3 text-2xl font-semibold`}>
        Revolution Education Consultency
      </h2> */}
    </main>
  );
}
