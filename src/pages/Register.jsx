import React from "react";
import "../style/register.scss";
import Img from "../images/left.png";
import logo from "../images/logo.png";
import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import crypto from "crypto-js";
import { useState } from "react";

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="left">
          <img src={Img} alt="lefts" />
        </div>
        <div className="register_content">
          <div className="boss">
            <div className="createaccount">
              Create Your Account
            </div>
            <div className="alreadyaccount">
              Already have Account?
            </div>
            <div className="sign">
              <Link to="/">ㅤSign in</Link>
            </div>
            
            <div className="name_input">
              <input type="name" placeholder="Name" />
            </div>
            <div className="nickname_input">
              <input type="nickname" placeholder="Nick name" />
            </div>
            

            
            <div className="phone_input">
              <input type="phone" placeholder="Phone" />
            </div>
            
            <div className="input_container">
              <div className="email_input">
                <input type="email" placeholder="Email" />
              </div>
             <button className="clickemail_btn">
                Click
              </button>
            </div>


            <div className="password_input">
              <input type="password" placeholder="Password" />
            </div>
            <div className="repassword_input">
              <input type="repassword" placeholder="Re-enter-Password" />
            </div>
            <button className="signup_btn">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
