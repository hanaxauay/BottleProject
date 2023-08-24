import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LeftContainer() {
  const [emoticon, setEmoticon] = useState();

  const getEmoticon = function (id) {
    axios
      .get(`/getEmoticon/` + id)
      .then(function (response) {
        if (response.data.status === 'success') {
          setEmoticon(response.data.message);
        } else {
          console.error('emoticon request error');
        }
      })
      .catch(function (error) {
        alert('서버 내부 오류입니다.\n 관리자에게 문의하세요.');
      });
  };

  useEffect(function () {
    getEmoticon(0);
  }, []);

  return (
    <>
      <div className="left_container">
        <div
          className="logo"
          dangerouslySetInnerHTML={{ __html: emoticon }}
        ></div>
      </div>
    </>
  );
}
