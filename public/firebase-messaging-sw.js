importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDWHYb1YSHqJRvWqyyGr8mrTrPWsBjsrNA",
  authDomain: "sending-54ad7.firebaseapp.com",
  databaseURL: "https://Sending.firebaseio.com",
  projectId: "sending-54ad7",
  storageBucket: "sending-54ad7.appspot.com",
  messagingSenderId: "742845193899",
  appId: "1:742845193899:web:012fc3d9eacfb4b9be21ee",
  measurementId: "G-06C3RDYJHR",
});

const messaging = firebase.messaging();

console.log("service worker on");
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  var title = payload.notification.title;
  var options = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };
  var notification = new Notification(title,options);
});
