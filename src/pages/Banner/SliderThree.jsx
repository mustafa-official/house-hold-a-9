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
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Slider 3</button>
        </div>
      </div>
    </div>
  );
};

export default SliderThree;
