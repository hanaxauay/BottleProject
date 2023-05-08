import React from "react";
import "../style/register.scss";
import right from "../images/right.png";
import loginImg from "../images/login_title.png";



export default function Register() {
  return (
    <>
      <div className="container">
        <div className="login_title">
          <img src={loginImg} alt="login_title" />
        </div>
        <div className="login_content">
          <div className="boss">
            <img src={right} alt="right" />
            <b className="create-your-account">Create Your Account</b>
            <p className="search_password">Already have account?</p>
            <p className="search_password">Sign in</p>
            <div className="name_input">
              <input type="name" placeholder="name" />
            </div>
            <div className="phone_input ">
              <input type="Phone" placeholder="phone" />
            </div>
            <div className="email_input ">
              <input type="email" placeholder="email" />
            </div>
            <div className="password_input">
              <input
                type="password"
                placeholder="password"
              />
            </div>
            <div className="reenterpassword_input ">
              <input type="re-enter password" placeholder="re-enter password" />
            </div>
            
            <div>
              <button className="register_btn">
      
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
