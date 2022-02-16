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
    // prevArrow: <PreviousArrow fontSize="40px" />,
    // nextArrow: <NextArrow fontSize="40px" />,
    className: "slides",
  };
  const {
    name,
    description,
    images,
    layoutImage,
    videoView,
    videoNearby,
    location,
  } = props;
  return (
    <div>
      <div className="relative m-5 shadow-lg bg-white hover:scale-105 transition duration-500 cursor-pointer ">
        <Slider {...settings}>
          <img src={land} alt="" className="w-full shadow-lg  " />
          <img src={land} alt="" className="w-full shadow-lg " />
          <img src={land} alt="" className="w-full shadow-lg " />
        </Slider>
        <button className="absolute right-1 top-1 bg-red shadow-lg px-5 py-1 rounded text-md text-white font-display">
          หลุดจอง 4 ล็อค
        </button>
        <div className="py-4 px-4 ">
          <p className="text-xl text-left text-body font-display">
            เนื้อที่กว่า 800 ไร่ พิถีพิถันในการออกแบบผัง โครงการ
            ให้ที่ดินจัดสรรทุกแปลงล้วนตั้ง อยู่บนเนินเขาลดหลั่นต่างระดับ
            ไม่บดบังทิวทัศน์
          </p>
          <div className="grid justify-items-end">
            <button className="bg-yellow shadow-lg hover:bg-yellow-500 px-8 py-2 mt-2 rounded text-md font-display">
              <Link to="/phase">ดูล็อคหลุดจอง</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
