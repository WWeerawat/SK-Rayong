import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const PreviousArrow = (props) => {
  const { className, onClick, fontSize } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        style={{ color: "white", fontSize: fontSize }}
      />
    </div>
  );
};

export default PreviousArrow;
