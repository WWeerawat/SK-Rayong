import React from "react";
import Map from "../../Asset/images/Footer_map.png";
import FB from "../../Asset/images/Footer_FB.png";
import Phone from "../../Asset/images/Footer_Phone.png";
import FooterImg from "../../Asset/images/Footer.svg";
const Footer = () => {
  return (
    <div className="flex flex-col justify-center p-4">
      <p className="text-center text-3xl text-body font-display ">ติดต่อเรา</p>

      <div className="flex justify-center m-4">
        <img src={Map} alt="" className="" />
      </div>
      <a href="https://www.google.co.th/maps/place/%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%B0%E0%B8%A7%E0%B8%B2%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B8/@12.8286466,101.3407254,17z/data=!3m1!4b1!4m5!3m4!1s0x3102e20756f8853f:0x92130fb7d4895af!8m2!3d12.8286298!4d101.3429096">
        <p className="text-center text-xl text-body font-display m-4">
          หนองพะวาค้าวัสดุ 5 ตำบล บางบุตร
          <br /> อำเภอบ้านค่าย ระยอง 21120
        </p>
      </a>

      <div className="flex justify-center m-4">
        <img src={FB} alt="" className="" />
      </div>

      <a href="https://www.facebook.com/tatasukerd">
        <p className="text-center text-xl text-body font-display m-4">
          ที่ดินระยองจัดสรรสวยแบ่งล็อค
          <br />
          ผ่อนได้ถูกมาก
        </p>
      </a>

      <div className="flex justify-center m-4">
        <img src={Phone} alt="" className="" />
      </div>
      <p className="text-center text-3xl text-red500 font-display m-4">
        โทรด่วน
      </p>

      <a href="tel:086-3624948">
        <p className="text-center text-xl text-body font-display m-4">
          099-999-9999 (คุณเอ)
        </p>
      </a>
      <a href="tel:086-3624948">
        <p className="text-center text-xl text-body font-display m-4">
          099-999-9999 (คุณเอ)
        </p>
      </a>
      <img src={FooterImg} alt="" className="w-full" />
    </div>
  );
};

export default Footer;
