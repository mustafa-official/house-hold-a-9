import messsage from "../../assets/message-us.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import { ScrollRestoration } from "react-router-dom";
AOS.init();
const BookNow = () => {
  return (
    <div className="px-5 md:px-10 md:mt-0 mt-4 lg:mt-0 lg:min-h-[calc(100vh-80px)] flex justify-center items-center lg:px-14">
      <div className="grid max-w-screen-2xl grid-cols-1 items-center gap-4 lg:gap-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  text-white">
        <Helmet>
          <title>House Hold | Contact Us</title>
        </Helmet>
        <div className="flex flex-col  justify-between">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold leading-tight lg:text-5xl">
              Lets talk!
            </h2>
            <div className="text-gray-400">
              Any issue? Dont panic about that, Message us now!{" "}
            </div>
          </div>
          <img
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
            src={messsage}
            className="w-80"
          />
        </div>
        <form
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded bg-gray-800"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#FF26A2] text-white"
          >
            Send Message
          </button>
        </form>
      </div>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default BookNow;
