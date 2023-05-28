import React from "react";
import "./firebase";
import { Route, Routes } from "react-router-dom";
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
