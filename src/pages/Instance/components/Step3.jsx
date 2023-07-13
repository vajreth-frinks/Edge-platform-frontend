import React from "react";
import Input from "../../../components/ui-elements/input";
import Select from "../../../components/ui-elements/select";
import Radio from "../../../components/ui-elements/radio";
const Step3 = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-lg">Instance Name:</div>
        <div className="text-lg font-bold">SkullCap L01S04</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-lg">Instance ID:</div>
        <div className="text-lg font-bold">IN056628354</div>
      </div>
      <div className="grid grid-cols-1 text-lg font-bold">
        Instance Output Settings:
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>Select HMI(if required):</div>
          <Select />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-lg">Select Output Trigger (if required):</div>
          <Select />
      </div>
    </div>
  );
};

export default Step3;
