import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import defaultUser from "../../assets/user-one.jpg";
import { Tooltip } from "@material-tailwind/react";
import logo from "../../assets/logo-one.png";
const Navbar = () => {
  const { logOutUser, user, loading } = useContext(AuthContext);

  return (
    <div>
      <div className="navbar pt-6 lg:px-14 bg-[#212428] text-white mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn md:ml-5 btn-ghost lg:hidden"
            >
              <svg
                color="white"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu backdrop-blur-md menu-sm dropdown-content z-10 mt-3  p-2 border border-[#FF26A2] bg-[#ebebeb49] rounded-box min-h-[calc(100vh-88px)] w-56"
            >
              <div className="flex lg:justify-normal justify-center lg:flex-row flex-col lg:mt-0 mt-4 items-center gap-3">
                <NavLink
                  style={{ padding: "2px 12px" }}
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "border border-[#FF26A2] rounded-md text-[#FF26A2] font-bold"
                      : ""
                  }
                >
                  Home
                </NavLink>
                {user && (
                  <NavLink
                  
                    style={{ padding: "2px 12px" }}
                    to="/profile"
                    className={({ isActive }) =>
                      isActive
                        ? "border border-[#FF26A2] rounded-md text-[#FF26A2] font-bold"
                        : ""
                    }
                  >
                    Update Profile
                  </NavLink>
                )}
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  <>
                    {user && (
                      <NavLink
                      
                        style={{ padding: "2px 12px" }}
                        to="/book-now"
                        className={({ isActive }) =>
                          isActive
                            ? "border border-[#FF26A2] rounded-md text-[#FF26A2] font-bold"
                            : ""
                        }
                      >
                        Book Now
                      </NavLink>
                    )}
                  </>
                )}
              </div>
            </ul>
          </div>

          <Link to="/">
            <img className="w-20 lg:w-24" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="">
            <div className="flex lg:justify-normal justify-center lg:flex-row flex-col lg:mt-0 mt-4 items-center gap-3">
              <NavLink
                style={{ padding: "2px 12px" }}
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#FF26A2] rounded-md text-[#FF26A2] font-bold"
                    : ""
                }
              >
                Home
              </NavLink>
              {user && (
                <NavLink
                
                  style={{ padding: "2px 12px" }}
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? "border border-[#FF26A2] rounded-md text-[#FF26A2] font-bold"
                      : ""
                  }
                >
                  Update Profile
                </NavLink>
              )}

              {user && (
                <NavLink
                
                  style={{ padding: "2px 12px" }}
                  to="/book-now"
                  className={({ isActive }) =>
                    isActive
                      ? "border border-[#FF26A2] rounded-md text-[#FF26A2] font-bold"
                      : ""
                  }
                >
                  Book Now
                </NavLink>
              )}
              {user && (
                <NavLink
               
                  style={{ padding: "2px 12px" }}
                  to="/my-profile"
                  className={({ isActive }) =>
                    isActive
                      ? "border border-[#FF26A2] rounded-md text-[#FF26A2] font-bold"
                      : ""
                  }
                >
                  Profile
                </NavLink>
              )}
            </div>
          </div>
        </div>
        <div className="navbar-end pr-6 lg:pr-0">
          <div className="flex items-center gap-3 lg:flex">
            {user &&  (
              <div className="avatar">
                <div className={`w-12 rounded-full border-2 border-[#FF26A2]`}>
                  <Tooltip className="bg-[#FF26A2] font-bold" content={user.displayName}  placement="bottom">
                    <span>
                      <img src={user ? user.photoURL : defaultUser} />
                    </span>
                  </Tooltip>
                </div>
              </div>
            )}
            {user ? (
              <>
                <Button
                  className="bg-[#FF26A2] font-grotesk"
                  onClick={logOutUser}
                  style={{
                    textTransform: "capitalize",
                    fontSize: "16px",
                  }}
                  size="md"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    className="bg-[#FF26A2] font-grotesk"
                    style={{
                      textTransform: "capitalize",
                      fontSize: "16px",
                    }}
                    size="md"
                  >
                    Login
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
