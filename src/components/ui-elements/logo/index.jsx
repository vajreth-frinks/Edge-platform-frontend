import React from "react";
import PropTypes from "prop-types";
// import logo from "../../../assets/frinks_logo.png";


const Logo = ({logo}) => {
  return (
    
    <img src={logo} className="w-full md:max-w-[408px]" alt="logo" />
 
  );
};

Logo.propTypes = {};

export default Logo;
