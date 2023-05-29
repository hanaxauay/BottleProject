import {Link} from "react-router-dom";



export default function Home() {
    return (
        <div className="homeComponent">
            <div className="category_box1">소개</div>
            <div className="text_main">~ 우리쪽지는 어쩌공 저쩌공 소개중 ~</div>
            <div className="category_box2">쪽지시작</div>
            <button className="login_btn">
                <Link to="/login" className="login">
                    1. 로그인하기
                </Link>
            </button>
            <button className="register_btn">
                <Link to="/register" className="register">
                    2. 회원가입하기
                </Link>
            </button>
        </div>
    );
}
