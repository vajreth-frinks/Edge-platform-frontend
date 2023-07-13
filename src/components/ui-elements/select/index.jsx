import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Select = (props) => {
  const { options = [], onChange, className, ...rest } = props;

  return (
    <select
      onChange={onChange}
      className={`${className} w-full min-w-[150px] border-sky-light p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-primary focus:ring-primary`}
      {...rest}
    >
      {options.map((t) => (
        <option value={t.value} key={t.name}>
          {t.name}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Select;
