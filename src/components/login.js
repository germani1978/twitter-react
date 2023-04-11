import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { getDatabase, ref, set, get, child } from "firebase/database"
import Init from "./init";

let id = ""

export function Login(params) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function guardar_tweets(params) {

        let app = Init()
        const db = getDatabase(app);

        //copiando
        set(ref(db, 'users/' + id + '/tweets/'), {
            tweet: "EL perro de lola otra",
        })
    }


    function leer_tweets(params) {

        const dbRef = ref(getDatabase());

        //leyendo
        get(child(dbRef, `users/${id}`)).then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });

    }
    

    function Logearse(params) {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                id = user.uid
                console.log('Logeado');
                guardar_tweets()
                leer_tweets()
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return <div className="login-div">
        <p className="name">Email</p>
        <input className="login-email" type="text" onChange={e => setEmail(e.target.value)} />
        <p className="password">Password</p>
        <input className="login-password" onChange={e => setPassword(e.target.value)} type="text" />
        <button className="login-button" onClick={() => Logearse()}>Send</button>
        {/* <a href="#" className="sub">no tiene una cuenta</a> */}
    </div>
}