import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Radio = (props) => {
  const { name, label, id, value, onChange, checked, disabled, className } = props;

  return (
    <div className={`${label ? 'flex gap-2  items-center' : ''}`}>
      <input
        type="radio"
        className={`form-radio border-sky-base h-3 w-3 ${
          disabled ? "text-gray" : "text-primary"
        }  p-[10px] my-3 focus:ring-0 ${className}`}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      {
        label &&
      <label
      htmlFor={id}
      className={`font-medium capitalize ${clsx(
        disabled && "text-sky-base"
        )}`}
        >
        {label}
      </label>
      }
    </div>
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default Radio;
