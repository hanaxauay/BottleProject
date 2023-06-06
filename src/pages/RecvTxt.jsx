import React, { useEffect } from "react";
import "../style/recvtxt.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RecvTxt() {
  const [bottles, setbottles] = useState([]);

  // 내가 받은 메세지들
  const getReceivedBottle = async function () {
    try {
      var response = await axios.get(`/bottle/getReceivedBottles/`, {
        params: {
          auth: sessionStorage.getItem("auth"),
        },
      });
      if (response.data.status === "success") {
        sessionStorage.setItem("auth", response.data.auth);
        setbottles(JSON.parse(response.data.message));
      } else {
        console.error("getReceivedBottles error");
      }
    } catch(error) {
        alert("서버 내부 오류입니다.\n 관리자에게 문의하세요.");
    }
  };

  useEffect(function () {
    getReceivedBottle();
  }, []);

  return (
    <>
      <div className="recvtxt_content">
        <div className="recv_text">[ 내가 받은 쪽지함 ]</div>
        <div className="title_line1">
            ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        </div>

        <div className="recv_num">번호</div>
        <div className="recv_title">제목</div>
        <div className="title_line2">
            ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        </div>

        {bottles.map((item, index) => (
            <div className="recv_list1" key={item.LETTER_ID}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {index+1}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {item.IS_READ === 'N' ? "(New!) " : null}
              {item.TITLE}
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
            <Link to="/sending" className="sending">
              ㅤ 내쪽지함가기 &gt;
            </Link>
          </button>
      </div>
    </>
  );
}
