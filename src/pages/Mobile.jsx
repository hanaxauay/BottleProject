import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MMain from './m-Main';
import MmyPage from './m-MyPage';
import MSendBottle from './m-SendBottle';
export default function Mobile() {
  return (
    <>
      <Routes>
        {/* 여기 1번째 css 수정 필요 */}
        {/* 여기 영신이 수정 필요 local:3000/ 이 렌더링 되면 바로 Mmain 그러니까 한마디로 ->첫 시작 화면이 메인 이다. 루트 는  / 니까*/}
        <Route path="/" element={<MMain />} />

        {/* 여기 2번째 영신이 보셈 */}
        {/* 주소 요청을 어떻게하냐 ? Link to 를 걸어주면된다.  -> mMypage.jsx 로 가보시오. 가면 주석이있을것이다*/}
        {/* local:3000/mMypge 라는 주소 요청 -> MmyPage 랜더링 하는 방식이다. Mmypage command + 마우스 클릭 으로 이동해보거라 */}
        {/* 클릭해보니 여기도 html 깨짐 내가봤을때 여기 라우팅 하는곳에 className 이 중복되는것이 있을것으로 예상된다.*/}
        <Route path="/mMypage" element={<MmyPage />} />

        {/* 여기 3번째 여기까지 Mmypage.jsx 를 갔따가 sendBottle Link to 처리를 하고 왔으면? 여기서 주소 처리 다시한다.  */}
        <Route path="/msendBottle" element={<MSendBottle />} />

        {/* 나머지 밑에 쭉쭉 라우팅 하면됩니다용 */}
        <Route path="/" element={<MMain />} />
        <Route path="/" element={<MMain />} />
        <Route path="/" element={<MMain />} />
        <Route path="/" element={<MMain />} />
      </Routes>
    </>
  );
}
