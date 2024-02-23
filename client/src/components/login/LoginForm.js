import React from "react";
import avatar from "../../assets/avatar.jpg";
import "./LoginForm.scss";
import { motion } from 'framer-motion';
import { menuAnimation } from '../utils/fade'
import Button from '../button/Button';



export default function LoginForm () {

  return (
      <div className="wrapper" >
          <button className="button" icon={avatar} >
          </button>
          {/* <motion.div
            initial={false}
            
            variants={menuAnimation}
          >
            <form className="form">
              <span placeholder="Email"></span> 
              <span placeholder="Password" type={'password'}></span>
              <div className="loginButton">
                <Button >Login</Button>
              </div>
              <button className="register" >
                Register
              </button>
            </form>
          </motion.div> */}
        </div>
  
  );
};
