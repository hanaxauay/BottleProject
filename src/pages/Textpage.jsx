import React from "react";
import "../style/textpage.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import crypto, { HmacSHA256, SHA256 } from "crypto-js";
import { useRef } from 'react';





export default function Textpage() {
  const [title, setTitle] = useState();
  const [text, settext] = useState();

  const titleInput = useRef();
  const textInput = useRef();

    return (
    <>
      <div className="textpage_content">
        
        <div className="top">
         <div className="topbox1"> </div>
         <div className="topbox2"> </div>
         <div className="topbox3"> </div>
         <div className="sicon_box1"> </div>
         <div className="sicon_box2"> </div>
         <div className="sicon_box3"> )و</div>
         <div className="sicon_bar1"> </div>
         <div className="sicon_bar2"> </div>
         
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
         <div className="ficon_box3">٩( </div>
         <div className="ficon_bar1"> </div>
         <div className="ficon_bar2"> </div>

         <div className="title">홈페이지</div>
         <div className="topline1"> </div>
         <div className="topline2"> </div>
        </div>

        <div className="left_container">
        <div className="logo">
        {"┼─…──〃──…─＊─…──〃──…─┼"}
        <br />
        {"│ (/)＿/"}
        <br />
        {"： (∧_∧)ノ∽♥ 저 왔어요오 \" -\"＊"}
        <br />
        {"│s(　　 )　　　　　환영ㅎH죠요오／♥"}
        <br />
        {"│　빤딱★　　　　　환영안ㅎㅐ주면a"}
        <br />
        {"├─〃──…──〃┼ 내 ?l픈 Ol빨로 `з`"}
        <br />
        {"│△▶ 친구들아 ：ㄲH물어★ 줄꼬ㅇㅖ요오;^ ^"}
        </div>


        </div>
        <div className="right_container">
          <div className="text_box1"></div>
          <div className="text_box2"></div>
          <div className="text_box3"></div>
          <div className="text_line1"></div>
          <div className="text_line2"></div>
          <div className="text_title ">쪽지 제목을 입력하세요</div>
          <div className="title_line1">ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</div>
          <div className="title_main"> 제목: </div>

          {/* input 칸 입력 */}
          <div className="title_input">
            <input type="title" ref={titleInput} />
          </div>

          <div className="title_line2">ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</div>
          <div className="category_box2">쪽지시작</div>
          <div className="title_line3">ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</div>

          {/* input 칸 입력 */}
          <div className="text_input">
            <input type="text" ref={textInput} />
          </div>

          <button className="login_btn">
            <Link to="/login" className="login">ㅤ
             1. 로그인하기
            </Link>
          </button>
          <button className="register_btn">
            <Link to="/register" className="register">ㅤ
             2. 회원가입하기
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
