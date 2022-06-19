import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from '../../Config/axios';
import underline from '../../Asset/images/underline.png';
import Map from '../../Asset/images/Footer_map.png';
import Dropdowm from '../../Components/Dropdown';
import NearByPlace from '../../Components/NearbyPlace';
import { useParams } from 'react-router-dom';
const Phase = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  let { id } = useParams();
  const [phase, setPhase] = useState([]);
  const [nearby, setNearby] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`/phase/${id}/`).then((response) => {
      setPhase(response.data);
    });
    axios.get(`/nearby/${id}/`).then((response) => {
      setNearby(response.data);
    });
  }, [id]);

  return (
    <div className="flex flex-col justify-center p-4">
      <div className="flex justify-center m-4">
        <img src={underline} alt="" className="" />
      </div>

      <div className="text-center text-2xl text-body font-display m-4">
        ที่ดินสำหรับ
        <span className="inline text-primary">กลุ่มบ้านสวน</span>
        โดยเฉพาะ
      </div>

      <p className="text-center text-2xl text-body font-display m-4">
        {phase.name}
      </p>
      <Slider {...settings}>
        {phase.phase_images &&
          phase.phase_images.map((image, index) => (
            <div
              key={image.image + image.id}
              style={{ paddingTop: '56.25%' }}
            >
              <img
                src={image.image}
                alt=""
                className="object-cover w-full shadow-lg"
              />
            </div>
          ))}
      </Slider>

      <p className="text-md text-left text-body font-display my-4">
        {phase.description}
      </p>

      <p className="text-center text-2xl text-body font-display m-4">
        รับชมบรรยากาศ
      </p>
      <div
        className="relative w-full"
        style={{ paddingTop: '56.25%' }}
      >
        <iframe
          title="videoView"
          className="absolute w-full h-full top-0 left-0 shadow-lg"
          src={'//www.youtube.com/embed/' + phase.videoViewLink}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p className="text-center text-2xl text-body font-display m-4">
        ผังล็อกที่ดิน
      </p>
      <Slider {...settings}>
        {phase.layout_images &&
          phase.layout_images.map((image, index) => (
            <div
              key={image.image + image.id}
              style={{ paddingTop: '56.25%' }}
            >
              <img
                src={image.image}
                alt=""
                className="object-cover w-full shadow-lg"
              />
            </div>
          ))}
      </Slider>

      <p className="text-center text-2xl text-body font-display m-4 ">
        ล็อกหลุดจอง
      </p>
      <div className="relative shadow-lg w-full pt-2 bg-white">
        {phase.phase_lock &&
          phase.phase_lock.map((lock, index) => (
            <Dropdowm
              key={lock.name}
              id={lock.id}
              name={lock.name}
              images={lock.images}
              description={lock.description}
            />
          ))}

        <div className="m-4"></div>
      </div>

      <p className="text-center text-2xl text-body font-display m-4 ">
        แผนที่ที่ดิน
      </p>
      <a href={phase.location}>
        <div className="flex justify-center m-4">
          <img src={Map} alt="" className="" />
        </div>
        <p className="text-center text-xl text-primary font-display m-4">
          เปิดใน Google maps
        </p>
      </a>

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
          src={'//www.youtube.com/embed/' + phase.videoNearbyLink}
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

      <p className="text-center text-2xl text-body font-display m-4">
        แผนพัฒนาสาธรนูปโภค
      </p>
      <p className="text-md text-left text-body font-display my-4">
        {phase.health_description}
      </p>
    </div>
  );
};

export default Phase;
