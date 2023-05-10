import React from "react";
import "../style/register.scss";
import base from "../images/base.png";
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
      <img src={base} alt="base" />
      <div className="textbox">
        .*☆*☆。..。.☆*。。환영해 &apos;ㅇ...*☆。..。.☆*。。
      </div>
        <div className="register_content">
          <div className="boss">
            <div className="name">이름</div>
            <div className="name_box1"></div>
            <div className="name_box2"></div>
            <div className="name_bar1"></div>
            <div className="name_bar2"></div>
            <div className="name_input">
              <input type="name" />
            </div>
            <div className="nickname">닉네임</div>
            <div className="nickname_input">
              <input type="nickname" placeholder="Nick name" />
            </div>
            

            <div className="phone">핸드폰번호</div>
            <div className="phone_input">
              <input type="phone"  />
            </div>
            
            <div className="input_container">
              <div className="email">이메일</div>
              <div className="email_input">
                <input type="email" placeholder="Email" />
              </div>
             <button className="clickemail_btn">
                Click
              </button>
            </div>

            <div className="password">비밀번호</div>
            <div className="password_input">
              <input type="password" placeholder="Password" />
            </div>
            <div className="repassword">비밀번호재입력</div>
            <div className="repassword_input">
              <input type="repassword"/>
            </div>
            <div className="sign_box1"></div>
            <div className="sign_box2"></div>
            <div className="sign_bar1"></div>
            <div className="sign_bar2"></div>
            <button className="signup_btn">
              가입하기
            </button>
            <button className="login_btn">
              <Link to="/" className="login">ㅤ
                로그인하기
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
