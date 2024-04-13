import bannerTwo from "../../assets/banner-two.jpg";
import 'animate.css';
const SliderTwo = () => {
  return (
    <div
      className="hero min-h-[90vh] bg-center bg-cover rounded-2xl"
      style={{ backgroundImage: `url(${bannerTwo})`}}
    >
      <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
      <div className="hero-content text-center text-neutral-content">
      <div className="max-w-xl">
          <h1 className="mb-5 px-3 text-3xl md:text-5xl lg:text-6xl font-black animate__animated animate__backInRight animate__slow">Find Your Perfect Home Today!</h1>
          <p className="mb-5 px-4 flex-wrap text-[18px] lg:text-xl">
          Experience deluxe living in this stunning villa. With spacious rooms, beautiful landscaping.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default SliderTwo;
