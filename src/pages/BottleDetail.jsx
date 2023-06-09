import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../style/bottleDetail.scss";

export default function BottleDetail() {
  // URL 로 넘어온 Item ID 값을 뽑는다.
  const id = useParams();
  // 출력해보기 : 성공
  const itemId = id.itemId;

  const [itemid, setItemId] = useState();
  const [title, setTitle] = useState(null);
  const [sendDt, setSentDt] = useState(null);
  const [content, setContent] = useState(null);
  // email content 가져오기
  const getBottleDetail = async () => {
    try {
      const response = await axios.get("/bottle/getBottleDetail", {
        params: {
          letterId: itemId,
          auth: sessionStorage.getItem("auth"),
        },
      });
      if (response.data.status === "success") {
        sessionStorage.setItem("auth", response.data.auth);
        setTitle(JSON.parse(response.data.message).TITLE);
        setSentDt(JSON.parse(response.data.message).SEND_DT);
        setContent(JSON.parse(response.data.message).CONTENT);

        console.log(title);
        console.log(sendDt);
        console.log(content);
      }
      else {
        alert(response.data.message);
      }

    } catch (error) {
      alert("서버 내부 오류입니다.\n 관리자에게 문의하세요.");
    }
  };
  useEffect(() => {
    getBottleDetail();
    setItemId(id.itemId);
  }, []);

  return (
    <>
      <div className="recvtxt_content">
        <div className="recv_text">[ 쪽지 내용 ]</div>
        <div className="title_line1">
          ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        </div>
        <div className="recv_num">번호 : {itemid}</div>
        <div className="recv_title">제목 : {title} </div>
        <div className="recv_date">보낸 날짜 : {sendDt}</div>
        <div className="title_line2">
          ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        <div className="recv_content">{content}</div>
        </div>

        <div className="title_line3">
          ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        </div>

        {/* 뒤로가기 버튼 */}
        <button className="back_btn">
          <Link to="/RecvList" className="back">
            ㅤ &lt; 뒤로가기
          </Link>
        </button>

        <button className="send_btn">
          {/* 내가 보낸 쪽지함으로 이동 */}
          <Link to="/SentList" className="sending">
            ㅤ 내가보낸쪽지함가기 &gt;
          </Link>
        </button>
      </div>
    </>
  );
}
