import React from "react";
import "../style/mypage.scss";
import base from "../images/base.png";
import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import crypto, { HmacSHA256, SHA256 } from "crypto-js";
import { useState } from "react";

export default function Mypage() {

  return (
    <>
      <div className="mypage_content">
        
        <div className="top">
         <div className="topbox1"> </div>
         <div className="topbox2"> </div>
         <div className="topbox3"> </div>
         <div className="topline1"> </div>
         <div className="topline2"> </div>
        </div>

        <div className="left_container">
         <div className="logo"> 환영해 </div>
        </div>
        <div className="right_container">
          <div className="text_box1"></div>
        </div>
      </div>
    </>
  );
}
