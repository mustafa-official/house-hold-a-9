import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import defaultUser from "../../assets/user-one.jpg";
const Navbar = () => {
  const { logOutUser, user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <div className="navbar container px-0 lg:px-10 mx-auto mt-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
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
              className="menu backdrop-blur-md menu-sm dropdown-content z-10 mt-3  p-2 border border-[#23BE0A] bg-[#ebebeb49] rounded-box min-h-[calc(100vh-88px)] w-56"
            >
              <div className="flex lg:justify-normal justify-center lg:flex-row flex-col lg:mt-0 mt-4 items-center gap-3">
                <NavLink
                  style={{ padding: "5px 12px" }}
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "border border-secondary rounded-md text-secondary font-bold"
                      : ""
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  style={{ padding: "5px 12px" }}
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? "border border-secondary rounded-md text-secondary font-bold"
                      : ""
                  }
                >
                  Profile
                </NavLink>
              </div>
            </ul>
          </div>

          <Link to="/" className="text-xl lg:text-3xl font-bold">
            House <span className="text-secondary">Hold</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="">
            <div className="flex lg:justify-normal justify-center lg:flex-row flex-col lg:mt-0 mt-4 items-center gap-3">
              <NavLink
                style={{ padding: "5px 12px" }}
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border border-secondary rounded-md text-secondary font-bold"
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                style={{ padding: "5px 12px" }}
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "border border-secondary rounded-md text-secondary font-bold"
                    : ""
                }
              >
                Profile
              </NavLink>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="hidden items-center gap-5 lg:flex">
            <div className="avatar">
              <div
                className={`w-9 rounded-full ring hover:ring-[#23BE0A] ring-offset-base-100 ring-offset-2`}
              >
                <img
                  title={user && user.displayName}
                  src={user ? user.photoURL : defaultUser}
                  alt=""
                />
              </div>
            </div>
            {user ? (
              <>
                <Button
                  className="bg-secondary"
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
                    className="bg-secondary"
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
