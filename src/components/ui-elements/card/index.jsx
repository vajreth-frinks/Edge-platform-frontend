import React from "react";
import PropTypes from "prop-types";

import plusIcon from "../../../assets/plus.svg";
import eyeIcon from "../../../assets/eye.svg";
import { Image } from "react-feather";

const Create = (props) => {
  const { onClick } = props;

  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center border-2 rounded-[10px] border-dashed border-primary w-full min-h-[206px] transition-all cursor-pointer hover:bg-secondary"
    >
      <img src={plusIcon} alt="plus icon" />
      <h3 className="font-bold text-primary ">Deploy New Instance</h3>
    </div>
  );
};

Create.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Item = (props) => {
  const { url, title, description } = props;
  return (
    <div className="flex flex-col shadow-lg  min-h-[206px] rounded-[10px]">
      <div className="flex flex-col items-center justify-center grow-[1] rounded-t-[10px]">
        {url ? (
          <img src={url} alt="project" className="h-full" />
        ) : (
          <div className="bg-gray-300 grow-[1] w-full h-full flex items-center justify-center rounded-t-[10px]">
            <Image className="text-black"/>
          </div>
        )}
      </div>
      <div className="flex items-center gap-4 p-2">
          <div>{/* <img src={eyeIcon} alt="eye icon" /> */}</div>
          <div>
            <h5 className="font-medium mb-1 text-black">{title}</h5>
            {/* <p className="text-xs">{description}</p> */}
          </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Card = { Create, Item };

export default Card;
