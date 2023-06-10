import React, {useEffect} from "react";
import "../style/mypage.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import LeftContainer from "../components/LeftContainer";
import axios from "axios";

export default function Mypage() {

    const authCheck = async function() {
        try {
            var response = await axios.get(`/bottle/authCheck/`, {
                params: {
                    auth: sessionStorage.getItem("auth"),
                },
            });
            if (response.data.status === "success") {
                sessionStorage.setItem("auth", response.data.auth);
            } else {
                console.error("authCheck error");
            }
        } catch(error) {
            alert("서버 내부 오류입니다.\n 관리자에게 문의하세요.");
        }
    }
    useEffect( function () {
        authCheck()
    }, []);

  return (
      <div className="mypage_content">
          {/*<div className="text_box1"></div>*/}
          {/*<div className="text_box2"></div>*/}
          {/*<div className="text_box3"></div>*/}
          {/*<div className="text_line1"></div>*/}
          {/*<div className="text_line2"></div>*/}
          <div className="category_box1" style={{left: '15%', top: '30%'}}>소통</div>
          <button className="communi_btn1">
            <Link to="/SendBottle" className="text">
              ㅤ 1. 쪽지보내기
            </Link>
          </button>
          <button className="communi_btn2">
            <Link to="/SentList" className="send">
              ㅤ 2. 내가보낸쪽지
            </Link>
          </button>
          <button className="communi_btn3">
            <Link to="/RecvList" className="recv">
              ㅤ 3. 내가받은쪽지
            </Link>
          </button>

          <div className="category_box2" style={{left: '55%', top: '30%'}}>계정</div>
          <button className="account_btn1">
              <Link to="/logout" className="logout">
                  ㅤ 4. 로그아웃
              </Link>
          </button>
          <button className="account_btn2">
              <Link to="/myAccount" className="myAccount">
                  ㅤ 5. 내정보
              </Link>
          </button>
          <button className="account_btn3">
              <Link to="/chgpwd" className="chgpwd">
                  ㅤ 6. 비밀번호 변경
              </Link>
          </button>
        </div>
  );
}
