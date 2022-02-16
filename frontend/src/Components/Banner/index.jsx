import React from "react";
import Slider from "react-slick";
import PreviousArrow from "../PreviousArrow";
import NextArrow from "../NextArrow";
import tree from "../../Asset/images/Tree.png";
import bird from "../../Asset/images/Bird.png";
import banner from "../../Asset/images/banner.svg";
const Banner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <PreviousArrow fontSize="40px" />,
    nextArrow: <NextArrow fontSize="40px" />,
    className: "slides",
  };
  return (
    <div>
      <div className="w-full py-4">
        <Slider {...settings}>
          <img className="" src={banner} alt="headerImage" />
          <img className="" src={banner} alt="headerImage" />
          <img className="" src={banner} alt="headerImage" />
          <img className="" src={banner} alt="headerImage" />
        </Slider>
      </div>

      <div className="text-3xl text-body font-display relative px-8 pb-12 ">
        <img src={bird} alt="" className="absolute top-4 right-0 pr-3" />
        <div className="text-left p-3">
          "<span className="inline text-4xl  font-bold">ที่</span>
          ดินระยอง
        </div>
        <p className=" underline text-primary">จัดสรรสวย</p>
        <div className="text-right p-3 pb-6">
          ผ่อนได้
          <span className="inline text-4xl  font-bold">ถูก</span>มาก"
        </div>
        <img src={tree} alt="" className="absolute bottom-0 left-0 " />
      </div>
    </div>
  );
};

export default Banner;
