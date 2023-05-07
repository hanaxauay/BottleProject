import React from "react";
import "../style/login.scss";
import loginImg from "../images/login_title.png";
import logo from "../images/logo.png";
export default function Login() {
  return (
    <>
      <div className="container">
        <div className="login_title">
          <img src={loginImg} alt="login_title" />
          <div className="title_text">
            {/* <p className="first">BOTTLE</p>
            <p className="second">NOTE</p> */}
          </div>
        </div>
        <div className="login_content">
          <div className="boss">
            <img src={logo} alt="logo" />
            <div className="email_input ">
              <input type="email" placeholder="email" />
            </div>
            <div className="password_input">
              <input type="password" placeholder="password" />
            </div>
            <p className="search_password">Forgot Password ?</p>
            <button className="login_btn">LOGIN</button>
            <p className="create_account">Create Your Account</p>
          </div>
        </div>
      </div>
    </>
  );
}
