import React from "react";
import "../style/textpage.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import crypto, { HmacSHA256, SHA256 } from "crypto-js";
import { useRef } from "react";
import LeftContainer from "../components/LeftContainer";

export default function Textpage() {
  const [title, setTitle] = useState();
  const [text, settext] = useState();

  const titleInput = useRef();
  const textInput = useRef();

  return (
    <>
      <div className="textpage_content">
        <div className="top">
          <div className="topbox1"></div>
          <div className="topbox2"></div>
          <div className="topbox3"></div>
          <div className="sicon_box1"> </div>
          <div className="sicon_box2"> </div>
          <div className="sicon_box3"> </div>
          <div className="sicon_bar1"> </div>
          <div className="sicon_bar2"> </div>
          <div className="home_box1"> </div>
          <div className="home_box2"> </div>
          <div className="home_box3"> </div>
          <div className="home_bar1"> </div>
          <div className="home_bar2"> </div>
          <div className="ficon_box1"> </div>
          <div className="ficon_box2"> </div>
          <div className="ficon_box3"> </div>
          <div className="ficon_bar1"> </div>
          <div className="ficon_bar2"> </div>

          <div className="title">쪽지페이지</div>
          <div className="topline1"> </div>
          <div className="topline2"> </div>
        </div>

        <LeftContainer />

        <div className="right_container">
          <div className="text_box1"></div>
          <div className="text_box2"></div>
          <div className="text_box3"></div>
          <div className="text_line1"></div>
          <div className="text_line2"></div>
          <div className="text_title ">[ 쪽지 제목을 입력하세요 ]</div>
          <div className="title_line1">
            ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
          </div>
          <div className="title_main"> 제목: </div>

          <div className="title_line2">
            ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
          </div>

          {/* input 칸 입력 */}
          <div className="title_input">
            <input type="title" ref={titleInput} />
          </div>

          <div className="category_box2">[ 글을 입력하세요 ]</div>

          {/* input 칸 입력 */}
          <div className="text_input">
            <input type="textarea" ref={textInput} />
          </div>
          <div className="title_line4">
            ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
          </div>
          {/* 뒤로가기 버튼 */}
          <button className="back_btn">
            <Link to="/mypage" className="back">
              ㅤ &lt; 뒤로가기
            </Link>
          </button>

          <button className="theme_btn">
            {/* 테마 페이지로 이동 */}
            <Link to="/theme" className="theme">
              ㅤ ㅁ 테마보기
            </Link>
          </button>

          <button className="send_btn">
            {/* 내가 보낸 쪽지함으로 이동 */}
            <Link to="/sending" className="sending">
              ㅤ 보내기 &gt;
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
