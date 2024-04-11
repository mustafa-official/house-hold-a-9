import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const { registerUser, updateProfileInfo } = useContext(AuthContext);

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
        toast.success("Registered Successfully !");
        console.log(result.user);
        updateProfileInfo(name, photo)
          .then(() => console.log("profile updated"))
          .catch((error) => console.log(error));
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
    // <div className="hero min-h-screen bg-base-200">
    //   <div className="hero-content flex-col">
    //     <div className="text-center lg:text-left">
    //       <h1 className="text-5xl font-bold">Register now!</h1>
    //     </div>

    //     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    //       <form onSubmit={handleRegister} className="card-body">
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Name</span>
    //           </label>
    //           <input
    //             name="name"
    //             type="text"
    //             placeholder="name"
    //             className="input input-bordered"
    //             required
    //           />
    //         </div>
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Email</span>
    //           </label>
    //           <input
    //             name="email"
    //             type="email"
    //             placeholder="email"
    //             className="input input-bordered"
    //             required
    //           />
    //         </div>
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Photo URL</span>
    //           </label>
    //           <input
    //             name="photo"
    //             type="text"
    //             placeholder="photo"
    //             className="input input-bordered"
    //             required
    //           />
    //         </div>
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Password</span>
    //           </label>
    //           <div className="relative">
    //             <input
    //               name="password"
    //               type={showPassword ? "text" : "password"}
    //               placeholder="password"
    //               className="input w-full input-bordered"
    //               required
    //             />
    //             <div className="absolute top-[50%] right-0 translate-x-[-50%] translate-y-[-50%]">
    //               {showPassword ? (
    //                 <IoIosEyeOff
    //                   onClick={handleShowPassword}
    //                   className="text-2xl cursor-pointer"
    //                 ></IoIosEyeOff>
    //               ) : (
    //                 <IoIosEye
    //                   onClick={handleShowPassword}
    //                   className="text-2xl cursor-pointer"
    //                 ></IoIosEye>
    //               )}
    //             </div>
    //           </div>
    //         </div>
    //         <div className="form-control mt-6">
    //           <button className="btn btn-primary">Register</button>
    //           {error && <small className="text-red-600">{error}</small>}
    //         </div>
    //       </form>
    //     </div>
    //     <p>
    //       Already have an account? Please{" "}
    //       <span className="text-primary">
    //         <Link to="/login">Login</Link>
    //       </span>
    //     </p>
    //   </div>
    // </div>

    <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
      <Helmet>
      <title>House Hold - Register</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-center mb-12">Register</h1>
      <form onSubmit={handleRegister} className="space-y-6">
        <div className="space-y-1 text-sm">
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md border-secondary border bg-gray-900 text-gray-100 focus:border-rose-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
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
        <div className="space-y-1 text-sm">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Password"
              className="w-full  px-4 py-3 rounded-md border-secondary border bg-gray-900 text-gray-100 focus:border-rose-400"
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
        <button className="block w-full p-3 text-center rounded-sm  bg-secondary">
          Register
        </button>
        {error && <small className="text-red-600">{error}</small>}
      </form>

      <p className="text-xs text-center sm:px-6 text-gray-400">
        Already have an account?{" "}
        <Link to="/login" className="underline font-bold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
