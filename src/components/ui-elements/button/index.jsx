import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Button = (props) => {
  const {
    iconPrefix,
    iconSuffix,
    block = true,
    btnType = "primary",
    children,
    className = "",
    shadow = false,
    size = "medium",
    ...rest
  } = props;

  const style = {
    primary: "bg-primary text-white hover:bg-primary-light",
    secondary: "bg-secondary text-primary hover:bg-secondary-light",
    error: "bg-warning text-white hover:bg-warning-light",
    outline: "bg-transparent border-primary border-1 hover:bg-secondary-light"
  };

  const btnWith = clsx(block ? "w-full" : "");

  const boxShadow = clsx(shadow ? "shadow-gray-primary" : "");

  const sizeClass = clsx(size === "medium" ? "py-2.5" : "py-1");

  return (
    <button
      {...rest}
      className={`${className} ${style[btnType]} ${btnWith} rounded-full px-4 ${sizeClass} transition-all ${boxShadow} `}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["medium", "small"]),
  btnType: PropTypes.oneOf(["primary", "secondary", "outline"])
};

export default Button;
