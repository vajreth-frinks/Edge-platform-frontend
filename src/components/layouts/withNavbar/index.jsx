import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../ui-elements/navbar";
import { Outlet } from "react-router-dom";

const WithNavbar = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="h-[calc(100vh-62px)]">
        <Outlet />
      </div>
    </>
  );
};

WithNavbar.propTypes = {};

export default WithNavbar;
