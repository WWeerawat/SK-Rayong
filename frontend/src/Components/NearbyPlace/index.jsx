import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
const NearByPlace = ({ nearby }) => {
  return (
    <div>
      <div
        className="grid grid-cols-3 gap-2 py-2 items-center"
        style={{ gridTemplateColumns: '20px 1fr 64px' }}
      >
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          style={{ color: 'green' }}
        />

        <p className="inline text-xl text-body font-display text-left ">
          {nearby.name}
        </p>

        <p className="inline text-md text-body font-display text-right">
          {nearby.time} mins
        </p>
        <p></p>
        <p className="inline text-md text-body font-display text-left">
          ห่างจากล็อคที่ดิน {nearby.distance} กิโลเมตร
        </p>

        <p className="inline text-md text-body font-display text-right ">
          {nearby.distance} km
        </p>
        <p></p>
        <a href={nearby.link} className="text-left">
          <p className="inline text-md text-body font-display ">
            ดูรายละเอียดสถานที่เพิ่มเติม
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: 'green' }}
            />
          </p>
        </a>
      </div>

      <div className="grid place-items-center">
        <div className="border-b-2 w-5/6 "></div>
      </div>
    </div>
  );
};

export default NearByPlace;
