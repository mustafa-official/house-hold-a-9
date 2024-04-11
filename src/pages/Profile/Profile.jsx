import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";


const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Helmet>
        <title>House Hold - Update Profile</title>
      </Helmet>
      <div className="flex flex-col justify-evenly">
        <div className="flex flex-col col-span-1 justify-center h-max lg:max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
          <img
            src={user?.photoURL}
            alt=""
            className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
          />
          <div className="space-y-4 text-center divide-y divide-gray-700">
            <div className="my-2 space-y-1">
              <h2 className="md:text-xl font-semibold">{user?.displayName}</h2>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center"></div>
          </div>
        </div>
        <div className="border">
        <form  className="space-y-6 text-white p-5">
        <div className="space-y-1 text-sm">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md border-secondary border bg-gray-900 text-gray-100 focus:border-rose-400"
          />
        </div>
        
        <div className="space-y-1 text-sm">
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="w-full px-4 py-3 rounded-md border-secondary border bg-gray-900 text-gray-100 focus:border-rose-400"
          />
        </div>
        
        <button className="block font-bold w-full p-3 text-center rounded-md  bg-secondary">
          Update Profile
        </button>
        
      </form>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
