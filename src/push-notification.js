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
/* 



header 
key=AAAAfxvGuZY:APA91bGNG5hJ_i9JmucPezuh5mn6KyjWebIYKB218bMTH3UUv0T8zvXVF-sL5sVEsmuAsIVCm2JHmNF86WSxQJmEMr69LKsId8giJE5bABd_XNnrzwvVCjEgk_W9MNelLctbLsMMEYPDT3qkoIpEEewXKWYw5073hA
content  =application/json

body


{
    "notification": {
        "title": "dsfasd",
        "body": "sadasd",
        "click_action": "http://localhost:3000/",
        "icon": "http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png"
    },
    "to": "/topics/all"
}

*/