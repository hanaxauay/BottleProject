import React from "react";
import { Route, Routes } from "react-router-dom";
import Authfail from "./Authfail";
import Authsuc from "./Authsuc";
import Emailauth from "./Emailauth";
import Mypage from "./Mypage";
import Textpage from "./Textpage";
import SendText from "./SendText";
import RecvTxt from "./Recvtxt";
import Login from "./Login";
import Main from "./Main";
import Register from "./Register";

export default function Integrated() {
  return (
    <>
      {sessionStorage.getItem("id") ? (
        <Routes>
          {/* 로그인 성공시 mypage 으로 넘길예정. */}
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/textpage" element={<Textpage />} />
          <Route path="/emailauth" element={<Emailauth />} />
          <Route path="/authfail" element={<Authfail />} />
          <Route path="/authsuc" element={<Authsuc />} />
          <Route path="/sendtxt" element={<SendText />} />
          <Route path="/recvtxt" element={<RecvTxt />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/mypage" element={<Login />} />
          <Route path="/textpage" element={<Login />} />
          <Route path="/emailauth" element={<Login />} />
          <Route path="/authfail" element={<Login />} />
          <Route path="/authsuc" element={<Login />} />
          <Route path="/sendtxt" element={<Login />} />
          <Route path="/recvtxt" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}
