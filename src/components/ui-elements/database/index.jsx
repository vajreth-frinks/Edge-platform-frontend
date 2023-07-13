import React from "react";
import PropTypes from "prop-types";
import { Folder, FolderPlus } from "react-feather";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { title, to } = props;

  return (
    <Link
      to={to}
      className="flex items-center w-full max-w-[220px] bg-secondary-light border-1 border-primary rounded-[5px] gap-3  px-3 py-2 cursor-pointer"
    >
      <Folder className="text-primary" />
      <span className="text-primary">{title}</span>
    </Link>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
};

const Create = (props) => {
  const { title, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="flex items-center w-full max-w-[220px] bg-secondary-light border-1 border-dashed border-primary rounded-[5px] gap-3  px-3 py-2 cursor-pointer"
    >
      <FolderPlus className="text-primary" />
      <span className="text-primary">{title}</span>
    </div>
  );
};

Create.propTypes = {
  onClick: PropTypes.func.isRequired,
  to: PropTypes.string,
};

const Database = {
  Create,
  Item,
};

export default Database;
