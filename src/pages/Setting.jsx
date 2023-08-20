import React from 'react';
import { useState } from 'react';
import '../style/setting.scss';
import RightContainer from '../components/RightContainer';
import { useEffect } from 'react';
import { async } from '@firebase/util';
import axios from 'axios';

export default function Setting() {
  const [email, setEmail] = useState([]);
  const [dateText, setDateText] = useState();
  const [daysText, setDaysText] = useState();
  const [sentMessages, setSentMessages] = useState();
  const [receivedMessages, setReceivedMessages] = useState();

  const handleInputChange = (setterFunc, value) => {
    setterFunc(value);
  };

  // 이메일 변경 함수
  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const getUserInfo = async () => {
    console.log('잘 찍힘 ');
    try {
      const resGetUserInfo = await axios.get('/user/getUserInfo', {
        params: {
          auth: sessionStorage.getItem('auth'),
        },
      });
      if (resGetUserInfo.data.status === 'success') {
        const message = resGetUserInfo.data.message;
        
        console.log("ㅡㅡㅡㅡㅡㅡㅡ");
       
        console.log(message);
       
        const userInfo = JSON.parse(resGetUserInfo.data.message);
        setEmail(userInfo.email);
        setDateText(userInfo.joinDt);
        setDaysText(userInfo.dday);
        setSentMessages(userInfo.cntSent);
        setReceivedMessages(userInfo.cntReceived);
      }
    } catch (error) {
      console.error(error);
      console.log('UserInfo 가져오는 부분 에러');
    }
  };

  //  TEMP 화면 들어오는 순간 useEffect 로 getUserInfo 함수 호출
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="bg">
        <div className="Container">
          <div className="email">
            <br></br>
            {email}
          </div>
          <div className="info">
            <br></br>
            ┌〓〓〓〓〓<span style={{ color: '#FF0000' }}>♡</span>〓〓〓〓〓┐
            <br></br>҉ ٩(๑{'>'}ω{'<'}๑)۶҉ <br></br>
            방フГ방フГ しΗ친구~!<br></br>
            <span style={{ color: '#FF0000' }}>{dateText}</span>ના フГ입ṑΗᨈㅓ
            <br></br>
            벌써 ㅎ占께ㅎŁスı <br></br>♡ D +{' '}
            <span style={{ color: '#FF0000' }}>{daysText}</span> 일 ♡ 째긔
            <br></br>ユ 동ㅇビ Ꮣㅓ는 <br></br>♥{' '}
            <span style={{ color: '#FF0000' }}>{sentMessages}</span>통 ♥의
            편スı를 보냈ヱ<br></br>♥{' '}
            <span style={{ color: '#FF0000' }}>{receivedMessages}</span>통 ♥의
            편スı를 받았Ꙕ<br></br>
            ｡｡ ᕕ༼✿•̀︿•́༽ᕗ<br></br>
            앞으로도 우ય 추억 <br></br>
            많๐ㅣ 쌓ㅈr ε=٩(●❛ö❛)۶<br></br>
            └〓〓〓〓〓<span style={{ color: '#850000' }}>♡</span>〓〓〓〓〓┘
            <br></br>
          </div>
          <div className="click_area">
            <div className="find-pw" onClick={() => alert('비번찾긔@ㅁ@')}>
              |로그아웃|
            </div>
            <div className="find-pw" onClick={() => alert('비번찾긔@ㅁ@')}>
              |회원탈퇴|
            </div>
            <div
              className="back-button"
              onClick={() => alert('뒤로가기 버튼 클릭')}
            >
              |비번변경|
            
            </div>
          </div>
        </div>
    </div> /*bg*/
  );
}
