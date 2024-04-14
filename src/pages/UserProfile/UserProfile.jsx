import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-95px)]">
      <div className="flex flex-col col-span-1 justify-center h-max lg:max-w-xs px-4 py-8 md:py-10 lg:py-14 shadow-md rounded-xl sm:px-12 border border-[#c2227d] text-gray-100">
        <img
          src={user?.photoURL}
          alt=""
          className="w-32 border-[#c2227d] object-cover border h-32 mx-auto rounded-full  aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2">
            <h2 className="text-xl font-bold animate-text bg-gradient-to-r from-[#c2227d] via-purple-600 to-orange-600 bg-clip-text text-transparent">{user?.displayName}</h2>
            <h2 className="md:text-[14px] mt-3">{user?.email}</h2>
            <a
              href={user?.photoURL}
              className="md:text-[14px] flex justify-center hover:underline hover:text-[#c2227d]"
            >
              {user?.photoURL.slice(0, 30)}
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
