import React, { useRef } from 'react';
import '../style/findPassword.scss';
import { BiCheck } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { async } from '@firebase/util';
import axios from 'axios';
import CryptoJS from 'crypto-js';

export default function FindPassword() {
  const email = useRef();

  // 암호화 로직 나중에 공통 컴포넌트로 하나 뺄예정.
  const aes128Encode = (secretKey, Iv, data) => {
    const cipher = CryptoJS.AES.encrypt(
      data,
      CryptoJS.enc.Utf8.parse(secretKey),
      {
        iv: CryptoJS.enc.Utf8.parse(Iv),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC,
      }
    );
    return cipher.toString();
  };

  const emailCheck = async () => {
    var aes128SecretKey = process.env.REACT_APP_AES_SECRET_KEY;
    var aes128Iv = process.env.REACT_APP_AES_SECRET_IV;

    const resEmailCheck = await axios.get('/user/emailCheckToChangePassword', {
      params: {
        email: aes128Encode(aes128SecretKey, aes128Iv, email.current.value),
        auth: sessionStorage.getItem('auth'),
      },
    });
  };

  function btn_signup() {
    alert('가입하기!');
  }

  return (
    <div className="findpassword_component">
      <div className="textarea">
        ∧∞∧ ∧∞∧
        <br />
        (｡･ω･｡) ♡♡ (｡･ω･｡)비번 찾고 싶다면 이메일 인증을 해<br />
      </div>
      <div className="email">이메일</div>
      <div className="email_box1">
        <div className="email_box2">
          <div className="email_bar1"></div>
          <div className="email_bar2"></div>
          <div className="email_input">
            <input type="text" ref={email} />
          </div>
        </div>
      </div>
      <div className="eclick_box1">
        <div className="eclick_box2">
          <div className="eclick_bar1"></div>
          <div className="eclick_bar2"></div>
          <button className="emailclick" onClick={emailCheck}>
            <span className="icon-wrapper">
              <BiCheck size={30} />
            </span>
          </button>
        </div>
      </div>
      <div className="authcode">인증번호</div>
      <div className="authcode_box1">
        <div className="authcode_box2">
          <div className="authcode_bar1"></div>
          <div className="authcode_bar2"></div>
          <div className="authcode_input">
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="sign_box1">
        <div className="sign_box2"></div>
        <div className="sign_bar1"></div>
        <div className="sign_bar2"></div>
        <button className="signup" onClick={btn_signup}>
          클릭
        </button>
      </div>

      <button className="login_link">
        <Link to="/login" className="login">
          ㅤ | 로그인하기 |
        </Link>
      </button>
    </div>
  );
}
