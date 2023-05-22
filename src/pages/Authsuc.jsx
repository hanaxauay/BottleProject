import React from "react";
import "../style/authsuc.scss";
import { Link } from "react-router-dom";

export default function Authsuc() {
  return (
    <>
      <div className="authsuc_content">
        <div className="top">
          <div className="topbox1"></div>
          <div className="topbox2"></div>
          <div className="topbox3"></div>
          <div className="sicon_box1"> </div>
          <div className="sicon_box2"> </div>
          <div className="sicon_box3"> </div>
          <div className="sicon_bar1"> </div>
          <div className="sicon_bar2"> </div>
          <div className="home_box1"> </div>
          <div className="home_box2"> </div>
          <div className="home_box3"> </div>
          <div className="home_bar1"> </div>
          <div className="home_bar2"> </div>
          <div className="ficon_box1"> </div>
          <div className="ficon_box2"> </div>
          <div className="ficon_box3"> </div>
          <div className="ficon_bar1"> </div>
          <div className="ficon_bar2"> </div>

          <div className="title">이메일인증성공페이지</div>
          <div className="topline1"> </div>
          <div className="topline2"> </div>
        </div>
        <div className="left_container">
          <div className="logo">
            {"♪　　♪　　•　 　.•♫ "}
            <br />
            {"　♫ *　♪　　´　　♪"}
            <br />
            {"♫　.•　∧＿∧　.•　♪"}
            <br />
            {"♪.　　 （´・ω・） 　*¨.　"}
            <br />
            {"　♪¨　 (っ 旦o　.•　　*　♪"}
            <br />
            {"　┈┈┈☆☆☆☆☆☆☆☆☆☆☆☆┈┈┈"}
            <br />
            {"♫┈┈╭┻┻┻┻┻┻┻┻┻┻┻┻╮┈┈"}
            <br />
            {"•*┈╭┻━━━━━━━━━━━━┻╮┈♫"}
            <br />
            {"　┈┃╲╱╲╱╲╱╱╲╱╱╲╱╲╱┃┈•♫"}
            <br />
            {".•┈┃ ♡환♡ 영♡ 해♡ ┃┈"}
            <br />
            {"*♪┈┃╲╱╲╱╲╱╱╲╱╱╲╱╲╱┃┈♪."}
            <br />
            {"♪.┈┗━━━━━━━━━━━━━━┛┈"}
          </div>
        </div>
        <div className="right_container">
          <div className="text_box1"></div>
          <div className="text_box2"></div>
          <div className="text_box3"></div>
          <div className="text_line1"></div>
          <div className="text_line2"></div>
          <div className="email_suc"> 이메일 인증을 성공했습니다 </div>
          <button className="go_login">
          <Link to="/login" className="login">ㅤ1.로그인 하러 가기
          </Link>
          </button>
        </div>
      </div>
    </>
  );
}