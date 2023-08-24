import React from 'react';
import './firebase';
import { Route, Routes } from 'react-router-dom';
// import './index.css';
// import Main from './pages/Main';

//import MobileMain from './pages/MobileMain';//<MobileMain />
//import MLogin  from './pages/m-Login';
import MMain from './pages/m-Main';
import Mobile from './pages/Mobile';
// import mLogin from './pages/m-Login';
// import MLogin from './pages/m-Login';
// import MmyPage from './pages/m-MyPage';
// 전체 를 불러오는 부분인데.
function App() {
  // 여기 안에 Main 을 지우고 희진이와 영신이가 만든 jsx 파일을 import 해서 main과 같은 형식으로 넣으면됩니다.
  return (
    <>
      {/* 여기 커맨드 마우스 클릭해서 들어가보셈 MMobile 1번째 순서. */}
      <Mobile />
    </>
  );
}

export default App;
