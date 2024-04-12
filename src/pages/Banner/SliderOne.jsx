import banner from "../../assets/banner.jpg";

const SliderOne = () => {
  return (
    <div
      className='hero min-h-[90vh] bg-center bg-cover rounded-2xl'
      style={{ backgroundImage: `url(${banner})`,}}
    >
      <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold">Welcome to Your Home</h1>
          <p className="mb-5">
          Experience deluxe living in this stunning villa. With spacious rooms, beautiful landscaping, and a private pool.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default SliderOne;
