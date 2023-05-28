import React from "react";
import "../style/main.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import LeftContainer from "../components/LeftContainer";

export default function Main() {
  return (
    <>
      <div className="main_content">
        <div className="top">
          <div className="topbox1"> </div>
          <div className="topbox2"> </div>
          <div className="topbox3"> </div>
          <div className="sicon_box1"> </div>
          <div className="sicon_box2"> </div>
          <div className="sicon_box3"> )و</div>
          <div className="sicon_bar1"> </div>
          <div className="sicon_bar2"> </div>

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
          <div className="ficon_box3">٩( </div>
          <div className="ficon_bar1"> </div>
          <div className="ficon_bar2"> </div>

          <div className="title">홈페이지</div>
          <div className="topline1"> </div>
          <div className="topline2"> </div>
        </div>
        <LeftContainer />

        <div className="right_container">
          <div className="text_box1"></div>
          <div className="text_box2"></div>
          <div className="text_box3"></div>
          <div className="text_line1"></div>
          <div className="text_line2"></div>
          <div className="category_box1">소개</div>
          <div className="text_main">~ 우리쪽지는 어쩌공 저쩌공 소개중 ~</div>
          <div className="category_box2">쪽지시작</div>
          <button className="login_btn">
            <Link to="/login" className="login">
              ㅤ 1. 로그인하기
            </Link>
          </button>
          <button className="register_btn">
            <Link to="/register" className="register">
              ㅤ 2. 회원가입하기
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
