import { useContext, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import "react-edit-text/dist/index.css";
const Profile = () => {
  const { user, updateProfileInfo, setLoading, setUser } =
    useContext(AuthContext);
  const nameValue = useRef(null);
  const photoValue = useRef(null);
  const emailValue = useRef(null);
  useEffect(() => {
    nameValue.current.value = user.displayName;
    photoValue.current.value = user.photoURL;
    emailValue.current.value = user.email;
  }, [user.displayName, user.photoURL, user.email]);
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
        toast.success("Profile Updated");
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  return (
    <div className="px-5 md:px-10 pt-1 pb-8 lg:px-14">
      <Helmet>
        <title>House Hold | Update Profile</title>
      </Helmet>

      <div className="w-full mx-auto mt-8 lg:mt-6 max-w-md px-4 md:px-8 py-4 mb-3 lg:mb-5 space-y-2 rounded-xl border border-[#c2227d] text-gray-100">
        <form
          onSubmit={handleUpdateProfile}
          className="py-6 flex flex-col gap-6 lg:py-12"
        >
          <div className="space-y-1 text-sm">
            <label>
              Name <small>(Edit)</small>
            </label>
            <input
              name="name"
              type="text"
              ref={nameValue}
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md  border bg-gray-900 text-gray-100"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label>Email</label>
            <input
              type="email"
              name="email"
              disabled
              ref={emailValue}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md  border bg-gray-900 text-gray-100"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label>
              Photo URL <small>(Edit)</small>
            </label>
            <input
              name="photo"
              type="text"
              ref={photoValue}
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md border bg-gray-900 text-gray-100"
            />
          </div>

          <div className="mt-6">
            <button className="block w-full font-bold p-3 text-center rounded-sm  bg-[#FF26A2]">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
