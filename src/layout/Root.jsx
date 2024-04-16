import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import Headroom from "react-headroom";
const Root = () => {
  return (
    <div>
      <Headroom>
        <Navbar></Navbar>
      </Headroom>
      <div className="bg-[#212428]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
