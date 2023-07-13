import React from "react";
import PropTypes from "prop-types";
import saveIcon from "../../../assets/save.svg";

const Heading = (props) => {
  const { title, showIcon = true } = props;

  return (
    <div className="flex gap-4 items-center">
      {showIcon && <img src={saveIcon} alt="save icon" width={40} />}
      <h1 className="font-bold text-5xl">{title}</h1>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  showIcon: PropTypes.bool,
};

export default Heading;
