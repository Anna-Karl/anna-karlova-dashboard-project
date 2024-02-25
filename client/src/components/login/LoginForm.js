import React from "react";
import avatar from "../../assets/avatar.jpg";
import "./LoginForm.scss";
// import { motion } from 'framer-motion';
// import { menuAnimation } from '../utils/fade';




export default function LoginForm () {

  return (
    <div className="wrapper-login">
      <button className="button">
        <img src={avatar} alt="avatar"/>
      </button>
    {/* <motion.div
      initial={false}
      animate={isShow ? 'open' : 'closed'}
      variants={menuAnimation}>
      <form className="form">
        <input type="text" className="input" placeholder="Email" />
        <input type="text" className="input" placeholder="Password" />
        <button className="loginButton" >Login</button>
        <button className="register" >Register</button>
      </form>
    </motion.div> */}
  </div>
)
}