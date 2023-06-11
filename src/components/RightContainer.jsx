import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Authfail from "../pages/Authfail";
import Authsuc from "../pages/Authsuc";
import Emailauth from "../pages/Emailauth";
import Mypage from "../pages/Mypage";
import SendBottle from "../pages/SendBottle";
import SentList from "../pages/SentList";
import RecvList from "../pages/RecvList";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";
import "../style/right.scss";
import BottleDetail from "../pages/BottleDetail";
import chgPassword from "../pages/ChgPassword";
import ChgPassword from "../pages/ChgPassword";

export default function RightContainer() {
  const [component, setComponent] = useState();
  useEffect(function () {
    changeComponent("Home");
  }, []);
  var changeComponent = function (name) {
    setComponent(name);
  };
  return (
    <>
      <div className="right_container">
        <div className="text_box1">
          <div className="text_box2">
            <div className="text_box3">
              <div className="render_Container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/Authfail" element={<Authfail />} />
                  <Route path="/Authsuc" element={<Authsuc />} />
                  <Route path="/Emailauth" element={<Emailauth />} />
                  <Route path="/Mypage" element={<Mypage />} />
                  <Route path="/SendBottle" element={<SendBottle />} />
                  <Route path="/SentList" element={<SentList />} />
                  <Route path="/RecvList" element={<RecvList />} />
                  <Route path="/BottleDetail/:itemId" element={<BottleDetail />} />
                  <Route path="/ChgPassword" element={<ChgPassword />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
