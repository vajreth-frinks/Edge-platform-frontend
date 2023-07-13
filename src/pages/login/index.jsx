import React from "react";
import PropTypes from "prop-types";
import LoginCard from "../../components/ui-parts/login-card";

const Login = (props) => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <LoginCard />
    </main>
  );
};

Login.propTypes = {};

export default Login;
