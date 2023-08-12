import React from 'react';
import { useState } from 'react';
import '../style/TEMP.scss';
import RightContainer from '../components/RightContainer';

function TEMP() {

    const [email, setEmail] = useState('test@hansung.com'); 
    const [dateText, setDateText] = useState('2023년 4월 6일');
    const [daysText, setDaysText] = useState('3 4 5');
    const [sentMessages, setSentMessages] = useState('66');
    const [receivedMessages, setReceivedMessages] = useState('55');
  
    const handleInputChange = (setterFunc, value) => {
      setterFunc(value);
    };
  
    // 이메일 변경 함수
    const handleEmailChange = (newEmail) => {
      setEmail(newEmail);
    };


    
  return (
    
    <div className="bg">
        <div className = "Right">
            <div className ="Container">
                <div className="email">
                    <br></br>
                    {email}
                </div>
                <div className="info">
                <br></br><br></br><br></br>
                    ┌〓〓〓〓〓<span style={{ color: '#FF0000' }}>♡</span>〓〓〓〓〓┐<br></br>
                    ҉ ٩(๑{'>'}ω{'<'}๑)۶҉ <br></br>
                    방フГ방フГ しΗ친구~!<br></br>
                    <span style={{ color: '#FF0000' }}>{dateText}</span>ના フГ입ṑΗᨈㅓ<br></br>
                    벌써 ㅎ占께ㅎŁスı <br></br>
                    ♡ D + <span style={{ color: '#FF0000' }}>{daysText}</span> 일 ♡ 째긔<br></br>
                    ユ 동ㅇビ Ꮣㅓ는 <br></br>
                    ♥ <span style={{ color: '#FF0000' }}>{sentMessages}</span>통 ♥의 편スı를 보냈ヱ<br></br>
                    ♥ <span style={{ color: '#FF0000' }}>{receivedMessages}</span>통 ♥의 편スı를 받았Ꙕ<br></br>
                    ｡｡ ᕕ༼✿•̀︿•́༽ᕗ<br></br>
                    앞으로도 우ય 추억 <br></br>
                    많๐ㅣ 쌓ㅈr ε=٩(●❛ö❛)۶<br></br>
                    └〓〓〓〓〓<span style={{ color: '#850000' }}>♡</span>〓〓〓〓〓┘<br></br>
                    <br></br>  
                </div>
                <div className="click_area">
                    <div className="find-pw" onClick={() => alert('비번찾긔@ㅁ@')}>
                        |로그아웃|
                    </div>
                    <div className="find-pw" onClick={() => alert('비번찾긔@ㅁ@')}>
                        |회원탈퇴|
                    </div>
                    <div className="back-button" onClick={() => alert('뒤로가기 버튼 클릭')}>
                        |비번변경|
                    </div>
                </div>

            </div>
          </div> 
    </div> /*bg*/
  );
}

export default TEMP;
