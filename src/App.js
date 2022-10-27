import React, { useEffect } from "react";
import HomePage from "./Views/HomePage";
import { requestPermission } from "./init-fcm";
import { getMessaging, onMessage } from "firebase/messaging";
import LoginPage from "./Views/LoginPage";
function App() {
    // useEffect(() => {
    //     const messaging = getMessaging();
    //     onMessage(messaging, (payload) => {
    //         console.log('Message received. ', payload);
    //     });
    // }, [])
    return (
        <div className="App">
            <LoginPage />
            {/* <button onClick={requestPermission} >
                Click to receive notifications
            </button> */}
        </div>
    );
}
export default App;