import React from 'react';
import '../style/m-mypage.scss';

const MMypage = () => {
  return (
        <div id="mhtml">
            <div id = "mbody">
                <div id="wrap">
                    <div className="top">
                        <button type="button" className="btn_setting" onClick={() => alert('세팅버튼클릭!')}>
                            <span><img src="../images/icon_setting.png" alt="세팅 아이콘" /></span>
                        </button>
                    </div>  {/*end of  top*/}
                    <div className="mid">
                        <div className="textarea">
                            <div className="decoMsg">
                                ∧__∧<br />
                                ( ｀Д´ )<br />
                                (っ▄︻▇〓┳═☆ 발들어<br />
                                / )<br />
                                <br />
                            </div>   {/*end of decoMsg */}
                            <div className="welcomeMsg">
                                WELCOME! 영심님!
                            </div>  {/*end of welcomeMsg */}
                        </div>  {/*end of textMsg */}
                    </div>  {/*end of mid */}
                    <div className="bottom">
                        <div className="btn_area">
                            <input type="button" className="btn_grey btn_top" onClick={() => alert('쪽지보내기클릭!')} value="쪽지 보내기" />
                            <input type="button" className="btn_grey" onClick={() => alert('받쪽지함!')} value="받은 쪽지함" />
                            <input type="button" className="btn_grey btn_bottom" onClick={() => alert('보낸쪽지함!')} value="보낸 쪽지함" />
                        </div>  {/*end of btn_area */}
                    </div>  {/*end of bottom */}
                </div>  {/*end of  wrap*/}
            </div>  {/*end of mbody */}
        </div>  
     );
};

export default MMypage;
