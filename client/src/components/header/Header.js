import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo_cupcake.png";
import "./Header.scss";
import LoginForm from "../login/LoginForm";


const Header = () => {
  // const location = useLocation();
  // const path = location.pathname;

  return (
    <header  className='header'>
        <h1 className='header__logo' img={logo}> Dashboard </h1>
        <LoginForm />
    </header>
    //   <div className="header__logo-wrapper">
    //     <img className="header__logo-img" src={logo} alt="cupcake logo" />
    //   </div>
    //   <div className="header__wrapper">
    //     <Link
    //       className={
    //         path.startsWith("/warehouses")
    //           ? "header__link header__link--active"
    //           : "header__link"
    //       }
    //       to="/warehouses"
    //     >
    //       Warehouses
    //     </Link>
    //     <Link
    //       className={
    //         path.startsWith("/inventories")
    //           ? "header__link header__link--active"
    //           : "header__link"
    //       }
    //       to="/inventories"
    //     >
    //       Inventory
    //     </Link>
    //   </div>
  );
};

export default Header;