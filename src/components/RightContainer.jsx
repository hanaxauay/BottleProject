import React, { useEffect, useRef, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Authfail from '../pages/Authfail';
import Authsuc from '../pages/Authsuc';
import Emailauth from '../pages/Emailauth';
import Mypage from '../pages/Mypage';
import SendBottle from '../pages/SendBottle';
import SentList from '../pages/SentList';
import RecvList from '../pages/RecvList';
import Login from '../pages/Login';
import Register from '../pages/Register';
import '../style/right.scss';
import BottleDetail from '../pages/BottleDetail';
import ChgPassword from '../pages/ChgPassword';
//import Temp from '../pages/Temp';
import Setting from '../pages/Setting';
export default function RightContainer() {
  const [component, setComponent] = useState();
  const alertBox = useRef(null);
  const alertTextArea = useRef(null);
  const [message, setMessage] = useState('');

  const rightContainerProps = {
    alertBox,
    alertTextArea,
  };

  useEffect(function () {
    changeComponent('Home');
  }, []);

  var changeComponent = function (name) {
    setComponent(name);
  };

  var hideAlertBox = function () {
    alertBox.current.style.display = 'none';
  };

  var keyHideAlertBox = function (e) {
    if (e.key === 'Enter') {
      alertBox.current.style.display = 'none';
    }
  };
  var setAlertBox = function (msg) {
    alertTextArea.current.innerHTML = msg;
    alertBox.current.style.display = 'block';
  };

  useEffect(() => {
    document.addEventListener('keydown', keyHideAlertBox); // 엔터키 이벤트 리스너 추가
    return () => {
      document.removeEventListener('keydown', keyHideAlertBox); // 컴포넌트 언마운트 시 이벤트 리스너 제거
    };
  }, []);

  return (
    <>
      <div className="right_container">
        <div className="text_box1">
          <div className="text_box2">
            <div className="text_box3">
              <div className="alert_box" ref={alertBox}>
                <div className="alert_text_area" ref={alertTextArea}></div>
                <button
                  className="confirm_btn"
                  onClick={hideAlertBox}
                  onKeyDown={keyHideAlertBox}
                >
                  확인
                </button>
              </div>
              <div className="render_Container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/register"
                    element={<Register {...rightContainerProps} />}
                  />
                  <Route
                    path="/login"
                    element={<Login {...rightContainerProps} />}
                  />
                  <Route path="/Authfail" element={<Authfail />} />
                  <Route path="/Authsuc" element={<Authsuc />} />
                  <Route path="/Emailauth" element={<Emailauth />} />
                  <Route
                    path="/Mypage"
                    element={<Mypage {...rightContainerProps} />}
                  />
                  <Route
                    path="/SendBottle"
                    element={<SendBottle {...rightContainerProps} />}
                  />
                  <Route
                    path="/SentList"
                    element={<SentList {...rightContainerProps} />}
                  />
                  <Route
                    path="/RecvList"
                    element={<RecvList {...rightContainerProps} />}
                  />
                  <Route
                    path="/BottleDetail/:itemId"
                    element={<BottleDetail {...rightContainerProps} />}
                  />
                  <Route
                    path="/ChgPassword"
                    element={<ChgPassword {...rightContainerProps} />}
                  />
                  <Route path="/Temp" element={<Setting />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
