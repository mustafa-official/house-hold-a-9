import bannerTwo from "../../assets/banner-two.jpg";

const SliderTwo = () => {
  return (
    <div
      className="hero min-h-[90vh] bg-center bg-cover rounded-2xl"
      style={{ backgroundImage: `url(${bannerTwo})`}}
    >
      <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold">Welcome to Your Home</h1>
          <p className="mb-5">
          This spacious single-family home offers comfortable living with modern amenities. Featuring a large backyard and cozy interior.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default SliderTwo;
