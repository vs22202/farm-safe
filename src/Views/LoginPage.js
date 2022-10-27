import { initializeApp } from 'firebase/app'
import React ,{useEffect,useState} from 'react'

import { signInWithGoogle,signOutGoogle } from '../init-fcm'

function LoginPage() {
    const [usrDet, setUsrDet] = useState()

    async function init(){
        window.addEventListener('storage', () => {

        })
    }
useEffect(() => {
            async function init() {
              setUsrDet({
                name: await localStorage.getItem('name'),
                email: await localStorage.getItem('email'),
                photoUrl: await localStorage.getItem('photoUrl')
            })
            }
            init();
        }, [])

    return (
        <div>
            <h1>Welcome to My Awesome App</h1>
            <button onClick={e=>signInWithGoogle(e)}>signInWithGoogle</button>
            <button onClick={e=>signOutGoogle(e)}>signOutWithGoogle</button>
            <p>
                {usrDet && usrDet.name}
                {usrDet && usrDet.email}
                {/* <img src={usrDet.photoUrl}></img> */}
            </p>
        </div>
    )
}

export default LoginPage    