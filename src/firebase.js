import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { useEffect } from "react";

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
const messaging = getMessaging();

getToken(messaging, {
  vapidKey:
    "BPnPG-BOQrhi94alHAm2U-kuiqoaYDFIBiU9VV1XQ6QCuN-Te9p7UcGW691e1cSGmy_tDsRGZycO2G7d1WgSfwI",
})
  .then((currentToken) => {
    if (currentToken) {
      console.log("성공");
      console.log(currentToken);
    } else {
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

console.log("gd");
