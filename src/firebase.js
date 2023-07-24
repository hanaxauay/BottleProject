import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDWHYb1YSHqJRvWqyyGr8mrTrPWsBjsrNA",
  authDomain: "sending-54ad7.firebaseapp.com",
  projectId: "sending-54ad7",
  storageBucket: "sending-54ad7.appspot.com",
  messagingSenderId: "742845193899",
  appId: "1:742845193899:web:012fc3d9eacfb4b9be21ee",
  measurementId: "G-06C3RDYJHR",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

getToken(messaging, {
  vapidKey:
    "BPnPG-BOQrhi94alHAm2U-kuiqoaYDFIBiU9VV1XQ6QCuN-Te9p7UcGW691e1cSGmy_tDsRGZycO2G7d1WgSfwI",
})
  .then((currentToken) => {
    if (currentToken) {
      console.log(currentToken);
    } else {
      // no permisson
      if (!("Notification" in window)) {
        console.error("이 브라우저는 푸시 알림을 지원하지 않습니다.");
        return;
      }
      if (Notification.permission !== "granted") {
        // 푸시 알림 권한이 거부되었거나 허용되지 않은 상태이면 권한을 요청합니다.
        Notification.requestPermission().then(function (permission) {
          if (permission === "granted") {
            console.log("푸시 알림 권한이 허용되었습니다.");
          } else {
            console.warn("푸시 알림 권한이 거부되었습니다.");
          }
        });
      }
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

onMessage(messaging, (payload) => {
  console.log(alert(payload));
  console.log("Message received. 왔냐 이씨벌럼아  ", payload);
  // ...
});

export default messaging;
