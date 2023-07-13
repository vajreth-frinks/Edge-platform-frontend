import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Logo from "../../ui-elements/logo";
import Input from "../../ui-elements/input";
import Button from "../../ui-elements/button";

const RegisterCard = (props) => {
  const {} = props;

  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    username: "",
    organisation: "",
    confirmPassword: "",
  });

  const handleChange = (value, name) => {
    setRegisterData((registerData) => ({
      ...registerData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerData);
    navigate("/login")
  };

  const handelClickBack = () => {
    navigate(-1)
  };

  return (
    <div className="flex flex-col items-center justify-center md:h-min w-full">
      <Logo />

      <div className="bg-white rounded-2xl p-7 mt-2 md:mt-9 w-full max-w-[660px] flex flex-col gap-[24px]">
        <h1 className="text-black text-3xl font-bold text-center">
          Welcome to Frinks AI!
        </h1>
        <h2 className="text-black text-2xl text-center font-bold">
          Register User
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 ">
            <Input
              label="User name"
              onChange={handleChange}
              placeholder="Your email"
              name="username"
            />

            <Input
              label="User Id"
              onChange={handleChange}
              placeholder="Your email"
              name="email"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 ">
            <Input
              label="Enter Password"
              type="password"
              onChange={handleChange}
              placeholder="Enter password"
              name="password"
            />

            <Input
              label="Confirm Password"
              type="password"
              onChange={handleChange}
              placeholder="Confirm password"
              name="confirmPassword"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  items-center gap-5 ">
            <Input
              label="Organisation Name"
              onChange={handleChange}
              placeholder="Organisation Name"
              name="organisation"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-end">
              <Button
                block={false}
                btnType="secondary"
                className="w-[155px]"
                onClick={handelClickBack}
              >
                Back
              </Button>
            </div>
            <Button block={false} type="submit" className="w-[155px]">
              Finish
            </Button>
          </div>

          <p className="text-sm text-center">
            You can latter add more users in Teams & Users Section
          </p>
        </form>
      </div>
    </div>
  );
};

RegisterCard.propTypes = {};

export default RegisterCard;
