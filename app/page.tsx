import Image from "next/image";
import Banner from "./component/banner/Banner";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner/>
      {/* <h2 className={`mb-3 text-2xl font-semibold`}>
        Revolution Education Consultency
      </h2> */}
    </main>
  );
}
