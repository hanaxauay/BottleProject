import React from 'react';
import { useState } from 'react';
import '../style/m-setting.scss';

function btn_goback() {
    alert("뒤로가기 클z릭!");
  }

  function btn_sendlist() {
    alert("내가 보낸 ㅋ쪽지함!");
  }

  

const MSetting = () => {

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
        <div id="mhtml">
            <div id = "mbody">
                <div id="wrap">                   
                        <div className="top">
                            
                            <div className="close-button" onClick={() => {/* close functionality */}}>
                                 &#10006;
                            </div>
                        </div>
                        <div className="mid">
                            <div className="email">
                                <br></br>
                                {email}
                            </div>
                            <div className="info">
                                <br></br>
                                ┌〓〓〓〓〓<span style={{ color: '#850000' }}>♡</span>〓〓〓〓〓┐<br></br>
                                ҉ ٩(๑{'>'}ω{'<'}๑)۶҉ <br></br>
                                방フГ방フГ しΗ친구~!<br></br>
                                <span style={{ color: '#850000' }}>{dateText}</span>ના フГ입ṑΗᨈㅓ<br></br>
                                벌써 ㅎ占께ㅎŁスı <br></br>
                                ♡ D + <span style={{ color: '#850000' }}>{daysText}</span> 일 ♡ 째긔<br></br>
                                ユ 동ㅇビ Ꮣㅓ는 <br></br>
                                ♥ <span style={{ color: '#850000' }}>{sentMessages}</span>통 ♥의 편スı를 보냈ヱ<br></br>
                                ♥ <span style={{ color: '#850000' }}>{receivedMessages}</span>통 ♥의 편スı를 받았Ꙕ <br></br>
                                ｡｡ ᕕ༼✿•̀︿•́༽ᕗ<br></br>
                                앞으로도 우ય 추억 <br></br>
                                많๐ㅣ 쌓ㅈr ε=٩(●❛ö❛)۶<br></br>
                                <br></br>
                                └〓〓〓〓〓<span style={{ color: '#850000' }}>♡</span>〓〓〓〓〓┘<br></br>
                                <br></br>  
                            </div>
                            <div className="changepwd">
                                <br></br>비밀번호 변경 <br></br>

                                <div className="inputarea">
                                    <div className="pwd-old">
                                        현재 비밀번호&nbsp;&nbsp;
                                        <input className="pwd-old-input" type="password" placeholder="현재 비밀번호" />
                                    </div>
                                    <div className="pwd-new">
                                        &nbsp;새 비밀번호&nbsp;&nbsp;&nbsp;
                                        <input className="pwd-new-input" type="password" placeholder="새 비밀번호" />
                                    </div>
                                    <div className="pwd-new-re">
                                        &nbsp;&nbsp;&nbsp;&nbsp;재입력&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input className="pwd-new-re-input" type="password" placeholder="재입력" />
                                    </div>
                                </div>{/*end of inputarea*/}
                                <input type="button" className="btn_changepwd" onClick={() => alert('btn_changepwd!')} value="&nbsp;확인&nbsp;" />
                            </div> {/*end of changepwd*/}
                        </div> 
                        <div className="bottom">
                            <div className="click_area">
                                <div className="find-pw" onClick={() => alert('비번찾긔@ㅁ@')}>
                                    |로그아웃|
                                </div>
                                <div className="find-pw" onClick={() => alert('비번찾긔@ㅁ@')}>
                                    |회원탈퇴|
                                </div>
                            </div>
                        </div>
                    </div>  {/*end of wrap*/}                  

            </div>  {/*end of mbody */}
        </div>  
     );
};

export default MSetting;
