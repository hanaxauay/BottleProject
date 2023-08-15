import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../style/bottleDetail.scss';

export default function BottleDetail(rightContainerProps) {
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
      const response = await axios.get('/bottle/getBottleDetail', {
        params: {
          letterId: itemId,
          auth: sessionStorage.getItem('auth'),
        },
      });
      if (response.data.status === 'success') {
        sessionStorage.setItem('auth', response.data.auth);
        setTitle(JSON.parse(response.data.message).title);
        setSentDt(JSON.parse(response.data.message).sendDt);
        setContent(JSON.parse(response.data.message).content);
        console.log(title);
        console.log(sendDt);
        console.log(content);
      } else {
        rightContainerProps.alertTextArea.current.innerHTML =
          response.data.message;
        rightContainerProps.alertBox.current.style.display = 'block';
      }
    } catch (error) {
      rightContainerProps.alertTextArea.current.innerHTML =
        '서버 내부 오류입니다.\n 관리자에게 문의하세요.';
      rightContainerProps.alertBox.current.style.display = 'block';
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
        <div className="title_line1" />
        <div className="recv_num">번호 : {itemid}</div>
        <div className="recv_title">제목 : {title} </div>
        <div className="recv_date">보낸 날짜 : {sendDt}</div>
        <div className="title_line2" />
        <div className="recv_content">{content}</div>
        <div className="title_line3" />


        {/* 뒤로가기 버튼 */}
        <button className="back_btn">
          <Link to="/RecvList" className="back">
            ㅤ &lt; 뒤로가기
          </Link>
        </button>

        {/* 채팅 버튼 */}
        <button className="chat_btn" >
          <div className="cha_btn_text">채팅열기</div>
        </button>

        <button className="send_btn">
          {/* 내가 보낸 쪽지함으로 이동 */}
          <Link to="/SentList" className="sending">
            ㅤ 보낸쪽지함 &gt;
          </Link>
        </button>
      </div>
    </>
  );
}
