import React from "react";
import Slider from "react-slick";
import underline from "../../Asset/images/underline.png";
import land from "../../Asset/images/land1.png";
import map from "../../Asset/images/map.png";
import ggMapLogo from "../../Asset/images/ggMapLogo.png";
import NearByPlace from "../../Components/NearbyPlace";
const Lock = () => {
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
        ล็อก : 7
      </p>

      <Slider {...settings}>
        <img src={land} alt="" className="w-full shadow-lg" />
        <img src={land} alt="" className="w-full shadow-lg" />
        <img src={land} alt="" className="w-full shadow-lg" />
      </Slider>

      <p className="text-md text-left text-body font-display my-4">
        เนื้อที่กว่า 800 ไร่ พิถีพิถันในการออกแบบผัง โครงการ
        ให้ที่ดินจัดสรรทุกแปลงล้วนตั้ง อยู่บนเนินเขาลดหลั่นต่างระดับ
        ไม่บดบังทิวทัศน์
      </p>
      <p className="text-center text-2xl text-body font-display m-4">
        รับชมบรรยากาศล็อกที่: 7
      </p>
      <iframe
        title="lock"
        className="shadow-lg"
        height="180"
        src="https://www.youtube.com/embed/zihoyz0u_cs"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="text-center text-2xl text-body font-display m-4">
        รายละเอียด
      </p>
      <div className="relative bg-white shadow-xl shadow-inner w-full p-4 ">
        <p className="text-left text-xl text-body font-display m-2">
          ราคา: 1,400,000 บาท
        </p>
        <p className="text-left text-xl text-body font-display m-2">
          <button className="border-2 border-green-500 px-4 rounded text-green-500 mr-2 ">
            ผ่อน
          </button>
          75,543 /เดือน
        </p>
        <p className="text-left text-xl text-body font-display m-2">
          624 ตร.ม.
        </p>
        <br />
        <p className="text-left text-xl text-body font-display m-2">
          ขายที่ดินโฉนด 14 ไร่ หนองแค ใกล้นิคมฯ เหมราช 1 ล้าน / ไร่ ผังสีชมพู
          หนองปลาหมอ, หนองแค, สระบุรี
        </p>
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
        title="VideoNearby"
        className="shadow-lg mb-4 "
        height="180"
        src="https://www.youtube.com/embed/zihoyz0u_cs"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="relative shadow-lg w-full p-4 bg-white">
        <p className="text-left text-xl text-body font-display ">
          สถานที่ใกล้เคียง
        </p>
        <NearByPlace />
        <NearByPlace />
      </div>
      <div className="text-center text-4xl text-primary font-display m-4">
        หากคุณสนใจ
      </div>
    </div>
  );
};

export default Lock;
