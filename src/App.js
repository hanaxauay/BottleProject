import React from "react";
import "./firebase";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Integrated from "./pages/Integrated";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import MMypage from "./pages/m-MyPage";
import MMain from "./pages/m-Main";
// 전체 를 불러오는 부분인데.
function App() {
  // 여기 안에 Main 을 지우고 희진이와 영신이가 만든 jsx 파일을 import 해서 main과 같은 형식으로 넣으면됩니다.
  return (
    <>
      <MMypage />
    </>
  );
}

export default App;
