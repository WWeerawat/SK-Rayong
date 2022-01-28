import React from "react";
import headerImg from "../../Asset/images/Header.png";

const Header = () => {
  return (
    <div>
      <img src={headerImg} class="w-full" />
      <div class="text-center text-4xl text-primary font-bold font-display">
        SK
      </div>
      <div class="text-center text-3xl text-body font-display">
        ที่ดินผ่อนได้
      </div>
    </div>
  );
};

export default Header;