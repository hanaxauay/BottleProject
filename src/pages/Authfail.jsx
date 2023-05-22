import React from "react";
import "../style/authfail.scss";
import { Link } from "react-router-dom";

export default function Authfail() {
  return (
    <>
      <div className="authfail_content">
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

          <div className="title">이메일인증실패페이지</div>
          <div className="topline1"> </div>
          <div className="topline2"> </div>
        </div>

        <div className="left_container">
          <div className="logo">
            {"　｀、ヽ｀｀｀、ヽ｀｀、ヽ｀、ヽ｀ヽ　"}
            <br />
            {"　｀｀、ヽ｀ヽ｀、ヽ｀、ヽヽ｀、ヽ　　"}
            <br />
            {"　ヽ｀ヽ｀、、 푸슝｀、ヽヽ｀、ヽ　　"}
            <br />
            {"　ヽ｀｀ヽ ____＼从/_ヽ｀、ヽ｀、ヽヽ　"}
            <br />
            {"｀ヽ｀、ヽ／＼＿＿＿＿＼　｀ヽ｀、ヽ"}
            <br />
            {"　｀ヽ｀、|￣＼(∩゜Д゜;)＼｀ヽ｀、ヽ　"}
            <br />
            {"｀ヽ｀、ヽ|　 ｜￣￣∪￣｜   ｀ヽ｀、ヽ　"}
            <br />
            {"　｀、ヽ｀｀｀、ヽ｀｀、ヽ｀、ヽ｀ヽ　"}
          </div>
        </div>
        <div className="right_container">
          <div className="text_box1"></div>
          <div className="text_box2"></div>
          <div className="text_box3"></div>
          <div className="text_line1"></div>
          <div className="text_line2"></div>
          <div className="email_fail"> 이메일 인증을 실패했습니다 </div>
          <button className="try_email">
          <Link to="/emailauth" className="login">ㅤ1.이메일 인증 다시하기
          </Link>
          </button>
          <button className="try_register">
          <Link to="/register" className="register">ㅤ
            2.회원가입 다시하러가기
          </Link>
          </button>
        </div>
      </div>
    </>
  );
}
