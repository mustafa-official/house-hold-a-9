import banner from "../../assets/banner.jpg";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const SliderOne = () => {
  return (
    <div
      className='hero min-h-[calc(100vh-80px)] bg-center bg-cover '
      style={{ backgroundImage: `url(${banner})`,}}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 data-aos="fade-down" data-aos-duration="2500" className="mb-5 px-3 text-3xl md:text-5xl lg:text-6xl font-black">Unlock Your Dream <span className="animate-text bg-gradient-to-r from-blue-500 via-[#FE26A1] to-[#b4d343] bg-clip-text text-transparent">Home</span></h1>
          <p className="mb-5 px-4 flex-wrap text-[18px] lg:text-xl animate__animated animate__bounceInUp animate__delay-1s">
          Experience deluxe living in this stunning villa. With spacious rooms, beautiful landscaping.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default SliderOne;
