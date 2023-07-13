import React from "react";
import Input from "../../../components/ui-elements/input";
import Modal from "../../../components/ui-elements/modal";
import clsx from "clsx";
import Radio from "../../../components/ui-elements/radio";

const font="text-lg font-bold";
const Step2 = (props) => {
  return (
    <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-lg">Instance Name:</div>
        <div className="text-lg font-bold">SkullCap L01S04</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="text-lg">Instance ID:</div>
      <div className="text-lg font-bold" >IN056628354</div>
      </div>
      <div className="grid grid-cols-1 text-lg font-bold">
        Instance Input Settings:
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="text-lg">
        Select Camera:
      </div>
      <div>
        <Input shadow />

      </div>
      <div className="grid grid-cols-1 md:grid-cols:2">
        <div className={"text-lg"}>
          Inspection Input:
        </div>
        <div className="flex gap-4">
            <Radio
              
              
             
            />
            <Radio
              
            />
          </div>
        <div>

        </div>

      </div>
      </div>
     
    </div>
  );
};

export default Step2;
