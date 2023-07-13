import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Input = (props) => {
  const {
    inputType = "primary",
    shadow,
    placeholder = "Placeholder text",
    onChange,
    label,
    caption,
    className,
    type,
    error,
    errorText,
    classNameInput,
    ...rest
  } = props;

  const boxShadow = clsx({ "shadow-lg": shadow });

  const focus = {
    primary: "focus-visible:outline-primary",
    secondary: "focus-visible:outline-none",
    error: "focus-visible:outline-red-500",
  };

  const borderColor = clsx(
    inputType === "error" ? "border-red-500" : "border-sky-light"
  );
  return (
    <div className={`${clsx(className ? className : "w-full")}`}>
      {label && <label className="text-ink mb-1 block">{label}</label>}

      <input
        {...rest}
        className={`${boxShadow} ${borderColor} w-full w-min-[250px] border-1 rounded-lg px-4 py-2 ${
          type === "number" ? "focus" : ""
        } ${focus[inputType]} ${classNameInput}`}
        placeholder={placeholder}
        onChange={onChange}
      />

      {caption && (
        <caption
          className={`text-ink-lightest text-sm mt-3 block text-left ${clsx(
            error && "text-red-500"
          )}`}
        >
          {caption}
        </caption>
      )}

      {error && (
        <caption
          className={`text-ink-lightest text-sm mt-3 block text-left ${clsx(
            error && "text-red-500"
          )}`}
        >
          {errorText}
        </caption>
      )}
    </div>
  );
};

Input.propTypes = {
  error: PropTypes.bool,
  errorText: PropTypes.string,
  inputType: PropTypes.oneOf(["primary", "secondary", "error"]),
  classNameInput: PropTypes.string,
};

export default Input;
