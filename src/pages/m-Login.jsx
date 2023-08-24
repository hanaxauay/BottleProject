import React, { useEffect, useRef, useState } from 'react';
import '../style/m-login.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import crypto, { HmacSHA256, SHA256 } from 'crypto-js';
import CryptoJS from 'crypto-js';
import firebase from '../firebase';
import messaging from '../firebase';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

export default function MLogin(rightContainerProps) {
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
        console.log('로그인성공');
        alert('로깅@ㅁ@');

        window.location.replace(process.env.REACT_APP_FRONT_SERVER + '/mypage');
      } else {
        loginEmailInput.current.value = '';
        loginPwInput.current.value = '';
        console.log('로그인실패');
        alert('로깅@ㅇ노노@');

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
    <div id="mhtml">
      <div id="mbody">
        <div id="wrap">
          <div className="top">
            <div className="textarea">
              ☆ 어서오r ☆<br />
              。˚。2런 。˚。
              <br />
              * 쪽zi는 *<br />
              ☆처음easy?☆
              <br />
            </div>
          </div>
          <div className="mid">
            <div className="inputarea">
              <div className="email">e메일</div>
              <input
                className="email-input"
                type="email"
                placeholder="Enter your email"
                ref={loginEmailInput}
              />
              <div className="pw">b번</div>
              <input
                className="pw-input"
                type="password"
                placeholder="Enter your password"
                ref={loginPwInput}
                onChange={onChangePwd}
              />
            </div>
            <div className="btnarea">
              <input
                type="button"
                className="btn_login"
                onClick={setLogin}
                value="로그인하긔"
              />
              <input
                type="button"
                className="btn_reg"
                onClick={() => alert('회원가입@ㅁ@')}
                value="회원가입하긔"
              />
            </div>
          </div>
          <div className="bottom">
            <div className="click_area">
              <button
                className="find-email"
                onClick={() => alert('이메일찾긔@ㅁ@')}
              >
                |이메일찾긔|
              </button>
              <div className="find-pw" onClick={() => alert('비번찾긔@ㅁ@')}>
                |비번찾긔|
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
      {/*end of mbody */}
    </div>
  );
}

//export default MLogin;
