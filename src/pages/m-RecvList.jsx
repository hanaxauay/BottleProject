
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/m-recvlist.scss';

function btn_goback() {
    alert("뒤로가기 클z릭!");
  }

  function btn_sendlist() {
    alert("내가 보낸 ㅋ쪽지함!");
  }

  

  const MRecvList = (rightContainerProps) => {

    const [bottles, setBottles] = useState([]);

    useEffect(() => {
      getReceivedBottles();
    }, []);
  
    const getReceivedBottles = async () => {
      try {
        const response = await axios.get('/bottle/getReceivedBottles', {
          params: {
            auth: sessionStorage.getItem('auth'),
          },
        });
        if (response.data.status === 'success') {
          sessionStorage.setItem('auth', response.data.auth);
          setBottles(JSON.parse(response.data.message));
        } else {
          console.error('getReceivedBottles error');
        }
      } catch (error) {
        console.error('Server internal error');
      }
    };
  









  return (
        <div id="mhtml">
            <div id = "mbody">
                <div id="wrap">
                    <div className="top">
                        [내가 받은 쪽지함]
                    </div>  {/*end of  top*/}
                    <div className="mid"> 

                    <table>
    <tr>
      <th>[번호]</th>
      <th>제목</th>
    </tr>
    {bottles.map((item, index) => (
      <tr key={item.LETTER_ID}>
        <td>[{index + 1}]</td>
        <td>{item.TITLE}</td>
      </tr>
    ))}
  </table>


                        
{/*                     <table>
                        <tr>
                        <th>[번호]</th>
                        <th>제목</th>
                        </tr>
                        <tr>
                        <td>[1]</td>
                        <td>이거어케불러올거임</td>
                        </tr>
                        <tr>
                        <td>[2]</td>
                        <td>데이터 셀 2</td>
                        </tr>
                        <tr>
                        <td>[3]</td>
                        <td>데이터 셀 2</td>
                        </tr>
                        <tr>
                        <td>[4]</td>
                        <td>데이터 셀 2</td>
                        </tr>
                    
                    </table> */}


                    </div>  {/*end of mid */}
                    <div className="bottom">
                        <div className="left" onClick={btn_goback}>
                              &nbsp;↜&nbsp; 뒤로가기
                        </div>  {/*end of left */}
                        <div className="right" onClick={btn_sendlist}>
                              내가 쓴 쪽지함 &nbsp;➣&nbsp;
                        </div>  {/*end of right */}

                    </div>  {/*end of bottom */}
                </div>  {/*end of  wrap*/}
            </div>  {/*end of mbody */}
        </div>  
     );
};

export default MRecvList;
