import React, {useRef} from "react";
import "../style/register.scss";
import {Link} from "react-router-dom";
import {BiCheck} from "react-icons/bi";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faL} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import crypto, {HmacSHA256, SHA256} from "crypto-js";
import LeftContainer from "../components/LeftContainer";

export default function Register() {
    // 회원가입 useState 지정.

    const [email, setEmail] = useState("확인안됨");
    const [password, setPassword] = useState();
    const [check, setCheck] = useState();
    // querySelector 지정.

    const mailInput = useRef();
    const passwordInput = useRef();
    const confirmPasswordInput = useRef();

    // password sha256 암호화.
    const onChangePwd = (e) => {
        setPassword(SHA256(e.target.value, process.env.REACT_APP_AES_SECRET_PASSWORD).toString());
    };

    // email aes128 암호화.
    const aes128Encode = (secretKey, Iv, data) => {
        const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(secretKey), {
            iv: CryptoJS.enc.Utf8.parse(Iv), // [Enter IV (Optional) 지정 방식]
            padding: CryptoJS.pad.Pkcs7, mode: CryptoJS.mode.CBC, // [cbc 모드 선택]
        });
        return cipher.toString();
    };

    // email 형식 올바르지않으면 return
    const checkEmail = () => {
        const emailValue = mailInput.current.value;
        if (!/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(emailValue)) {
            alert("이메일 형식이 올바르지 않습니다.");
            return false;
        }
        return true;
    };

    // 비밀번호 8자리 이상 , 비밀번호 재입력칸과 동일 하지 않으면 return
    const checkPassword = () => {
        if (passwordInput.current.value.length < 8) {
            alert("비밀번호는 8글자 이상이어야 합니다.");
            return false;
        }
        if (passwordInput.current.value !== confirmPasswordInput.current.value) {
            alert("비밀번호가 일치하지 않습니다.");
            return false;
        }
        return true;
    };

    // email 중복체크 axios 통신.
    const checkDuplicationEmail = async () => {
        if (!checkEmail()) {
            mailInput.current.value = "";
            return;
        }
        try {
            var response = await axios.post("/checkEmail", null, {
                params: {
                    email: aes128Encode(process.env.REACT_APP_AES_SECRET_KEY, process.env.REACT_APP_AES_SECRET_IV, mailInput.current.value)
                }
            });
            if (response.data.status === "success") {
                setCheck("확인");
                alert(response.data.message);
            } else {
                setCheck("확인안됨");
                alert(response.data.message);
                mailInput.current.value = "";
            }
        } catch(error) {
            alert("서버 내부 오류입니다.\n 관리자에게 문의하세요.");
        }
    };

    // 회원가입 버튼 눌렸을때 axios 통신.
    const register = async () => {
        if (!mailInput.current.value || !passwordInput.current.value || !confirmPasswordInput.current.value) {
            return alert("필수 항목을 입력해주세요!");
        }
        if (!checkEmail()) {
            mailInput.current.value = "";
            return;
        }
        if (!checkPassword()) {
            passwordInput.current.value = "";
            confirmPasswordInput.current.value = "";
            return;
        }
        if (check !== "확인") {
            alert("이메일 중복 체크를 확인해주세요.");
            return;
        }
        try {
            var response = await axios.post("/join", null, {
                params : {
                    email: aes128Encode(process.env.REACT_APP_AES_SECRET_KEY, process.env.REACT_APP_AES_SECRET_IV, mailInput.current.value),
                    password: password
                }
            });
            if (response.data.status === "success") {
                alert(response.data.message);
                //로그인 컴포포넌트로 리다이렉트
            } else if (response.data.status === "fail") {
                alert(response.data.message);
            }
        } catch(error) {
            alert("서버 내부 오류입니다.\n 관리자에게 문의하세요.");
        }
    };

    return (
        <div className="register_component">
            <div className="email">이메일</div>
            <div className="email_box1">
                <div className="email_box2">
                    <div className="email_bar1"></div>
                    <div className="email_bar2"></div>
                    <div className="email_input">
                        <input type="email" ref={mailInput}/>
                    </div>
                </div>
            </div>
            <div className="eclick_box1">
                <div className="eclick_box2">
                    <div className="eclick_bar1"></div>
                    <div className="eclick_bar2"></div>
                    <button className="clickemail_btn" onClick={checkDuplicationEmail}>
                            <span className="icon-wrapper">
                                <BiCheck size={30}/>
                            </span>
                    </button>
                </div>
            </div>
            <div className="password">비밀번호</div>
            <div className="password_box1">
                <div className="password_box2">
                    <div className="password_bar1"></div>
                    <div className="password_bar2"></div>
                    <div className="password_input">
                        <input type="password" ref={passwordInput} onChange={onChangePwd}/>
                    </div>
                </div>
            </div>
            <div className="repassword">비밀번호재입력</div>
            <div className="repassword_box1">
                <div className="repassword_box2">
                    <div className="repassword_bar1"></div>
                    <div className="repassword_bar2"></div>
                    <div className="repassword_input">
                        <input type="password" ref={confirmPasswordInput}/>
                    </div>
                </div>
            </div>

            <div className="sign_box1">
                <div className="sign_box2"></div>
                <div className="sign_bar1"></div>
                <div className="sign_bar2"></div>
                <button className="signup_btn" onClick={register}>
                    가입하기
                </button>
            </div>


            <button className="login_link">
                <Link to="/login" className="login">
                    ㅤ | 로그인하기 |
                </Link>
            </button>
        </div>
    );
}
