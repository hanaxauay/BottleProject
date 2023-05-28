import React from "react";
import {Link} from "react-router-dom";

export default function RightContainer() {
    return (
        <>
            <div className="right_container">
                <div className="text_box1">
                    <div className="text_box2">
                        <div className="text_box3">
                            <div className="category_box1">소개</div>
                            <div className="text_main">~ 우리쪽지는 어쩌공 저쩌공 소개중 ~</div>
                            <div className="category_box2">쪽지시작</div>
                            <button className="login_btn">
                                <Link to="/login" className="login">
                                    ㅤ 1. 로그인하기
                                </Link>
                            </button>
                            <button className="register_btn">
                                <Link to="/register" className="register">
                                    ㅤ 2. 회원가입하기
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
