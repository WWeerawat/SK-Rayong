import React from "react";
import Slider from "react-slick";
import underline from "../../Asset/images/underline.png";
import land from "../../Asset/images/land1.png";
import layout from "../../Asset/images/layout.png";
import map from "../../Asset/images/map.png";
import ggMapLogo from "../../Asset/images/ggMapLogo.png";
import Dropdowm from "../../Components/Dropdown";
import NearByPlace from "../../Components/NearbyPlace";
const Phase = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="flex flex-col justify-center p-4">
      <div className="flex justify-center m-4">
        <img src={underline} alt="" className="" />
      </div>

      <p className="text-center text-2xl text-body font-display m-4">
        ที่ดินสำหรับ<p className="inline text-primary">กลุ่มบ้านสวน</p>โดยเฉพาะ
      </p>

      <Slider {...settings}>
        <div>
          <img src={land} alt="" className="w-full  shadow-lg" />
        </div>
        <div>
          <img src={land} alt="" className="w-full shadow-lg" />
        </div>
        <div>
          <img src={land} alt="" className="w-full shadow-lg" />
        </div>
      </Slider>

      <p className="text-md text-left text-body font-display my-4">
        เนื้อที่กว่า 800 ไร่ พิถีพิถันในการออกแบบผัง โครงการ
        ให้ที่ดินจัดสรรทุกแปลงล้วนตั้ง อยู่บนเนินเขาลดหลั่นต่างระดับ
        ไม่บดบังทิวทัศน์
      </p>

      <p className="text-center text-2xl text-body font-display m-4">
        รับชมบรรยากาศ
      </p>
      <iframe
        title="videoView"
        className=" shadow-lg"
        height="180"
        src="https://www.youtube.com/embed/zihoyz0u_cs"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <p className="text-center text-2xl text-body font-display m-4">
        ผังล็อกที่ดิน
      </p>
      <img src={layout} alt="" className="shadow-lg " />

      <p className="text-center text-2xl text-body font-display m-4 ">
        ล็อกหลุดจอง
      </p>
      <div className="relative shadow-lg w-full pt-2 bg-white">
        <Dropdowm />
        <Dropdowm />
        <Dropdowm />
        <Dropdowm />
        <div className="m-4"></div>
      </div>

      <p className="text-center text-2xl text-body font-display m-4 ">
        สถานที่ใกล้เคียง
      </p>

      <a href="https://www.google.com/maps/place/Mitthairatana,LTD/@12.7175815,101.1730622,15z/data=!4m5!3m4!1s0x3102f03ff1976bd3:0xc6e736909053c877!8m2!3d12.7135293!4d101.1675871">
        <p className="w-full text-left text-md text-primary font-display  mb-2">
          <img src={ggMapLogo} alt="" className="inline " /> เปิดใน Google maps
        </p>
        <div className="flex justify-center">
          <img src={map} alt="" className="w-full shadow-lg" />
        </div>
      </a>

      <p className="text-center text-2xl text-body font-display m-4">
        บรรยากาศสถานที่ใกล้เคียง
      </p>
      <iframe
        title="videoNearby"
        className="shadow-lg"
        height="180"
        src="https://www.youtube.com/embed/zihoyz0u_cs"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="m-4"></div>

      <div className="relative shadow-lg w-full p-4 bg-white">
        <p className="text-left text-xl text-body font-display ">
          สถานที่ใกล้เคียง
        </p>
        <NearByPlace />
        <NearByPlace />
      </div>
    </div>
  );
};

export default Phase;
