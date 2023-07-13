import React from "react";
import Navbar from "../../components/ui-elements/navbar";
import Radio from "../../components/ui-elements/radio";
import Select from "../../components/ui-elements/select";
import Steps from "../../components/ui-elements/steps";

const Home = () => {
  return (
    <>
      <div>
        <Radio name="age" label="label 1" id="1" />
        <Select />
        <Steps />
      </div>
    </>
  );
};

export default Home;
