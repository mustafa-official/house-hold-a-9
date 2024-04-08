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
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Slider 1</button>
        </div>
      </div>
    </div>
  );
};

export default SliderOne;
