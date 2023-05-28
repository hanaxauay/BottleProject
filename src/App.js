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
import Sendtxt from "./pages/SendText";
import Recvtxt from "./pages/Recvtxt";
import "./index.css";
import Integrated from "./pages/Integrated";
// 전체 를 불러오는 부분인데.
function App() {
  return (
    <>
      <Integrated />
    </>
  );
}

export default App;
