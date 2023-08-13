import React from 'react';
import { useState } from 'react';
import '../style/TEMP2.scss';
import RightContainer from '../components/RightContainer';

function TEMP2() {

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
                <div className="top">
                    <br></br>
                    | 회 원 탈 퇴 |
                </div>
                <div className="info">
                            <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>

                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╱<br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<br></br>
                                &nbsp;╲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╱<br></br>
                                &nbsp;&nbsp;╲&nbsp;&nbsp;    설ㅁΓ...&nbsp;&nbsp;&nbsp;╱<br></br>
                                --&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;진ㅉ&nbsp;ŀ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;-&nbsp;-<br></br>
                                &nbsp;&nbsp;╱&nbsp;   탈 퇴 ṑトレト요?&nbsp;&nbsp;╲<br></br>
                                &nbsp;&nbsp;/     (ಥ﹏ಥ)(ಥ﹏ಥ)      .<br></br>
                                &nbsp;&nbsp;╱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╲<br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;|<br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                ┳┻|__∧<br></br>
                                ┻┳|•﹃ •)  
                                ┳┻|⊂ﾉ <br></br>
                                ┻┳|Ｊ┻┳|     
                                ┳┻|__∧<br></br>
                                ┻┳|•﹃ •)<br></br>
                                ┳┻|⊂ﾉ<br></br>
                                ┻┳|Ｊ<br></br>
                                우己l ○l제 못봐?<br></br>
                                (´°̥̥̥̥̥̥̥̥ω°̥̥̥̥̥̥̥̥｀)(´°̥̥̥̥̥̥̥̥ω°̥̥̥̥̥̥̥̥｀)<br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                &nbsp;&nbsp;;ハ＿ハ;+ヾ<br></br>
                                &nbsp;⊂(+ ｀Д´)つ<br></br>
                                &nbsp;;/&nbsp;&nbsp;゜。゜。<br></br>
                                &nbsp;;し￣Ｊ。゜。゜&nbsp;&nbsp;;ハ＿ハ;+ヾ<br></br>
                                &nbsp;⊂(+ ｀Д´)つ<br></br>
                                &nbsp;;/&nbsp;&nbsp;゜。゜。<br></br>
                                &nbsp;;し￣Ｊ。゜。゜<br></br>
                                <br></br>
                                ㄴr 없๐ㅣ 잘 ⋌トㄴr 보ㅈr ! 흥<br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                ⠀ ^∧＿∧^              ㅁビㄴr서  즐ᥐㅓ웠Ꙕ<br></br>
                                ( ´ •̥̥̥ ω •̥̥̥ )&nbsp;&nbsp;  ❀   행복ṑΗ࿁ㅇㅑ ṑΗ<br></br>
                                ,, ( ヽ∩∩ ) ,, ヽ|〃 ,,,  또 ㅁビㄴrㅈr  ♡<br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <div className="changepwd">
                    <div className="inputarea">
                        <div className="pwd">
                            비밀번호를 입력하세요 &nbsp;&nbsp;
                            <input className="pwd-input" type="password" placeholder=" 현재 비밀번호" />
                        </div>                 
                    </div>{/*end of inputarea*/}
                    <input type="button" className="btn_bye" onClick={() => alert('잘가라')} value="&nbsp;탈퇴하기&nbsp;" />
                </div> {/*end of changepwd*/}
                
                
                </div>

             
                <div className="bottom">
                    다시한번 생각해 보긔,,
                </div>
            </div>
        </div> 
    </div> /*bg*/
  );
}

export default TEMP2;
