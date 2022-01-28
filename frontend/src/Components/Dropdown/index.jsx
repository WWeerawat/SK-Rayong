import React from "react";
import { Collapse } from "react-collapse";
import useCollapse from "react-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import line from "../../Asset/images/line.png";
import LockCard from "../LockCard";

const Dropdowm = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div class="collapsible">
      <div class="header" {...getToggleProps()}>
        <div class="grid grid-cols-8 gap-4 p-4  ">
          <div class="col-start-1 col-span-3">
            <button class="bg-red shadow-lg px-5 py-1 rounded text-md text-white font-display">
              หลุดจอง
            </button>
          </div>
          <div class="col-start-4 col-span-3 text-left align-baseline">
            <p class="inline text-xl text-body font-display ">ล็อก 7</p>
          </div>
          <div class="col-start-8 align-middle">
            {isExpanded ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </div>
        </div>
        <div class="grid place-items-center">
          <img src={line} alt="" class="" />
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div class="content">
          <LockCard />
        </div>
      </div>
    </div>
  );
};

export default Dropdowm;
