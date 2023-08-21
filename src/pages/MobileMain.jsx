import React, { useEffect, useRef, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../style/right.scss';
import MMain from '../pages/m-Main'
import MLogin from'../pages/m-Login'
import MSetting from '../pages/m-Setting'

export default function MobileMain() {
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
                <div className="render_Container">
                  <Routes>
                    <Route path="/" element={<MMain />} />
                    <Route
                      path="/login"
                      element={<MLogin {...rightContainerProps} />}
                    />

                    <Route path="/Temp" element={<MSetting />} />
                  </Routes>
                </div>


      </>
    );
  }
  