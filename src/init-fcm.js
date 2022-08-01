import { getMessaging, getToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";
export function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            const messaging = getMessaging();
            getToken(messaging, {vapidKey:process.env.REACT_APP_VAPID_KEY}).then((currentToken) => {
                if (currentToken) {
                    console.log(currentToken)
                    fetch('http://localhost:5000/usrtkn', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            token: currentToken,
                            userid: 'test',
                        })
                    }).then(res => res.json() ).then(data => { console.log(data) })
                } else {
                    // Show permission request UI
                    console.log('No registration token available. Request permission to generate one.');
                    // ...
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                // ...
            });
        }
    })
}
export const fcminit = () => {
    initializeApp({
        apiKey: "AIzaSyC7-ZMp-ywmGmTMI1jjRrQDTZaspiI1Rrk",
        authDomain: "farm-life-d1c77.firebaseapp.com",
        projectId: "farm-life-d1c77",
        storageBucket: "farm-life-d1c77.appspot.com",
        messagingSenderId: "51901782398",
        appId: "1:51901782398:web:4e476c39b6018404a7fb2f",
        measurementId: "G-TP7ZGR6B26"
    })

}
