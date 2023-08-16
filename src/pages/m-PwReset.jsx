import React from "react";
import "../style/m-pwreset.scss";

const MPwReset = () => {
  return (
    <div id="mhtml">
      <div id="mbody">
        <div id="wrap">
          <div className="top">
            <div className="textarea">
              ☆ ☆<br />
              。˚비。 。번˚。
              <br />
              * # 재* ^*
              <br />
              ☆설 ☆정 $
              <br />
            </div>
          </div>
          <div className="mid">
            <div className="inputarea">
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
              <input
                type="button"
                className="btn_reset"
                onClick={() => alert("잊어버리지마~!")}
                value="바꾸긔"
              />
            </div>
          </div>
          <div className="bottom">
            <button className="click-login" onClick={() => alert("로그ingo")}>
              |로그ingo|
            </button>
          </div>
        </div>
      </div>
      {/*end of mbody */}
    </div>
  );
};

export default MPwReset;
