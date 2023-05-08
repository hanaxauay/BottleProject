import React from "react";
import "../style/login.scss";
import Img from "../images/left.png";
import logo from "../images/logo.png";
import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import crypto from "crypto-js";
import { useState } from "react";

export default function Login() {
  const [password, setPassword] = useState();
  const loginEmailInput = useRef(); //email input
  const loginPwInput = useRef(); // pwd input

  // password 암호화 작업 -> setPassword 에 암호화 된 비밀번호 세팅
  const onChangeInput = (e) => {
    setPassword(crypto.AES.encrypt(e.target.value, "kong").toString());
  };

  // 암호화 잘되었는지 출력 한번해보기
  console.log("암호화 된 비밀번호 :  ", password);

  // Login button 눌렸을떄 setLogin 함수 호출.
  const setLogin = async () => {
    if (!loginEmailInput.current.value || !loginPwInput.current.value) {
      return alert("값을 입력하세요");
    }
    try {
      // http://localhost:8080/login 으로 보내줌.
      const resSetLogin = await axios.post(`/login`, {
        email: loginEmailInput.current.value,
        password: password,
      });
      // 백엔드에서 데이터 잘 받아줬으면 -> 성공
      console.log(resSetLogin.data);
    } catch (error) {
      console.error(error);
      console.log("로그인 부분 잘못되었음");
    }
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <img src={Img} alt="left" />
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
                onChange={onChangeInput}
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
