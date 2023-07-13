import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../../ui-elements/input";
import Logo from "../../ui-elements/logo";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../ui-elements/button";

const LoginCard = (props) => {
  const {} = props;

  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (value, name) => {
    setLoginData((loginData) => ({
      ...loginData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    navigate("/instances")
  };
  return (
    <div className="flex flex-col items-center justify-center h-min">
      <Logo />
      <div className="bg-white rounded-2xl p-7 mt-9 w-full max-w-[408px] flex flex-col gap-[24px]">
        <h1 className="text-black text-3xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
          <Input
            label="User Id"
            onChange={handleChange}
            placeholder="Your email"
            name="email"
          />

          <Input
            label="Password"
            type="password"
            onChange={handleChange}
            placeholder="Your password"
            name="password"
          />

          <Button type="submit" shadow>Login</Button>

          <p className="text-sm text-center">
            Unable to login? Reach out to{" "}
            <span className="font-bold">Administrator</span>
          </p>

          <Link to="/register">
            <Button btnType="secondary">Sign Up</Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

LoginCard.propTypes = {};

export default LoginCard;
