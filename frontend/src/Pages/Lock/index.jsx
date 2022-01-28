import React from "react";
import underline from "../../Asset/images/underline.png";
import land from "../../Asset/images/land1.png";
import layout from "../../Asset/images/layout.png";
import map from "../../Asset/images/map.png";
import ggMapLogo from "../../Asset/images/ggMapLogo.png";
import NearByPlace from "../../Components/NearbyPlace";
const Lock = () => {
  return (
    <div>
      <div class="grid place-items-center m-4">
        <img src={underline} alt="" class="" />
      </div>
      <p class="text-center text-2xl text-body font-display">ล็อก : 7</p>
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
            รับชมบรรยากาศล็อกที่: 7
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
          <p class="text-center text-2xl text-body font-display">รายละเอียด</p>
          <div class="relative bg-white shadow-xl shadow-inner w-full m-5 p-4 ">
            <p class="text-left text-xl text-body font-display m-2">
              ราคา: 1,400,000 บาท
            </p>
            <p class="text-left text-xl text-body font-display m-2">
              <button class="border-2 border-green-500 px-4 rounded text-green-500 mr-2 ">
                ผ่อน
              </button>
              75,543 /เดือน
            </p>
            <p class="text-left text-xl text-body font-display m-2">
              624 ตร.ม.
            </p>
            <br />
            <p class="text-left text-xl text-body font-display m-2">
              ขายที่ดินโฉนด 14 ไร่ หนองแค ใกล้นิคมฯ เหมราช 1 ล้าน / ไร่
              ผังสีชมพู หนองปลาหมอ, หนองแค, สระบุรี
            </p>
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
            <NearByPlace />
          </div>
        </div>
      </div>
      <div class="text-center text-4xl text-primary font-display">
        หากคุณสนใจ
      </div>
    </div>
  );
};

export default Lock;
