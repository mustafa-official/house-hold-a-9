import { useContext, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
const Profile = () => {
  const { user, updateProfileInfo, setLoading, setUser } =
    useContext(AuthContext);
  const nameValue = useRef(null);
  const photoValue = useRef(null);
  useEffect(() => {
    nameValue.current.value = user.displayName;
    photoValue.current.value = user.photoURL;
  }, [user.displayName, user.photoURL]);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateProfileInfo(name, photo)
      .then(() => {
        setUser({
          ...user,
          displayName: name,
          photoURL: photo,
        });
        toast.success("Profile Updated")
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  return (
    <div>
      <Helmet>
        <title>House Hold - Update Profile</title>
      </Helmet>
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="flex flex-col col-span-1 justify-center h-max lg:max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
          <img
            src={user?.photoURL}
            alt=""
            className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
          />
          <div className="space-y-4 text-center divide-y divide-gray-700">
            <div className="my-2 space-y-3">
              <h2 className="md:text-xl font-semibold">{user?.displayName}</h2>
              <h2 className="md:text-xl font-semibold">{user?.email}</h2>
              <a href={user?.photoURL}  className="md:text-[18px] font-medium hover:underline">{user?.photoURL.slice(0, 30)}</a>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center"></div>
          </div>
        </div>
        <div className="border">
          <form
            onSubmit={handleUpdateProfile}
            className="space-y-6 text-white p-5"
          >
            <div className="space-y-1 text-sm">
              <input
                name="name"
                type="text"
                ref={nameValue}
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md border-secondary border bg-gray-900 text-gray-100 focus:border-rose-400"
              />
            </div>

            <div className="space-y-1 text-sm">
              <input
                name="photo"
                type="text"
                ref={photoValue}
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
