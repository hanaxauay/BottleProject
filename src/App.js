import React from "react";
import logo from "./logo.svg";
import "./firebase";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Main from "./pages/Main";
// 실행부분

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* 로그인 성공시 Main 으로 넘길예정. */}
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}
export default App;
