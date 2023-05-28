import React from "react";
import "../style/mypage.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import LeftContainer from "../components/LeftContainer";

export default function Mypage() {
  return (
    <>
      <div className="mypage_content">
        <div className="top">
          <div className="topbox1"> </div>
          <div className="topbox2"> </div>
          <div className="topbox3"> </div>

          <div className="sicon_box1"> </div>
          <div className="sicon_box2"> </div>
          <div className="sicon_box3"> )ᐟ</div>
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
          <div className="ficon_box3">ᐠ( </div>
          <div className="ficon_bar1"> </div>
          <div className="ficon_bar2"> </div>

          <div className="title">마이페이지</div>
          <div className="topline1"> </div>
          <div className="topline2"> </div>
        </div>

        {/* left Container 분리 */}
        <LeftContainer />
        <div className="right_container">
          <div className="text_box1"></div>
          <div className="text_box2"></div>
          <div className="text_box3"></div>
          <div className="text_line1"></div>
          <div className="text_line2"></div>
          <div className="category_box1">소통</div>
          <button className="communi_btn1">
            <Link to="/textpage" className="text">
              ㅤ 1. 쪽지보내기
            </Link>
          </button>

          <button className="communi_btn2">
            <Link to="/sendtxt" className="send">
              ㅤ 2. 내가보낸쪽지보기
            </Link>
          </button>

          <button className="communi_btn3">
            <Link to="/recvtxt" className="recv">
              ㅤ 3. 내가받은쪽지보기
            </Link>
          </button>

          <div className="category_box2">계정</div>
          <button className="account_btn1">1. 로그아웃하기</button>

          <button className="account_btn2">2. 비밀번호변경하기</button>

          <button className="account_btn3">3. 회원탈퇴하기</button>
        </div>
      </div>
    </>
  );
}
