import firebase from 'firebase/app';
require("firebase/messaging");

const messagingSenderId = '545926855062'
    , key = 'AIzaSyBr0Z2gOJh0XajxLDqmoQtziJ61MXjyaDA';

function subscribeTokenToTopic(token, topic) {
    fetch('https://iid.googleapis.com/iid/v1/' + token + '/rel/topics/' + topic, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'key=' + key
        })
    });
}

export const initializeFirebase = () => {
    firebase.initializeApp({
        messagingSenderId: messagingSenderId
    });
    const messaging = firebase.messaging();
    messaging.onMessage(function (payload) {
        //console.log( payload.notification.icon);
        var options = {
            body: payload.notification.body,
            icon: payload.notification.icon,
        };
        new Notification(payload.notification.title, options);
    });
    askForPermissioToReceiveNotifications();
}

export const askForPermissioToReceiveNotifications = async () => {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    subscribeTokenToTopic(token, 'all');
    return token;
}