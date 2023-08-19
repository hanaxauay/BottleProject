import React, {useEffect} from 'react';
import '../style/chatDetial.scss';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

export default function ChatDetail(rightContainerProps) {

    return (
        <div className="chat_detail">
            <div className="recv_text">[ 채팅 내용 ]</div>
            <div className="title_line1"/>
            <div className="recv_content">

            </div>
            <div className="title_line3"/>
            <div className="chatbox">
                <div className="chatbox2">
                    <div className="chatbar1"></div>
                    <div className="chatbar2"></div>
                    <div className="chat_input1">
                        <input type="text"
                            // onChange={onChangeInput}
                        />
                    </div>
                </div>
            </div>
            <button className="send_btn">
                <div className="send">
                    전송
                </div>
            </button>

            {/* 뒤로가기 버튼 */}
            <button className="back_btn">
                <Link to="/RecvList" className="back">
                    ㅤ&lt; 뒤로가기
                </Link>
            </button>
        </div>
    );
}
