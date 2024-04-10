import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import SingleEstate from "./SingleEstate/SingleEstate";
import 'animate.css';
const Home = () => {
  const allData = useLoaderData();
  
  return (
    <div>
      <div className="my-3 md:my-8">
        <Banner></Banner>
      </div>
      <div>
        <h2 className="text-4xl font-black text-center mb-8 animate__animated animate__bounce animate__delay-2s">Our Item</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
          {allData.map((data) => (
            <SingleEstate key={data.id} data={data}></SingleEstate>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
