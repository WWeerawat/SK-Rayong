import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../../Asset/images/Header.svg";

const Header = () => {
  return (
    <div>
      <img src={headerImg} class="w-full " />
      <div class="text-center text-4xl text-primary font-bold font-display">
        <Link to="">SK</Link>
      </div>
      <div class="text-center text-3xl text-body font-display">
        ที่ดินผ่อนได้
      </div>
    </div>
  );
};

export default Header;
