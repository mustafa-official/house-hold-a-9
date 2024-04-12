
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SingleEstate = ({ data }) => {
  const { image, segment_name, status, location, id } = data;
  return (
    <div className="flex flex-col p-4 space-y-6 overflow-hidden h-full  border border-gray-600 dark:bg-gray-50 dark:text-gray-800">
    <div>
      <div className="rounded-lg">
        <img
          src={image}
          alt=""
          className="object-cover rounded-md  hover:scale-105 transition-all  w-full mb-4 h-auto md:h-52 lg:h-52 mx-auto"
        />
      </div>
      
      <h2 className="mb-1 text-xl flex-grow font-semibold">{segment_name}</h2>
      <p className="text-sm dark:text-gray-600">{location}</p>
    </div>
    <hr />
    <div className="flex flex-wrap justify-between">
      <div className="space-x-2">
        <p
          aria-label="Share this post"
          type="button"
          className="p-2 text-center font-bold"
        >
          {status.toUpperCase()}
        </p>
      </div>
      <div className="flex items-center gap-2 dark:text-gray-600">
        <div className="flex items-center gap-2">
          <Link
            to={`/view-details/${id}`}
            className="relative inline-flex items-center px-6 py-1 overflow-hidden text-[18px] font-medium text-gray-900 border border-gray-900 hover:border-none rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-secondary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex left-[126px] items-center justify-start w-5 h-4 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">View Details</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

SingleEstate.propTypes = {
    data: PropTypes.object,
}
export default SingleEstate;
