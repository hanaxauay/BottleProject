import React from "react";
import logo from "./logo.svg";
import "./firebase";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
// 실행부분

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />} />
        {/* 로그인 성공시 mypage 으로 넘길예정. */}
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </>
  );
}

export default App;
