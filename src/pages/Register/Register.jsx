import { Link, ScrollRestoration, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { registerUser, updateProfileInfo, setLoading } =
    useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    setError("");
    if (password.length < 6) {
      return toast.error("Password must be at least 6 character");
    }
    if (!/.*[A-Z].*/.test(password)) {
      return toast.error("Password must have an uppercase letter");
    }
    if (!/.*[a-z].*/.test(password)) {
      return toast.error("Password must have a lowercase letter");
    }

    registerUser(email, password)
      .then((result) => {
        console.log(result.user);

        // window.location.reload();
        // navigate("/");
        updateProfileInfo(name, photo)
          .then(() => {
            setLoading(false);
            console.log("profile updated");
          })
          .catch((error) => console.log(error));
        navigate("/");
        toast.success("Registered Successfully !");
      })
      .catch((error) => {
        setError(error.code);
        console.log(error);
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="px-5 md:px-10 pt-1 pb-8 lg:px-14">
      <div className="w-full mx-auto mt-8 lg:mt-6 max-w-md px-4 md:px-8 py-8 mb-3 lg:mb-5 space-y-2 rounded-xl border border-[#c2227d] text-gray-100">
        <Helmet>
          <title>House Hold | Register</title>
        </Helmet>
        <h1 className="text-2xl font-bold text-center mb-12">Register</h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md  border bg-gray-900 text-gray-100"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md  border bg-gray-900 text-gray-100"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="photo"
              required
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md border bg-gray-900 text-gray-100"
            />
          </div>
          <div className="space-y-1 text-sm">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Password"
                className="w-full  px-4 py-3 rounded-md border bg-gray-900 text-gray-100"
              />
              <div className="absolute top-[50%] right-0 translate-x-[-50%] translate-y-[-50%]">
                {showPassword ? (
                  <IoIosEyeOff
                    onClick={handleShowPassword}
                    className="text-2xl cursor-pointer"
                  ></IoIosEyeOff>
                ) : (
                  <IoIosEye
                    onClick={handleShowPassword}
                    className="text-2xl cursor-pointer"
                  ></IoIosEye>
                )}
              </div>
            </div>
          </div>
          <button className="block w-full font-bold p-3 text-center rounded-sm  bg-[#FF26A2]">
            Register
          </button>
          {error && <small className="text-[#FF26A2]">{error}</small>}
        </form>

        <p className="text-xs text-center sm:px-6 text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="underline font-bold">
            Login
          </Link>
        </p>
      </div>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default Register;
