import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const NextArrow = (props) => {
  const { className, onClick, fontSize } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon
        icon={faChevronRight}
        style={{ color: "white", fontSize: fontSize }}
      />
    </div>
  );
};

export default NextArrow;
