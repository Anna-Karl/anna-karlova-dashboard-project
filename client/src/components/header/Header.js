import React from "react";
import "./Header.scss";
import LoginForm from "../login/LoginForm";


export default function Header() {
  return (
    <header  className='header'>
        <h1 className='header__logo'> Dashboard </h1>
        {/* <LoginForm /> */}
    </header>
  );
};