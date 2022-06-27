import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from '../../Config/axios';
import NumberFormat from 'react-number-format';
import underline from '../../Asset/images/underline.png';
import { useParams } from 'react-router-dom';
import NearByPlace from '../../Components/NearbyPlace';

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
  const [nearby, setNearby] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`/lock/${lockId}`).then((response) => {
      setLock(response.data);
    });
    axios.get(`/nearby/${lock.phase}/`).then((response) => {
      setNearby(response.data);
    });
  }, [lockId, lock.phase]);

  return (
    <div className="flex flex-col justify-center p-4">
      <div className="flex justify-center m-4">
        <img src={underline} alt="" className="" />
      </div>
      <p className="text-center text-2xl text-body font-display m-4">
        ล็อค : {lock.name}
      </p>

      <Slider {...settings}>
        {lock.images &&
          lock.images.map((image, index) => (
            <div style={{ paddingTop: '56.25%' }}>
              <img
                key={index}
                src={image.image}
                alt=""
                className="object-cover w-full shadow-lg"
              />
            </div>
          ))}
      </Slider>

      <p className="text-md text-left text-body font-display my-4 whitespace-pre-line">
        {lock.description}
      </p>
      <p className="text-center text-2xl text-body font-display m-4">
        รับชมบรรยากาศล็อคที่: {lock.name}
      </p>
      <iframe
        title="lock"
        className="shadow-lg"
        height="180"
        src={'//www.youtube.com/embed/' + lock.videoViewLink}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="text-center text-2xl text-body font-display m-4">
        รายละเอียด
      </p>
      <div className="relative bg-white shadow-xl shadow-inner w-full p-4 ">
        <p className="text-left text-xl text-body font-display m-2">
          ราคา:
          <NumberFormat
            value={lock.price}
            displayType={'text'}
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
            displayType={'text'}
            thousandSeparator={true}
          />
          /เดือน
        </p>
        <p className="text-left text-xl text-body font-display m-2">
          {lock.area} ตารางวา
        </p>
        <br />
        <p className="text-left text-xl text-body font-display m-2 whitespace-pre-line">
          {lock.description}
        </p>
      </div>

      <div className="text-center text-4xl text-primary font-display m-4">
        หากคุณสนใจ
      </div>

      <p className="text-center text-2xl text-body font-display m-4">
        บรรยากาศสถานที่ใกล้เคียง
      </p>
      <div
        className="relative w-full"
        style={{ paddingTop: '56.25%' }}
      >
        <iframe
          title="videoNearby"
          className="absolute w-full h-full top-0 left-0 shadow-lg"
          src={'//www.youtube.com/embed/' + lock.videoNearbyLink}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p className="text-center text-2xl text-body font-display m-4">
        สถานที่ใกล้เคียง
      </p>
      <div className="relative shadow-lg w-full p-4 bg-white">
        {nearby &&
          nearby.map((nearby, nearbyIndex) => (
            <NearByPlace key={nearby.name} nearby={nearby} />
          ))}
      </div>
    </div>
  );
};

export default Lock;
