import React from "react";
import "../style/main.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import LeftContainer from "../components/LeftContainer";
import RightContainer from "../components/RightContainer";

export default function Main() {
  return (
    <>
      <div className="main_content">
        <div className="top">
          <div className="topbox1">
            <div className="topbox2">
              <div className="topbox3">
                {/*<div className="sicon_box1">*/}
                {/*  <div className="sicon_box2">*/}
                {/*    <div className="sicon_box3"> )و</div>*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/*<div className="sicon_bar1">*/}
                {/*  <div className="sicon_bar2"> </div>*/}
                {/*</div>*/}
                {/*<div className="home_box1">*/}
                {/*  <div className="home_box2">*/}
                {/*    <button className="home_btn">*/}
                {/*      <Link to="/" className="home">*/}
                {/*        <FontAwesomeIcon icon={faHome} />ㅤ*/}
                {/*      </Link>*/}
                {/*    </button>*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/*<div className="ficon_box1">*/}
                {/*  <div className="ficon_box2">*/}
                {/*    <div className="ficon_box3">٩( </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
          <div className="title">홈페이지</div>
        </div>
        <div className="center_content">
          <LeftContainer />
          <RightContainer />
        </div>
      </div>
    </>
  );
}
