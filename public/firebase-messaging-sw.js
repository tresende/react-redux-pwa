// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');


var config = {
  apiKey: "AIzaSyAfVKVgqBd7GNtbraamSk8-W2gI5n7oTEo",
  authDomain: "react-redux-pwa-9ff61.firebaseapp.com",
  databaseURL: "https://react-redux-pwa-9ff61.firebaseio.com",
  projectId: "react-redux-pwa-9ff61",
  storageBucket: "react-redux-pwa-9ff61.appspot.com",
  messagingSenderId: "545926855062"
};
firebase.initializeApp(config);
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

self.addEventListener('push', function (event) {
  var eventData = event.data.text();
  var obj = JSON.parse(eventData); //Parse the received JSON object.
  const options = {
    icon: obj.notification.icon,
    body: obj.notification.body,
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    tag: 'vibration-sample'
  };

  event.waitUntil(self.registration.showNotification(obj.notification.title, options));

  alert('Notification!!');


  
  // var title = 'Yay a message.';
  // var body = 'We have received a push message.';
  // var icon = '/images/icon-192x192.png';
  // var tag = 'simple-push-demo-notification-tag';
  // var data = {
  //   doge: {
  //     wow: 'such amaze notification data'
  //   }
  // };

  // event.waitUntil(
  //   self.registration.showNotification(title, {
  //     body: body,
  //     icon: icon,
  //     tag: tag,
  //     data: data
  //   }).then(function (x, err) {
  //     console.log(err);
  //   })
  // );
});