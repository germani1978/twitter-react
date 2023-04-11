import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export function Register(params) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function registrarse(params) {

        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then( userCredential => {
                const user = userCredential.user;
                console.log("creado")
            })
            .catch( (e) => {
                console.log(e.message);
            })
    }

    return <div className="login-div">
        <p className="name">Email</p>
        <input  className="login-email" type="text" onChange={e => setEmail(e.target.value)}/>
        <p className="password">Password</p>
        <input  className="login-password" onChange={e => setPassword(e.target.value)} type="text"/>
        <button className="login-button" onClick={() => registrarse()}>Send</button>
        {/* <a href="" className="sub">ya tiene una cuenta</a> */}
    </div>
}