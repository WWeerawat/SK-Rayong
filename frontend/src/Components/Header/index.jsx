import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../../Asset/images/Header.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div>
      <img src={headerImg} className="w-full " alt="header_image" />
      <div className="text-center text-4xl text-primary font-bold font-display">
        <Link to="">SK</Link>
      </div>
      <div className="text-center text-3xl text-body font-display">
        ที่ดินผ่อนได้
      </div>
      <div className="mx-2 bounce flex justify-between">
        <FontAwesomeIcon icon={faLongArrowAltDown} size="3x" color="green" />
        <FontAwesomeIcon icon={faLongArrowAltDown} size="3x" color="green" />
      </div>
    </div>
  );
};

export default Header;
