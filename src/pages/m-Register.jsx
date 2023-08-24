import React from "react";
import "../style/m-register.scss";

const MRegister = () => {
  return (
    <div id="mhtml">
      <div id="mbody">
        <div id="wrap">
          <div className="top">
            <div className="textarea">
              ☆ a ☆<br />
              。˚。a 。˚。
              <br />
              * a *<br />
              ☆ a☆
              <br />
            </div>
          </div>
          <div className="mid">
            <input
              type="button"
              className="email-check"
              onClick={() => alert("중복@ㅁ@")}
              value="쳌"
            />
            <div className="inputarea">
              <div className="email">e메일</div>
              <input
                className="email-input"
                type="email"
                placeholder="Enter your email"
              />
              <div className="pw">b번</div>
              <input
                className="pw-input"
                type="password"
                placeholder="Enter your password"
              />
              <div className="repw">b번확인</div>
              <input
                className="repw-input"
                type="password"
                placeholder="Enter your password again"
              />
            </div>
          </div>
          <div className="bottom">
            <div className="click_area">
              <input
                type="button"
                className="btn_reg"
                onClick={() => alert("가입완@ㅁ@")}
                value="가입하긔"
              />
              <div className="click_back" onClick={() => alert("빼애애액@ㅁ@")}>
                &#8592; 빽
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/*end of mbody */}
    </div>
  );
};

export default MRegister;
