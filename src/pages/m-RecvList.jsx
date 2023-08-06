import React from 'react';
import '../style/m-recvlist.scss';

function btn_goback() {
    alert("뒤로가기 클z릭!");
  }

  function btn_sendlist() {
    alert("내가 보낸 ㅋ쪽지함!");
  }

  

const MRecvList = () => {
  return (
        <div id="mhtml">
            <div id = "mbody">
                <div id="wrap">
                    <div className="top">
                        [내가 받은 쪽지함]
                    </div>  {/*end of  top*/}
                    <div className="mid"> {/*용준->여기안에다가 디브로 두개 구분해서 넣은다음에 scss에서 작업하면댐*/}
                        
  
                    </div>  {/*end of mid */}
                    <div className="bottom">
                        <div className="left" onClick={btn_goback}>
                              <br></br> &nbsp;↜&nbsp; 뒤로가기
                        </div>  {/*end of left */}

                       { /*여기에 디브 가운테 태그 하나 더 넣고 작업하삼.
                         onclick은 이 jsx 제일 위에 function해놓은거 똑같은 형식으로 만들어서 추가하삼
                       
                       */}

                        <div className="right" onClick={btn_sendlist}>
                             <br></br>  내가 쓴 쪽지함 &nbsp;➣&nbsp;
                        </div>  {/*end of right */}

                    </div>  {/*end of bottom */}
                </div>  {/*end of  wrap*/}
            </div>  {/*end of mbody */}
        </div>  
     );
};

export default MRecvList;
