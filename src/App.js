import React from "react";
import "./firebase";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Textpage from "./pages/Textpage";
import Emailauth from "./pages/Emailauth";
import Authfail from "./pages/Authfail";
import Authsuc from "./pages/Authsuc";
import "./index.css";
// 실행부분
// 전체 를 불러오는 부분인데.
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />} />
        {/* 로그인 성공시 mypage 으로 넘길예정. */}
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/textpage" element={<Textpage />} />
        <Route path="/emailauth" element={<Emailauth />} />
        <Route path="/authfail" element={<Authfail />} /> 
        <Route path="/authsuc" element={<Authsuc />} /> 
      </Routes>
    </>
  );
}

export default App;
