import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { RiExternalLinkLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-center w-max mx-auto items-center min-h-[40vh] lg:min-h-[calc(100vh-95px)]">
      <Helmet>
        <title>House Hold | Profile</title>
      </Helmet>
      <div className="flex flex-col col-span-1  h-min py-8 md:py-10 lg:py-14 shadow-md rounded-xl sm:px-12 border border-[#c2227d] text-gray-100">
        <img
          src={user?.photoURL}
          alt=""
          className="w-32 border-[#c2227d] object-cover border h-32 mx-auto rounded-full  aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 px-3 flex flex-col items-center">
            <h2 className="text-[22px] font-bold animate-text bg-gradient-to-r from-blue-500 via-[#c2227d] to-orange-700 bg-clip-text text-transparent">
              {user?.displayName}
            </h2>
            <div className="flex flex-col justify-center items-start">
            <div>
            <h2 className="text-[16px] text-[#EEE0FFB3] mt-3 flex items-center gap-2">
              <MdOutlineMailOutline></MdOutlineMailOutline>{" "}
              {user?.email?.length > 22
                ? user?.email?.slice(0, 25) + "..."
                : user?.email}
            </h2>
            </div>

            <div>
            <a
              target="_blank"
              href={user?.photoURL}
              className="text-[16px] flex text-[#EEE0FFB3]  items-center gap-2 hover:underline hover:text-[#c2227d]"
            >
              <RiExternalLinkLine></RiExternalLinkLine>
              {user?.photoURL?.slice(0, 30)}
            </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
