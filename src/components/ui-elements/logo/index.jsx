import React from "react";
import PropTypes from "prop-types";
import logo from "../../../assets/frinks_logo.png";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <div className="p-2 w-full flex items-center justify-center">
      <Link to="/projects">
        <img src={logo} className="w-full md:max-w-[408px]" alt="logo" />
      </Link>
    </div>
  );
};

Logo.propTypes = {};

export default Logo;
