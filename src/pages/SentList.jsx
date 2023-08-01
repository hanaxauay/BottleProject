import React from "react";
import "../style/sendtxt.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function SentList() {
  const [bottles, setbottles] = useState([]);

  // 내가 보낸 메세지 요청 방식 (get)
  const getSentBottles = async () => {
    try {
      const resSendTxt = await axios.get("/bottle/getSentBottles", {
        params: {
          auth: sessionStorage.getItem("auth"),
        },
      });
      if (resSendTxt.data.status === "success") {
        sessionStorage.setItem("auth", resSendTxt.data.auth);
        setbottles(JSON.parse(resSendTxt.data.message));
      } else {
        console.error("getReceivedBottles error");
      }
    } catch (error) {
      alert("서버 내부 오류입니다.\n 관리자에게 문의하세요.");
    }
  };

  useEffect(() => {
    getSentBottles();
  }, []);

  return (
    <>
      <div className="sendtxt_content">
        <div className="send_text">[ 내가 보낸 쪽지함 ]</div>
        <div className="title_line1">
          ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        </div>
        <div className="send_num">번호</div>
        <div className="send_title">제목</div>
        <div className="title_line2">
          ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        </div>
        {bottles.map((item, index) => (
          <div className="send_list1" key={item.LETTER_ID}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {index + 1}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {item.TITLE}
            &nbsp;
            {item.IS_READ === "Y" ? "(Read!)" : ""}
          </div>
        ))}
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
          <Link to="/RecvList" className="sending">
            ㅤ 내가받은쪽지함가기 &gt;
          </Link>
        </button>
      </div>
    </>
  );
}
