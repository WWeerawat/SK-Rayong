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
      <div class="w-full py-4">
        <Slider {...settings}>
          <img class="" src={banner} alt="headerImage" />
          <img class="" src={banner} alt="headerImage" />
          <img class="" src={banner} alt="headerImage" />
          <img class="" src={banner} alt="headerImage" />
        </Slider>
      </div>

      <div class="text-3xl text-body font-display relative px-8 pb-12 ">
        <img src={bird} alt="" class="absolute top-4 right-0 pr-3" />
        <p class="text-left p-3">
          "<p class="inline text-4xl  font-bold">ที่</p>
          ดินระยอง
        </p>
        <p class=" underline text-primary">จัดสรรสวย</p>
        <p class="text-right p-3 pb-6">
          ผ่อนได้
          <p class="inline text-4xl  font-bold">ถูก</p>มาก"
        </p>
        <img src={tree} alt="" class="absolute bottom-0 left-0 " />
      </div>
    </div>
  );
};

export default Banner;
