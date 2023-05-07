import React from "react";
import "../style/login.scss";
import loginImg from "../images/login_title.png";
import logo from "../images/logo.png";
import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const loginEmailInput = useRef(); //email input
  const loginPwInput = useRef(); // pwd input
  // Login 버튼 눌렸을때
  const setLogin = async () => {
    if (!loginEmailInput.current.value || !loginPwInput.current.value) {
      return alert("값을 입력하세요");
    }
    try {
      // http://localhost:8080/login 으로 보내줌.
      const resSetLogin = await axios.post(`/login`, {
        email: loginEmailInput.current.value,
        password: loginPwInput.current.value,
      });
    } catch (error) {
      console.error(error);
      console.log("로그인 부분 잘못되었음");
    }
  };
  return (
    <>
      <div className="container">
        <div className="login_title">
          <img src={loginImg} alt="login_title" />
        </div>
        <div className="login_content">
          <div className="boss">
            <img src={logo} alt="logo" />
            <div className="email_input ">
              <input type="email" placeholder="email" ref={loginEmailInput} />
            </div>
            <div className="password_input">
              <input
                type="password"
                placeholder="password"
                ref={loginPwInput}
              />
            </div>
            <p className="search_password">Forgot Password ?</p>
            <button className="login_btn" onClick={setLogin}>
              LOGIN
            </button>
            <div>
              <button className="register_btn">
                <Link to="/register" className="Account">
                  Create Your Account
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
