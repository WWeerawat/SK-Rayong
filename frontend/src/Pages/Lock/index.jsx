import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "../../Config/axios";
import NumberFormat from "react-number-format";
import underline from "../../Asset/images/underline.png";
import map from "../../Asset/images/map.png";
import ggMapLogo from "../../Asset/images/ggMapLogo.png";
import NearByPlace from "../../Components/NearbyPlace";
import { useParams } from "react-router-dom";
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
  let { lockId } = useParams();

  const [lock, setLock] = useState([]);
  useEffect(() => {
    axios.get(`/lock/${lockId}`).then((response) => {
      setLock(response.data);
    });
  }, [lockId]);

  return (
    <div className="flex flex-col justify-center p-4">
      <div className="flex justify-center m-4">
        <img src={underline} alt="" className="" />
      </div>
      <p className="text-center text-2xl text-body font-display m-4">
        ล็อก : {lock.name}
      </p>

      <Slider {...settings}>
        {lock.images &&
          lock.images.map((image, index) => (
            <div style={{ paddingTop: "56.25%" }}>
              <img
                key={index}
                src={image.image}
                alt=""
                className="object-cover w-full shadow-lg"
              />
            </div>
          ))}
      </Slider>

      <p className="text-md text-left text-body font-display my-4">
        {lock.description}
      </p>
      <p className="text-center text-2xl text-body font-display m-4">
        รับชมบรรยากาศล็อกที่: {lock.name}
      </p>
      <iframe
        title="lock"
        className="shadow-lg"
        height="180"
        src={"//www.youtube.com/embed/" + lock.videoView}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="text-center text-2xl text-body font-display m-4">
        รายละเอียด
      </p>
      <div className="relative bg-white shadow-xl shadow-inner w-full p-4 ">
        <p className="text-left text-xl text-body font-display m-2">
          ราคา: <pr />
          <NumberFormat
            value={lock.price}
            displayType={"text"}
            thousandSeparator={true}
          />
          บาท
        </p>
        <p className="text-left text-xl text-body font-display m-2">
          <button className="border-2 border-green-500 px-4 rounded text-green-500 mr-2 ">
            ผ่อน
          </button>
          <NumberFormat
            value={lock.monthly}
            displayType={"text"}
            thousandSeparator={true}
          />
          /เดือน
        </p>
        <p className="text-left text-xl text-body font-display m-2">
          {lock.area} ตร.ม.
        </p>
        <br />
        <p className="text-left text-xl text-body font-display m-2">
          {lock.description}
        </p>
      </div>
      <p className="text-center text-2xl text-body font-display m-4 ">
        สถานที่ใกล้เคียง
      </p>
      <a href={lock.location}>
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
        src={"//www.youtube.com/embed/" + lock.videoNearby}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="relative shadow-lg w-full p-4 bg-white">
        <p className="text-left text-xl text-body font-display ">
          สถานที่ใกล้เคียง
        </p>
        {lock.nearbies &&
          lock.nearbies.map((nearby, index) => (
            <NearByPlace key={index} nearby={nearby} />
          ))}
      </div>
      <div className="text-center text-4xl text-primary font-display m-4">
        หากคุณสนใจ
      </div>
    </div>
  );
};

export default Lock;
