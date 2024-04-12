import bannerThree from "../../assets/banner-three.jpg";
const SliderThree = () => {
  return (
    <div
      className="hero min-h-[90vh] bg-center bg-cover rounded-2xl"
      style={{ backgroundImage: `url(${bannerThree})` }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold">
            Welcome to Your Home
          </h1>
          <p className="mb-5">
            A community designed for seniors, offering independent living with
            supportive services. Peaceful surroundings and social activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderThree;
