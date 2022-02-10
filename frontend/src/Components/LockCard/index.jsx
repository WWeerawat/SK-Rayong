import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import land from "../../Asset/images/land1.png";
const LockCard = () => {
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
  return (
    <div>
      <div class="relative m-5  ">
        <Slider {...settings}>
          <img src={land} alt="" class="w-full shadow-lg p-4" />
          <img src={land} alt="" class="w-full shadow-lg p-4" />
          <img src={land} alt="" class="w-full shadow-lg p-4" />
        </Slider>

        <div class="py-4 px-4">
          <p class="text-xl text-left text-body font-display">
            เนื้อที่กว่า 800 ไร่ พิถีพิถันในการออกแบบผัง โครงการ
            ให้ที่ดินจัดสรรทุกแปลงล้วนตั้ง อยู่บนเนินเขาลดหลั่นต่างระดับ
            ไม่บดบังทิวทัศน์
          </p>
          <div class="grid justify-items-end">
            <button class="bg-yellow shadow-lg hover:bg-yellow-500 px-8 py-2 mt-2 rounded text-md font-display">
              <Link to="/Lock">รายละเอียดเพิ่มเติม</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockCard;
