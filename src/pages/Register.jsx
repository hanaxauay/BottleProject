import React from "react";
import "../style/register.scss";
import { Link } from "react-router-dom";
import { BiCheck } from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function Register() {
  return (
    <>
      <div className="register_content">
        
        <div className="top">
         <div className="topbox1"> </div>
         <div className="topbox2"> </div>
         <div className="topbox3"> </div>

         <div className="sicon_box1"> </div>
         <div className="sicon_box2"> </div>
         <div className="sicon_box3"> )୨</div>
         <div className="sicon_bar1"> </div>
         <div className="sicon_bar2"></div>
         
         <div className="home_box1"> </div>
         <div className="home_box2"> </div>
         <div className="home_bar1"> </div>
         <div className="home_bar2"> </div>
         <button className="home_btn">
           <Link to="/" className="home">
             <FontAwesomeIcon icon={faHome} />ㅤ
           </Link>       
         </button>

         <div className="ficon_box1"> </div>
         <div className="ficon_box2"> </div>
         <div className="ficon_box3"> ୧(</div>
         <div className="ficon_bar1"> </div>
         <div className="ficon_bar2"> </div>

         <div className="title">회원가입페이지</div>
         <div className="topline1"> </div>
         <div className="topline2"> </div>
        </div>

        <div className="left_container">
        <div className="logo">
  {"　　　　♪∧,,∧〇 　"}
  <br />
  {"　♪∧,,∧・ ω・)ｏ "}
  <br />
  {"∧,,∧・ ω・)　 )っ° 　"}
  <br />
  {"(・ ω ・)　　)っ＿_フ★"}
  <br />
  {"(っ　)っ　＿_フ(_/彡와"}
  <br />
  {"　( ＿_フ(_/彡 서"}
  <br />
  {"　 (_/彡♪ 어"}
</div>


        </div>
        <div className="right_container">
            <div className="name">이름</div>
            <div className="name_box1"></div>
            <div className="name_box2"></div>
            <div className="name_bar1"></div>
            <div className="name_bar2"></div>
            <div className="name_input">
              <input type="name" />
            </div>
            <div className="nickname">닉네임</div>
            <div className="nickname_box1"></div>
            <div className="nickname_box2"></div>
            <div className="nickname_bar1"></div>
            <div className="nickname_bar2"></div>
            <div className="nickname_input">
              <input type="nickname"/>
            </div>
            
        
            <div className="phone">핸드폰번호</div>
            <div className="phone_box1"></div>
            <div className="phone_box2"></div>
            <div className="phone_bar1"></div>
            <div className="phone_bar2"></div>
            <div className="phone_input">
              <input type="phone"  />
            </div>
            
            <div className="input_container">
              <div className="email">이메일</div>
              <div className="email_box1"></div>
              <div className="email_box2"></div>
              <div className="email_bar1"></div>
              <div className="email_bar2"></div>
              <div className="email_input">
                <input type="email" />
              </div>
              <div className="eclick_box1"></div>
              <div className="eclick_box2"></div>
              <div className="eclick_bar1"></div>
              <div className="eclick_bar2"></div>
             <button className="clickemail_btn">
                <span className="icon-wrapper">
                  <BiCheck size={30} />
                </span>
              </button>
            </div>

            <div className="password">비밀번호</div>
            <div className="password_box1"></div>
            <div className="password_box2"></div>
            <div className="password_bar1"></div>
            <div className="password_bar2"></div>
            <div className="password_input">
              <input type="password" />
            </div>
            <div className="repassword">비밀번호재입력</div>
            <div className="repassword_box1"></div>
            <div className="repassword_box2"></div>
            <div className="repassword_bar1"></div>
            <div className="repassword_bar2"></div>
            <div className="repassword_input">
              <input type="repassword"/>
            </div>
            <div className="sign_box1"></div>
            <div className="sign_box2"></div>
            <div className="sign_bar1"></div>
            <div className="sign_bar2"></div>
            <button className="signup_btn">
              가입하기
            </button>
            <button className="login_btn">
              <Link to="/login" className="login">ㅤ
               | 로그인하기 |
              </Link>
            </button>
          </div>
        </div>
    </>
    );
}
