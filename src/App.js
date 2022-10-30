import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import HomePage from "./Views/HomePage";
import { requestPermission} from "./init-fcm";
import { getMessaging, onMessage } from "firebase/messaging";
import useInterval from "react-useinterval";
function App() {
    const [user, setUser] = useState({})
     
    function handleCallbackResponse(response){
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    }

    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }
 
    useEffect(() => {
       /*global google */
       const google = window.google;
        google.accounts.id.initialize({
            client_id: "655189467808-v8g544bo77ei9m4ukbs48296i1gajmls.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });
        
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size: "large"}
        );
        
        google.accounts.id.prompt()
    }, []);

    return (
        <div className="App"> 
            <div id = "signInDiv"></div>

            <div class = "signout">
            {
                Object.keys(user).length != 0 &&
                 <button style={{width: "235px", height:"39px", background: "white", border: "1px solid #E0E0E0",cursor: "pointer", borderRadius:"3px", color:"#007FFF" }} onClick={ (e) => handleSignOut(e)}><b>Sign Out</b></button>
            }
           </div>
            { user&&
             
              <div>
                  
                  <img src={user.picture}></img>
                  
                  <h3> {user.name}</h3>
                </div>
             
             }
        </div>
    );

    
    
   
}
export default App;

