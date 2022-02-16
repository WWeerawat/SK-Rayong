import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import land from "../../Asset/images/land1.png";
const Card = (props) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    className: "slides",
  };
  const { phase } = props;
  return (
    <div>
      <div className="relative m-5 shadow-lg bg-white hover:scale-105 transition duration-500 cursor-pointer ">
        <Slider {...settings}>
          {phase.images &&
            phase.images.map((image, index) => (
              <div
                key={image.image}
                className="flex max-h-[320px]"
                style={{ paddingTop: "56.25%" }}
              >
                <img
                  src={image.image}
                  alt=""
                  className="object-cover w-full shadow-lg "
                />
              </div>
            ))}
        </Slider>
        <button className="absolute right-1 top-1 bg-red shadow-lg px-5 py-1 rounded text-md text-white font-display">
          หลุดจอง {phase.phase_lock.length} ล็อก
        </button>
        <div className="py-4 px-4 ">
          <div className="text-xl text-left text-body font-display">
            {phase.name}
            <p>{phase.description}</p>
          </div>
          <div className="grid justify-items-end">
            <button className="bg-yellow shadow-lg hover:bg-yellow-500 px-8 py-2 mt-2 rounded text-md font-display">
              <Link to={"/phase/" + phase.id}>ดูล็อคหลุดจอง</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
