import sampleOne from "../../../assets/banner.jpg";
import sampleTwo from "../../../assets/banner-two.jpg";
import sampleThree from "../../../assets/banner-three.jpg";
import { ScrollRestoration, useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "animate.css";
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
    segment_name,
    description,
    status,
    area,
    location,
    facilities,
    image,
  } = selected || {};

  const allFacilities = facilities || [];

  return (
    <div className="px-5 md:px-10 pt-1 pb-8 lg:px-14">
      <section className="pt-3 text-white">
        <Helmet>
          <title>House Hold | {`${estate_title}`}</title>
        </Helmet>
        <div className="w-full h-full grid grid-cols-2 gap-4 py-4 mx-auto md:grid-cols-4">
          <img
            src={image}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm lg:min-h-48  aspect-square"
            src={sampleOne}
          />

          <img
            alt=""
            className="w-full h-dull rounded shadow-sm lg:min-h-48  aspect-square"
            src={sampleTwo}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm lg:min-h-48 aspect-square bg-gray-500"
            src={image}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm lg:min-h-48  aspect-square"
            src={sampleThree}
          />
        </div>

        <div className="flex flex-col justify-center py-6 rounded-sm lg:text-left">
          <h1 className="text-xl leading-normal flex items-center gap-2 font-medium lg:text-3xl">
            <p>{estate_title}</p>
            <p
              data-aos="zoom-out-down"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="text-[#ff26a2] text-[16px] lg:text-xl"
            >
              ({status?.toUpperCase()})
            </p>
          </h1>
          <p className="mt-3 text-[15px] lg:text-[18px]">{description}</p>
          <hr className="my-6 border-[#888888]" />

          <div className="flex items-center gap-5 lg:gap-10">
            <div className="space-y-4">
              <p className="text-[16px] lg:text-[18px]">Segment:</p>
              <p className="text-[16px] lg:text-[18px]">Area:</p>
              <p className="text-[16px] lg:text-[18px]">Location:</p>
              <p className="text-[16px] lg:text-[18px]">Price:</p>
            </div>
            <div className="space-y-4 flex-wrap">
              <p className="text-[16px] lg:text-[18px]">{segment_name}</p>
              <p className="text-[16px] lg:text-[18px]">{area}</p>
              <p className="text-[16px] lg:text-[18px]">{location}</p>
              <p className="text-[16px] lg:text-[18px]">{price}</p>
            </div>
          </div>
          <hr className="my-6 border-[#888888]" />

          <div className="flex flex-wrap items-center gap-6 lg:gap-8 text-[18px]">
            <h2 className="text-[18px]">Facilities:</h2>
            {allFacilities.map((facility, idx) => (
              <p
                data-aos="flip-left"
                data-aos-duration="2000"
                size="sm"
                key={idx}
                className="text-text-white hover:text-[#ff26a2] transition-all hover:border-white border px-4 py-1 lg:px-5 border-[#ff26a2] rounded-md"
              >
                {facility}
              </p>
            ))}
          </div>
        </div>
        <ScrollRestoration></ScrollRestoration>
      </section>
    </div>
  );
};

export default ViewDetails;
