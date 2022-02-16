import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import line from "../../Asset/images/line.png";
const NearByPlace = ({ nearby }) => {
  return (
    <div>
      <div className="grid grid-cols-8 grid-rows-3 gap-2 py-2 ">
        <div className="col-start-1 col-end-1">
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "green" }} />
        </div>
        <div className="col-start-2 col-end-7 text-left ">
          <p className="inline text-xl text-body font-display ">
            {nearby.name}
          </p>
        </div>
        <div className="col-start-7 col-end-9 text-right">
          <p className="inline text-md text-body font-display ">
            {nearby.time} mins
          </p>
        </div>
        <div className="col-start-2 col-end-7 text-left ">
          <p className="inline text-md text-body font-display ">
            ห่างจากล็อกที่ดิน {nearby.distance} เมตร
          </p>
        </div>
        <div className="col-start-7 col-end-9 text-right">
          <p className="inline text-md text-body font-display ">
            {nearby.distance} m
          </p>
        </div>
        <div className="col-start-2 col-end-7 text-left ">
          <p className="inline text-md text-body font-display ">
            ดูรายละเอียดสถานที่เพิ่มเติม
          </p>
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="border-b-2 w-5/6 "></div>
      </div>
    </div>
  );
};

export default NearByPlace;
