import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../style/emailcontent.scss";

export default function BottleDetail() {
  // URL 로 넘어온 Item ID 값을 뽑는다.
  const id = useParams();
  // 출력해보기 : 성공
  const itemId = id.itemId;

  const [itemid, setItemId] = useState();
  // email content 가져오기
  const getBottleDetail = async () => {
    try {
      const response = await axios.get("/bottle/getBottleDetail", {
        params: {
          letterId: itemId,
          auth: sessionStorage.getItem("auth"),
        },
      });
    } catch (error) {
      console.error(error);
      console.log("이메일 내용 확인 하는 부분 잘못되었다.");
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
        <div className="recv_title">제목 : </div>
        <div className="recv_date">보낸 날짜 : </div>
        <div className="title_line2">
          ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
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

        <button className="send_btn">
          {/* 내가 보낸 쪽지함으로 이동 */}
          <Link to="/sendtxt" className="sending">
            ㅤ 내가보낸쪽지함가기 &gt;
          </Link>
        </button>
      </div>
    </>
  );
}
