import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

export const baseSteps = [
  "Project Details",
  "Database and Objective",
  "Defect Details",
];

const Steps = (props) => {
  const { currentStep = 0 } = props;

  const percent = (currentStep + 1) / baseSteps.length;

  return (
    <div className="w-full flex flex-col justify-between relative">
      <div
        className={`w-full h-[7px] absolute top-[7px] z-0 bg-sky-light rounded-3xl`}
      >
        <div
          className={`" h-[7px] bg-primary rounded-3xl`}
          style={{
            width: (currentStep / (baseSteps.length - 1)) * 100 + "%",
          }}
        ></div>
      </div>
      <div className="flex z-10">
        {baseSteps.map((t, i) => (
          <div
            key={t}
            className={`flex flex-col ${clsx({
              "items-center": i !== 0 && i !== baseSteps.length - 1,
              "items-end": i === baseSteps.length - 1,
            })} `}
            style={{
              width: 100 / baseSteps.length + "%",
            }}
          >
            <div
              className={`w-5 h-5 ${clsx(
                currentStep >= i ? "bg-primary" : "bg-sky-base"
              )} rounded-full mb-1`}
            ></div>
            <div className="text-xs">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

Steps.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default Steps;
