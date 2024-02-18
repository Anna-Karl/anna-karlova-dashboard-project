import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import "./LoginForm.scss";


const LoginForm = () => {

  return (
    <>
    <Link to="/home">
        <img src={avatar} className="avatar" width={40} height={40} alt="avatar"/>
    </Link>
    </>
  );
};

export default LoginForm;