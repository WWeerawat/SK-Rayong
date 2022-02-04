import React from "react";
import Map from "../../Asset/images/Footer_map.png";
import FB from "../../Asset/images/Footer_FB.png";
import Phone from "../../Asset/images/Footer_Phone.png";
import FooterImg from "../../Asset/images/Footer.svg";
const Footer = () => {
  return (
    <div class="relative">
      <div class="grid place-items-center m-4">
        <p class="text-center text-3xl text-body font-display m-4">ติดต่อเรา</p>
        <img src={Map} alt="" class="" />
        <p class="text-center text-xl text-body font-display m-4">
          หนองพะวาค้าวัสดุ 5 ตำบล บางบุตร
          <br /> อำเภอบ้านค่าย ระยอง 21120
        </p>
        <img src={FB} alt="" class="" />
        <p class="text-center text-xl text-body font-display m-4">
          ที่ดินระยองจัดสรรสวยแบ่งล็อค
          <br />
          ผ่อนได้ถูกมาก
        </p>
        <img src={Phone} alt="" class="" />
        <p class="text-center text-3xl text-red500 font-display m-4">โทรด่วน</p>
        <p class="text-center text-xl text-body font-display m-4">
          099-999-9999 (คุณเอ)
        </p>
        <p class="text-center text-xl text-body font-display m-4">
          099-999-9999 (คุณเอ)
        </p>
      </div>
      <img src={FooterImg} alt="" class="w-full" />
    </div>
  );
};

export default Footer;
