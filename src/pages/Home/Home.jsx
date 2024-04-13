import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import SingleEstate from "./SingleEstate/SingleEstate";
import "animate.css";
import { Helmet } from "react-helmet-async";
import AOS from 'aos';
AOS.init();
import 'aos/dist/aos.css';
const Home = () => {
  const allData = useLoaderData();

  return (
    <div className=" text-white">
      <Helmet>
      <title>House Hold</title>
      </Helmet>
      <div className="my-3 md:my-4">
        <Banner></Banner>
      </div>
      <div>
        <h2 data-aos="zoom-in" data-aos-duration="1000" className="text-3xl md:text-5xl font-black text-center mt-10 mb-4 md:mb-8 md:mt-12 text-white">
          Our Item
        </h2>
        
        <div className="grid grid-cols-1  p-5 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
          {allData.map((data) => (
            <SingleEstate key={data.id} data={data}></SingleEstate>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
