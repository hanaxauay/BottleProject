import React from "react";
import "../style/register.scss";
import base from "../images/base.png";
import { Link } from "react-router-dom";
import { BiCheck } from 'react-icons/bi';

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
            <div className="nickname_box1"></div>
            <div className="nickname_box2"></div>
            <div className="nickname_bar1"></div>
            <div className="nickname_bar2"></div>
            <div className="nickname_input">
              <input type="nickname"/>
            </div>
            
        
            <div className="phone">핸드폰번호</div>
            <div className="phone_box1"></div>
            <div className="phone_box2"></div>
            <div className="phone_bar1"></div>
            <div className="phone_bar2"></div>
            <div className="phone_input">
              <input type="phone"  />
            </div>
            
            <div className="input_container">
              <div className="email">이메일</div>
              <div className="email_box1"></div>
              <div className="email_box2"></div>
              <div className="email_bar1"></div>
              <div className="email_bar2"></div>
              <div className="email_input">
                <input type="email" />
              </div>
              <div className="eclick_box1"></div>
              <div className="eclick_box2"></div>
              <div className="eclick_bar1"></div>
              <div className="eclick_bar2"></div>
             <button className="clickemail_btn">
                <span className="icon-wrapper">
                  <BiCheck size={30} />
                </span>
              </button>
            </div>

            <div className="password">비밀번호</div>
            <div className="password_box1"></div>
            <div className="password_box2"></div>
            <div className="password_bar1"></div>
            <div className="password_bar2"></div>
            <div className="password_input">
              <input type="password" />
            </div>
            <div className="repassword">비밀번호재입력</div>
            <div className="repassword_box1"></div>
            <div className="repassword_box2"></div>
            <div className="repassword_bar1"></div>
            <div className="repassword_bar2"></div>
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
               | 로그인하기 |
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
