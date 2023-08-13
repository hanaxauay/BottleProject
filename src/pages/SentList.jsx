import React from 'react';
import '../style/sendtxt.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export default function SentList(rightContainerProps) {
  const [bottles, setbottles] = useState([]);
//setbottles함수로 받아온 데이터를 bottles객체 안에 배열형식으로 저장
//50번부터 파싱



  // 내가 보낸 메세지 요청 방식 (get)
  const getSentBottles = async () => {
    try {
      const resSendTxt = await axios.get('/bottle/getSentBottles', {
        params: {
          auth: sessionStorage.getItem('auth'),
        },
      });
        //resSendTxt.data 얘가 정보 갖고잇ㄴ는애
     //여기서 콘솔로 찍어보면됨 console.log.resSendText.data

      if (resSendTxt.data.status === 'success') {
        sessionStorage.setItem('auth', resSendTxt.data.auth);
        setbottles(JSON.parse(resSendTxt.data.message));
      } else {
        console.error('getReceivedBottles error');//얘는지워도됌

      }
    } catch (error) {
      rightContainerProps.alertTextArea.current.innerHTML =
        '서버 내부 오류입니다.\n 관리자에게 문의하세요.';
      rightContainerProps.alertBox.current.style.display = 'block';
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
               {/* 50-60까지 찍어내기 반복 (가변) */}
          ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        </div>
        <div className="send_num">번호</div>
        <div className="send_title">제목</div>
        <div className="title_line2">
          ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        </div>
        {bottles.map((item, index) => (
          <div className="send_list1" key={item.letterId}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {index + 1}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {item.title}
            &nbsp;
            {item.isRead === 'Y' ? '(Read!)' : ''}
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
