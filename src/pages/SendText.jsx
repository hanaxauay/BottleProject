import React from "react";
import "../style/sendtxt.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import crypto, { HmacSHA256, SHA256 } from "crypto-js";
import { useRef } from "react";
import { useEffect } from "react";

export default function SendText() {
  const [title, setTitle] = useState();
  const [text, settext] = useState();

  // 내가 보낸 메세지 요청 방식 (get)
  const sendTxt = async () => {
    try {
      const resSendTxt = await axios.get("/bottle/getSentBottles", {
        params: {
          auth: sessionStorage.getItem("auth"),
        },
      });
    } catch (error) {
      console.log("보낸 메세지 목록 잘못되었다.");
      console.error(error);
    }
  };

  useEffect(() => {
    sendTxt();
  }, []);

  const titleInput = useRef();
  const textInput = useRef();

  return (
    <>
      <div className="sendtxt_content">
      <div className="send_text">[ 내가 받은 쪽지함 ]</div>
        <div className="title_line1">
            ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        </div>

        <div className="send_num">번호</div>
        <div className="send_title">제목</div>
        <div className="title_line2">
            ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        </div>

        <div className="send_list1">1 &nbsp; &nbsp; 가나다라마바4 </div>

        <div className="title_line3">
            ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
          </div>
          {/* 뒤로가기 버튼 */}
          <button className="back_btn">
            <Link to="/mypage" className="back">
              ㅤ &lt; 뒤로가기
            </Link>
          </button>

          <button className="send_btn">
            {/* 내가 보낸 쪽지함으로 이동 */}
            <Link to="/sending" className="sending">
              ㅤ 내가받은쪽지함가기 &gt;
            </Link>
          </button>
      </div>
    </>
  );
}
