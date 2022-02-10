import React from "react";
import Map from "../../Asset/images/Footer_map.png";
import FB from "../../Asset/images/Footer_FB.png";
import Phone from "../../Asset/images/Footer_Phone.png";
import FooterImg from "../../Asset/images/Footer.svg";
const Footer = () => {
  return (
    <div class="flex flex-col justify-center p-4">
      <p class="text-center text-3xl text-body font-display ">ติดต่อเรา</p>

      <div class="flex justify-center m-4">
        <img src={Map} alt="" class="" />
      </div>
      <p class="text-center text-xl text-body font-display m-4">
        หนองพะวาค้าวัสดุ 5 ตำบล บางบุตร
        <br /> อำเภอบ้านค่าย ระยอง 21120
      </p>

      <div class="flex justify-center m-4">
        <img src={FB} alt="" class="" />
      </div>
      <p class="text-center text-xl text-body font-display m-4">
        ที่ดินระยองจัดสรรสวยแบ่งล็อค
        <br />
        ผ่อนได้ถูกมาก
      </p>

      <div class="flex justify-center m-4">
        <img src={Phone} alt="" class="" />
      </div>
      <p class="text-center text-3xl text-red500 font-display m-4">โทรด่วน</p>
      <p class="text-center text-xl text-body font-display m-4">
        099-999-9999 (คุณเอ)
      </p>
      <p class="text-center text-xl text-body font-display m-4">
        099-999-9999 (คุณเอ)
      </p>
      <img src={FooterImg} alt="" class="w-full" />
    </div>
  );
};

export default Footer;
