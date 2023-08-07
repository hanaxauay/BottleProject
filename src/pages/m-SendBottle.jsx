
import '../style/m-sendbottle.scss';
import React, { useState } from 'react';



function btn_goback() {
    alert("뒤로가기 클z릭!");
  }

  function btn_send() {
    alert("보내기");
}
  function btn_theme() {
    alert("테마보기");
  }

const MSendBottle = () => {
  const [textValue, setTextValue] = useState("")
  const handleSetValue = (e) => {
    setTextValue(e.target.value);
  };
  return (
        <div id="mhtml">
            <div id = "mbody">
                <div id="wrap">
                    <div className="top">
                        [쪽지내용을 입력하세요]
                    </div>  {/*end of  top*/}
                    <div className="title"> 
            <div className="titlename">제목 :</div>
            <div className="titletext"><input type="text" size="max"></input></div>
          </div>
          <div className="text">
            <textarea
              placeholder="[글을 입력하세요]"
              value={textValue}
              onChange={(e) => handleSetValue(e)}>
              </textarea>
          </div>
                     {/*end of mid */}
                    <div className="bottom">
                        <div className="left" onClick={btn_goback}>
                              &nbsp;↜뒤로가기&nbsp;
                        </div>  {/*end of left */}
                        <div className="mid" onClick={btn_theme}>
                                &nbsp;□테마보기&nbsp;
                          </div>{/*end of mid */}
                        <div className="right" onClick={btn_send}>
                               &nbsp;보내기➣&nbsp;
                        </div>  {/*end of right */}
                    </div>  {/*end of bottom */}
                </div>  {/*end of  wrap*/}
            </div>  {/*end of mbody */}
        </div>  
     );
};

export default MSendBottle;
