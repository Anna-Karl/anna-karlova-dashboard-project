import React from "react";
import "./Header.scss";
import logo from "../../assets/logo_cupcake.png";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <h1 className="title">Good morning, Admin!</h1>
      </div>
      <div className="search">
        <input placeholder="Search product..." type="text" className="input" id="searching"/>
      </div>
      <button className="button">
        <img src={avatar} alt="avatar"/>
      </button>
    </header>
  );
}
