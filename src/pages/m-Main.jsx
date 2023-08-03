import React from 'react';
import '../style/m-main.scss';

function MMain() {
  return (
    <div id="wrap">
      <div className="top"></div>
      <div className="mid">
        <div className="textarea">
          <div className="decoMsg">
            ┌〓〓〓〓〓♡〓〓〓〓〓┐<br />
            .˚。‥‥…·─━☆。。<br />
            .˚。우리쪽zzi는~!。˚ <br />
            ㅊrㄴ호 취직 추카뽕<br />
            .☆。ㅇ오옝오‥…·─━☆<br />
            .ㅇ오옝오‥…·─━☆<br />
            .˚。‥‥…·─━☆。˚┌┐<br />
            └〓〓〓〓〓♡〓〓〓〓〓┘<br />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="btn_area">
          <input
            type="button"
            className="btn_grey btn_top"
            onClick={() => alert('로그인!')}
            value="로그인ㅎr기"
          />
          <input
            type="button"
            className="btn_grey"
            onClick={() => alert('회원가입!')}
            value="회원가입ㅎr긔"
          />
        </div>
      </div>
    </div>
  );
}

export default MMain;
