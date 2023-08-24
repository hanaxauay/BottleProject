import React, { useEffect } from 'react';
import '../style/login.scss';
import { useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import crypto, { HmacSHA256, SHA256 } from 'crypto-js';
import { useState } from 'react';
import CryptoJS from 'crypto-js';
import firebase from '../firebase';
import messaging from '../firebase';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
export default function Login(rightContainerProps) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [currentToken, setCurrentToken] = useState(null);
  const loginEmailInput = useRef(); //email input
  const loginPwInput = useRef(); // pwd input

  // 토큰 뺴오기
  useEffect(() => {
    const getTokenAndHandleMessages = async () => {
      try {
        const token = await getToken(messaging, {
          vapidKey:
            'BPnPG-BOQrhi94alHAm2U-kuiqoaYDFIBiU9VV1XQ6QCuN-Te9p7UcGW691e1cSGmy_tDsRGZycO2G7d1WgSfwI',
        });
        if (token) {
          setCurrentToken(token);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTokenAndHandleMessages();
  }, []);

  const onChangePwd = (e) => {
    setPassword(SHA256(e.target.value).toString());
  };

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

  // Login button 눌렸을떄 setLogin 함수 호출.
  const setLogin = async () => {
    if (!loginEmailInput.current.value || !loginPwInput.current.value) {
      rightContainerProps.alertTextArea.current.innerHTML = '값을 입력해주세요';
      rightContainerProps.alertBox.current.style.display = 'block';
    }
    var aes128SecretKey = process.env.REACT_APP_AES_SECRET_KEY;
    var aes128Iv = process.env.REACT_APP_AES_SECRET_IV;
    try {
      var response = await axios.post(`/login`, null, {
        params: {
          email: aes128Encode(
            aes128SecretKey,
            aes128Iv,
            loginEmailInput.current.value
          ),
          password: password,
          token: currentToken,
        },
      });

      if (response.data.status === 'success') {
        //로컬 스토리지 저장해보기.
        sessionStorage.clear();
        sessionStorage.setItem('auth', response.data.auth);

        window.location.replace(process.env.REACT_APP_FRONT_SERVER + '/mypage');
      } else {
        loginEmailInput.current.value = '';
        loginPwInput.current.value = '';
        rightContainerProps.alertTextArea.current.innerHTML =
          '이메일 혹은 비밀번호를 확인해주세요.';
        rightContainerProps.alertBox.current.style.display = 'block';
      }
    } catch (error) {
      rightContainerProps.alertTextArea.current.innerHTML =
        '서버 내부 오류입니다.\n 관리자에게 문의하세요.';
      rightContainerProps.alertBox.current.style.display = 'block';
      console.error(error);
    }
  };
  useEffect(function () {
    sessionStorage.clear();
  }, []);

  return (
    <div className="login_content">
      <div className="email">이메일</div>
      <div className="emailbox1">
        <div className="emailbox2">
          <div className="emailbar1"></div>
          <div className="emailbar2"></div>
          <div className="email_input">
            <input
              type="email"
              ref={loginEmailInput}
              // onChange={onChangeInput}
            />
          </div>
        </div>
      </div>

      <div className="password">비밀번호</div>
      <div className="passbox1">
        <div className="passbox2">
          <div className="passbar1"></div>
          <div className="passbar2"></div>
          <div className="password_input">
            <input type="password" ref={loginPwInput} onChange={onChangePwd} />
          </div>
        </div>
      </div>

      <div className="btn_group">
        <button className="registerLink_btn">
          <Link to="/register" className="Account">
            | 가입하기 |
          </Link>
        </button>
        <button className="loginAction_btn" onClick={setLogin}>
          <div className="Account">| 로그인하기 |</div>
        </button>
      </div>
      <div className="btn_group2">
        <button className="findEmail_btn">
          <Link to="/" className="Account">
            | 이메일 찾기 |
          </Link>
        </button>
        <button className="findPassword_btn">
          <Link to="/" className="Account">
            | 비밀번호 찾기 |
          </Link>
        </button>
      </div>
    </div>
  );
}
