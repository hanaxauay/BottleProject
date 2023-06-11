import React, {useEffect, useRef, useState} from "react";
import "../style/changePassword.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import {SHA256} from "crypto-js";

export default function ChgPassword() {
    const oldPasswordInput = useRef();
    const newPasswordInput = useRef();
    const newPasswordInput2 = useRef();

    const changePassword = async function() {
        if(oldPasswordInput.current.value === "") {
            alert("현재 비밀번호를 입력해 주세요");
            return false;
        }

        if (newPasswordInput.current.value !== newPasswordInput2.current.value) {
            alert("비밀번호와 비밀번호 확인 값이 일치하지 않습니다.");
            return false;
        }

        try {
            var response = await axios.post(`/user/changePassword/`, null, {
                params: {
                    auth: sessionStorage.getItem("auth"),
                    oldPassword: SHA256(oldPasswordInput.current.value),
                    newPassword: SHA256(newPasswordInput.current.value)
                },
            });
            if (response.data.status === "success") {
                sessionStorage.setItem("auth", response.data.auth);
                alert(response.data.message);
                window.location.replace(process.env.REACT_APP_FRONT_SERVER+"/login");
            } else {
                alert(response.data.message);
            }
        } catch(error) {
            alert("서버 내부 오류입니다.\n 관리자에게 문의하세요.");
        }
    }

    return (
        <div className="changePassword_content">
            <div className="password">현재 비밀번호</div>
            <div className="passbox1">
                <div className="passbox2">
                    <div className="passbar1"></div>
                    <div className="passbar2"></div>
                    <div className="password_input">
                        <input type="password" ref={oldPasswordInput} />
                    </div>
                </div>
            </div>

            <div className="newPassword">새 비밀번호</div>
            <div className="newPasswordbox1">
                <div className="newPasswordbox2">
                    <div className="newPasswordbar1"></div>
                    <div className="newPasswordbar2"></div>
                    <div className="newPassword_input">
                        <input type="password" ref={newPasswordInput} />
                    </div>
                </div>
            </div>

            <div className="newPassword2">새 비밀번호 확인</div>
            <div className="newPassword2box1">
                <div className="newPassword2box2">
                    <div className="newPassword2bar1"></div>
                    <div className="newPassword2bar2"></div>
                    <div className="newPassword2_input">
                        <input type="password" ref={newPasswordInput2} />
                    </div>
                </div>
            </div>

            <div className="btn_group">
                <button className="mypage_btn">
                    <Link to="/mypage" className="btnMypage">
                        | 뒤로가기 |
                    </Link>
                </button>
                <button className="chgpassword_btn" onClick={changePassword}>
                    <div className="btnChgpassword">| 비밀번호 변경 |</div>
                </button>
            </div>
        </div>
    );
}
