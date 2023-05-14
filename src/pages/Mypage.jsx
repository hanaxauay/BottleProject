import React from "react";
import "../style/mypage.scss";

export default function Mypage() {

  return (
    <>
      <div className="mypage_content">
        
        <div className="top">
         <div className="topbox1"> </div>
         <div className="topbox2"> </div>
         <div className="topbox3"> </div>
         <div className="topline1"> </div>
         <div className="topline2"> </div>
        </div>

        <div className="left_container">
         <div className="logo"> 환영해 </div>
        </div>
        <div className="right_container">
          <div className="text_box1"></div>
          <div className="text_box2"></div>
          <div className="text_box3"></div>
          <div className="text_line1"></div>
          <div className="text_line2"></div>
          <div className="category_box1">소통</div>
          <button className="communi_btn1">
            1. 쪽지보내기
          </button>
          <button className="communi_btn2">
            2. 내가보낸쪽지보기
          </button>
          <button className="communi_btn3">
            3. 내가받은쪽지보기
          </button>
          <div className="category_box2">계정</div>
          <button className="account_btn1">
            1. 로그아웃하기
          </button>
          <button className="account_btn2">
            2. 비밀번호변경하기
          </button>
          <button className="account_btn3">
            3. 회원탈퇴하기
          </button>
        </div>
      </div>
    </>
  );
}
