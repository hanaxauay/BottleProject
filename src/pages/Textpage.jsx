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
import { useEffect } from "react";

export default function Textpage() {
  const [title, setTitle] = useState();
  const [text, settext] = useState();

  // 현재 title / content / session 에 담겨있는 auth 보내기.
  const sendingText = async () => {
    try {
      const resSendingText = await axios.post(
        "/bottle/sendBottleLetter",
        null,
        {
          params: {
            title: "제목 임시로 보냄",
            content: "내용 임시로 보냄",
            auth: sessionStorage.getItem("auth"),
          },
        }
      );
    } catch (error) {
      console.log("메세지 보내는곳 잘못되었다.");
      console.error(error);
    }
  };

  useEffect(() => {
    sendingText();
  }, []);

  const titleInput = useRef();
  const textInput = useRef();

  return (
    <>
      <div className="textpage_content">
          <div className="text_title ">[ 쪽지 제목을 입력하세요 ]</div>
          <div className="title_line1">
            ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
          </div>
          <div className="title_main"> 제목: </div>

          {/* input 칸 입력 */}
          <div className="title_input">
            <input type="title" ref={titleInput} />
          </div>
          <div className="title_line2">
            ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
          </div>

          <div className="text_write">[ 글을 입력하세요 ]</div>

          {/* input 칸 입력 */}
          <div className="text_input">
            <textarea ref={textInput} />
          </div>
          <div className="title_line3">
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
    </>
  );
}
