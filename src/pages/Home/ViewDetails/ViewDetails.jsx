import sampleOne from "../../../assets/banner.jpg";
import sampleTwo from "../../../assets/banner-two.jpg";
import sampleThree from "../../../assets/banner-three.jpg";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import 'animate.css';
import { Helmet } from "react-helmet-async";

const ViewDetails = () => {
  const allData = useLoaderData();
  const [selected, setSelected] = useState({});
  const { id } = useParams();


  useEffect(() => {
    const filteredData = allData.find((data) => data.id == id);
    if (filteredData) {
      setSelected(filteredData);
    }
  }, [allData, id]);

  const {
    price,
    estate_title,

    description,
    status,
    area,
    location,
    facilities,
    image,
  } = selected || {};

  const allFacilities = facilities || [];

  return (
    <section className="pt-3 ">
      <Helmet>
      <title>House Hold - {`${estate_title}`}</title>
      </Helmet>
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src={image}
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src={sampleOne}
        />

        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src={sampleTwo}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src={image}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src={sampleThree}
        />
      </div>

      <div className="flex flex-col justify-center p-6 rounded-sm lg:text-left">
        <h1 className="text-2xl flex items-center font-bold leading-none lg:text-3xl">
          {estate_title} (<p className="text-[#ff26a2] animate__animated animate__bounce animate__delay-1s">{status}</p>)
        </h1>
        <p className="mt-3">{description}</p>
        <hr className="my-3" />
        <p className="text-[18px]">Price: {price}</p>
        <hr className="my-3" />
        <p className="text-lg">
          Area: <span className="font-bold">{area}</span>
        </p>
        <hr className="my-3" />
        <p className="text-lg">
          Location: <span className="font-bold">{location}</span>
        </p>
        <hr className="my-3" />
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="font-bold">Facilities:</h2>
          {allFacilities.map((facility, idx) => (
            <p
              size="sm"
              key={idx}
              className="text-[#ff26a2] border font-bold px-4 border-[#ff26a2] rounded-md"
            >
              {facility}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViewDetails;
