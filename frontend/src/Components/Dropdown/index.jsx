import React from "react";
import useCollapse from "react-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import LockCard from "../LockCard";

const Dropdowm = ({ id, name, images, description }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        <div className="grid grid-cols-8 gap-4 p-4  ">
          <div className="col-start-1 col-span-3">
            <button className="bg-red shadow-lg px-5 py-1 rounded text-md text-white font-display">
              หลุดจอง
            </button>
          </div>
          <div className="col-start-4 col-span-3 text-left align-baseline">
            <p className="inline text-xl text-body font-display ">{name}</p>
          </div>
          <div className="col-start-8 align-middle">
            {isExpanded ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </div>
        </div>
        <div className="grid place-items-center">
          <div className="border-b-2 w-5/6 "></div>
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          <LockCard id={id} images={images} description={description} />
        </div>
      </div>
    </div>
  );
};

export default Dropdowm;
