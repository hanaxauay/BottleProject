import React, { useRef } from "react";
import "../style/register.scss";
import { Link } from "react-router-dom";
import { BiCheck } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import crypto, { HmacSHA256, SHA256 } from "crypto-js";
export default function Register() {
  // 회원가입 useState 지정.
  const [name, setName] = useState();
  const [nickName, setNickName] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // querySelector 지정.
  const nameInput = useRef();
  const nickNameInput = useRef();
  const phoneNumInput = useRef();
  const mailInput = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();

  // password sha256 암호화.
  const onChangePwd = (e) => {
    setPassword(
      SHA256(
        e.target.value,
        process.env.REACT_APP_AES_SECRET_PASSWORD
      ).toString()
    );
  };

  // email aes128 암호화.
  const aes128Encode = (secretKey, Iv, data) => {
    const cipher = CryptoJS.AES.encrypt(
      data,
      CryptoJS.enc.Utf8.parse(secretKey),
      {
        iv: CryptoJS.enc.Utf8.parse(Iv), // [Enter IV (Optional) 지정 방식]
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC, // [cbc 모드 선택]
      }
    );
    return cipher.toString();
  };

  // email 형식 올바르지않으면 return
  const checkEmail = () => {
    const emailValue = mailInput.current.value;
    if (
      !/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(emailValue)
    ) {
      alert("이메일 형식이 올바르지 않습니다.");
      return false;
    }
    return true;
  };

  // 비밀번호 8자리 이상 , 비밀번호 재입력칸과 동일 하지 않으면 return
  const checkPassword = () => {
    if (passwordInput.current.value.length < 8) {
      alert("비밀번호는 8글자 이상이어야 합니다.");
      return false;
    }
    if (passwordInput.current.value !== confirmPasswordInput.current.value) {
      alert("비밀번호가 일치하지 않습니다.");
      return false;
    }
    return true;
  };

  // email 중복체크 axios 통신.
  const checkDuplicationEmail = async () => {
    var aes128SecretKey = process.env.REACT_APP_AES_SECRET_EMAIL; // key 값 16 바이트
    var aes128Iv = process.env.REACT_APP_AES_SECRET_EMAIL; //iv 16 바이트
    try {
      const resCheckId = await axios.post("/checkEmail", {
        email: aes128Encode(aes128SecretKey, aes128Iv, mailInput.current.value),
      });
      console.log(resCheckId.data);
    } catch (error) {
      console.error(error);
      console.log("email 중복체크 잘못되었다.");
    }
  };

  // 회원가입 버튼 눌렸을때 axios 통신.
  const register = async () => {
    if (
      !nameInput.current.value ||
      !nickNameInput.current.value ||
      !phoneNumInput.current.value ||
      !mailInput.current.value ||
      !passwordInput.current.value ||
      !confirmPasswordInput.current.value
    ) {
      return alert("필수 항목을 입력해주세요!");
    }

    if (!checkEmail()) {
      mailInput.current.value = "";
      return;
    }
    if (!checkPassword()) {
      passwordInput.current.value = "";
      confirmPasswordInput.current.value = "";
      return;
    }
    var aes128SecretKey = process.env.REACT_APP_AES_SECRET_EMAIL; // key 값 16 바이트
    var aes128Iv = process.env.REACT_APP_AES_SECRET_EMAIL; //iv 16 바이트
    try {
      const resRegister = await axios.post("/join", {
        name: nameInput.current.value,
        nickName: nickNameInput.current.value,
        phoneNum: phoneNumInput.current.value,
        email: aes128Encode(aes128SecretKey, aes128Iv, mailInput.current.value),
        password: password,
      });
      console.log(resRegister.data);
    } catch (error) {
      console.log("회원가입 잘못되었다.");
    }
  };

  return (
    <>
      <div className="register_content">
        <div className="top">
          <div className="topbox1"> </div>
          <div className="topbox2"> </div>
          <div className="topbox3"> </div>

          <div className="sicon_box1"> </div>
          <div className="sicon_box2"> </div>
          <div className="sicon_box3"> )୨</div>
          <div className="sicon_bar1"> </div>
          <div className="sicon_bar2"></div>

          <div className="home_box1"> </div>
          <div className="home_box2"> </div>
          <div className="home_bar1"> </div>
          <div className="home_bar2"> </div>
          <button className="home_btn">
            <Link to="/" className="home">
              <FontAwesomeIcon icon={faHome} />ㅤ
            </Link>
          </button>

          <div className="ficon_box1"> </div>
          <div className="ficon_box2"> </div>
          <div className="ficon_box3"> ୧(</div>
          <div className="ficon_bar1"> </div>
          <div className="ficon_bar2"> </div>

          <div className="title">회원가입페이지</div>
          <div className="topline1"> </div>
          <div className="topline2"> </div>
        </div>

        <div className="left_container">
          <div className="logo">
            {"　　　　♪∧,,∧〇 　"}
            <br />
            {"　♪∧,,∧・ ω・)ｏ "}
            <br />
            {"∧,,∧・ ω・)　 )っ° 　"}
            <br />
            {"(・ ω ・)　　)っ＿_フ★"}
            <br />
            {"(っ　)っ　＿_フ(_/彡와"}
            <br />
            {"　( ＿_フ(_/彡 서"}
            <br />
            {"　 (_/彡♪ 어"}
          </div>
        </div>
        <div className="right_container">

          <div className="input_container">
            <div className="email">이메일</div>
            <div className="email_box1"></div>
            <div className="email_box2"></div>
            <div className="email_bar1"></div>
            <div className="email_bar2"></div>
            <div className="email_input">
              <input type="email" ref={mailInput} />
            </div>
            <div className="eclick_box1"></div>
            <div className="eclick_box2"></div>
            <div className="eclick_bar1"></div>
            <div className="eclick_bar2"></div>
            <button className="clickemail_btn" onClick={checkDuplicationEmail}>
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
            <input type="password" ref={passwordInput} onChange={onChangePwd} />
          </div>
          <div className="repassword">비밀번호재입력</div>
          <div className="repassword_box1"></div>
          <div className="repassword_box2"></div>
          <div className="repassword_bar1"></div>
          <div className="repassword_bar2"></div>
          <div className="repassword_input">
            <input type="password" ref={confirmPasswordInput} />
          </div>
          <div className="sign_box1"></div>
          <div className="sign_box2"></div>
          <div className="sign_bar1"></div>
          <div className="sign_bar2"></div>
          <button className="signup_btn" onClick={register}>
            가입하기
          </button>
          <button className="login_btn">
            <Link to="/login" className="login">
              ㅤ | 로그인하기 |
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
