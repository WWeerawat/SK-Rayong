import React from "react";
import { Collapse } from "react-collapse";
import underline from "../../Asset/images/underline.png";
import land from "../../Asset/images/land1.png";
import layout from "../../Asset/images/layout.png";
import map from "../../Asset/images/map.png";
import ggMapLogo from "../../Asset/images/ggMapLogo.png";
import Dropdowm from "../../Components/Dropdown";
import NearByPlace from "../../Components/NearbyPlace";
const Phase = () => {
  return (
    <div>
      <div class="grid place-items-center m-4">
        <img src={underline} alt="" class="" />
      </div>
      <p class="text-center text-2xl text-body font-display">
        ที่ดินสำหรับ<p class="inline text-primary">กลุ่มบ้านสวน</p>โดยเฉพาะ
      </p>
      <div class="relative ">
        <div class="grid place-items-center m-4">
          <img src={land} alt="" class="" />
          <p class="text-md text-left text-body font-display">
            เนื้อที่กว่า 800 ไร่ พิถีพิถันในการออกแบบผัง โครงการ
            ให้ที่ดินจัดสรรทุกแปลงล้วนตั้ง อยู่บนเนินเขาลดหลั่นต่างระดับ
            ไม่บดบังทิวทัศน์
          </p>
        </div>
      </div>
      <div class="relative ">
        <div class="grid place-items-center m-4">
          <p class="text-center text-2xl text-body font-display m-4">
            รับชมบรรยากาศ
          </p>
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/zihoyz0u_cs"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div class="relative ">
        <div class="grid place-items-center m-4">
          <p class="text-center text-2xl text-body font-display m-4">
            ผังล็อกที่ดิน
          </p>
          <img src={layout} alt="" class="" />
        </div>
      </div>
      <div class="relative ">
        <div class="grid place-items-center m-4">
          <p class="text-center text-2xl text-body font-display ">
            ล็อกหลุดจอง
          </p>
          <div class="relative m-5 shadow-lg w-full pt-2 bg-white">
            <Dropdowm />
            <Dropdowm />
            <Dropdowm />
            <Dropdowm />
          </div>
        </div>
      </div>
      <div class="relative ">
        <div class="grid place-items-center m-4">
          <p class="text-center text-2xl text-body font-display ">
            สถานที่ใกล้เคียง
          </p>

          <p class="w-full text-left text-md text-primary font-display m-2">
            <img src={ggMapLogo} alt="" class="inline" /> เปิดใน Google maps
          </p>
          <img src={map} alt="" class="" />
        </div>
      </div>
      <div class="relative ">
        <div class="grid place-items-center m-4">
          <p class="text-center text-2xl text-body font-display m-4">
            บรรยากาศสถานที่ใกล้เคียง
          </p>
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/zihoyz0u_cs"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div class="relative ">
        <div class="grid place-items-center m-4">
          <div class="relative m-5 shadow-lg w-full p-4 bg-white">
            <p class="text-left text-xl text-body font-display ">
              สถานที่ใกล้เคียง
            </p>
            <NearByPlace />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase;
