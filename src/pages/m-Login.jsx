import React from 'react';
import '../style/m-login.scss';

const MLogin = () => {
    return (
        <div id="mhtml">
        <div id = "mbody">
        <div id="wrap">
            <div className="top">
                <div className="textarea">
                    ☆ 어서오r ☆<br />
                    。˚。2런 。˚。<br />
                    * 쪽zi는  *<br />
                    ☆처음easy?☆<br />
                </div>
            </div>
            <div className="mid">
                <div className="inputarea">
                    <div className="email">
                        e메일
                    </div>
                    <input className="email-input" type="email" placeholder="Enter your email" />
                    <div className="pw">
                        b번
                    </div>
                    <input className="pw-input" type="password" placeholder="Enter your password" />
                    <input type="button" className="btn_login" onClick={() => alert('로그인!')} value="로그인하긔" />
                </div>
            </div>
            <div className="bottom">
                <div className="click_area">
                    <input type="button" className="btn_reg" onClick={() => alert('회원가입@ㅁ@')} value="회원가입하긔" />
                    <button className="find-email" onClick={() => alert('이메일찾긔@ㅁ@')}>
                        |이메일찾긔|
                    </button>
                    <div className="find-pw" onClick={() => alert('비번찾긔@ㅁ@')}>
                        |비번찾긔|
                    </div>
                </div>
            </div>
        </div>
        </div>  {/*end of mbody */}
        </div>  
    );
}

export default MLogin;
