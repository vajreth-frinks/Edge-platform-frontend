import React from "react";
import PropTypes from "prop-types";
import Heading from "../../components/ui-elements/heading";
import Card from "../../components/ui-elements/card";
import { Link, useNavigate } from "react-router-dom";

export const Container = ({ children }) => {
  return (
    <main className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 p-6">
      <div className="container">{children}</div>
    </main>
  );
};

const Project = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-instance");
  };

  return (
    <Container>
      <Heading title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-4 gap-6 flex-wrap">
        <Card.Create onClick={handleClick} />

        <Link to="/projects/1">
          <Card.Item
            title="Skull Cap Inspection"
            description="4 Instance Running"
          />
        </Link>
        <Link to="/projects/1">
          <Card.Item
            title="Skull Cap Inspection"
            description="4 Instance Running"
          />
        </Link>
        <Link to="/projects/1">
          <Card.Item
            title="Skull Cap Inspection"
            description="4 Instance Running"
          />
        </Link>
        <Link to="/projects/1">
          <Card.Item
            title="Skull Cap Inspection"
            description="4 Instance Running"
          />
        </Link>
        <Link to="/projects/1">
          <Card.Item
            title="Skull Cap Inspection"
            description="4 Instance Running"
          />
        </Link>
        <Link to="/projects/1">
          <Card.Item
            title="Skull Cap Inspection"
            description="4 Instance Running"
          />
        </Link>
        <Link to="/projects/1">
          <Card.Item
            title="Skull Cap Inspection"
            description="4 Instance Running"
          />
        </Link>
      </div>
    </Container>
  );
};

Project.propTypes = {};

export default Project;
