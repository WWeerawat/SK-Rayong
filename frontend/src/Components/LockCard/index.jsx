import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
const LockCard = ({ id, images, description }) => {
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
    className: 'slides',
  };
  return (
    <div>
      <div className="relative m-5  ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={image.image} style={{ paddingTop: '56.25%' }}>
              <img
                src={image.image}
                alt=""
                className="object-cover w-full p-4"
              />
            </div>
          ))}
        </Slider>

        <div className="py-4 px-4">
          <p className="text-xl text-left text-body font-display whitespace-pre-line">
            {description}
          </p>
          <div className="grid justify-items-end">
            <button className="bg-yellow shadow-lg hover:bg-yellow-500 px-8 py-2 mt-2 rounded text-md font-display">
              <Link to={'lock/' + id}>รายละเอียดเพิ่มเติม</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockCard;
