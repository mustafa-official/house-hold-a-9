import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-5 md:px-10 lg:px-14">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
