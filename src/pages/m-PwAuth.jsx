import React from "react";
import "../style/m-pwauth.scss";

const MPwAuth = () => {
  return (
    <div id="mhtml">
      <div id="mbody">
        <div id="wrap">
          <div className="top">
            <div className="textarea">
              <div className="decoMsg">
                ∧__∧
                <br />
                ( ｀Д´ )<br />
                (っe메일 인증해☆
                <br />
                / )<br />
                <br />
              </div>{" "}
              {/*end of decoMsg */}
            </div>
          </div>
          <div className="mid">
            <input
              type="button"
              className="email-check"
              onClick={() => alert("발송완!")}
              value="쳌"
            />
            <div className="inputarea">
              <div className="email">e메일</div>
              <input
                className="email-input"
                type="email"
                placeholder="Enter your email"
              />
              <div className="auth">인증번ho</div>
              <input
                className="auth-input"
                type="password"
                placeholder="Enter your number"
              />
            </div>
          </div>
          <div className="bottom">
            <div className="click_area">
              <input
                type="button"
                className="btn_reg"
                onClick={() => alert("엥 틀림@ㅁ@")}
                value="클릭하긔"
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

export default MPwAuth;
