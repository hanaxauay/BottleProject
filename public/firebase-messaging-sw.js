import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDWHYb1YSHqJRvWqyyGr8mrTrPWsBjsrNA",
  authDomain: "sending-54ad7.firebaseapp.com",
  databaseURL: "https://Sending.firebaseio.com",
  projectId: "sending-54ad7",
  storageBucket: "sending-54ad7.appspot.com",
  messagingSenderId: "742845193899",
  appId: "1:742845193899:web:012fc3d9eacfb4b9be21ee",
  measurementId: "G-06C3RDYJHR",
});

const messaging = getMessaging(firebaseApp);
