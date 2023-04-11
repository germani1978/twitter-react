// 1 Para relacionar la base de datos con un usuario logueado en Firebase, puedes seguir estos pasos:

// Asegúrate de que el usuario se haya autenticado correctamente en Firebase y que tengas acceso a su información de usuario. Puedes verificar esto usando la siguiente línea de código en tu aplicación web:


// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // El usuario está autenticado y se puede acceder a su información de usuario
//     } else {
//       // No hay usuario autenticado
//     }
//   });

  
// 2 En tu base de datos de Firebase, asegúrate de que esté habilitada la regla de seguridad que permite que el usuario autenticado tenga acceso a los datos que necesitas.

// Por ejemplo, si tienes una base de datos que almacena información de usuarios y quieres que solo los usuarios autenticados puedan leer y escribir en ella, puedes agregar la siguiente regla de seguridad:

// {
//     "rules": {
//       "users": {
//         ".read": "auth != null",
//         ".write": "auth != null"
//       }
//     }
//   }
  

// 3 En tu aplicación web, utiliza la información de usuario para acceder a los datos de la base de datos. Puedes hacer esto usando la siguiente línea de código:

// const userId = firebase.auth().currentUser.uid;
// const userRef = firebase.database().ref('users/' + userId);

// Esto obtiene el ID del usuario autenticado y crea una referencia a los datos del usuario en la base de datos. Luego puedes usar esta referencia para leer y escribir datos en la base de datos.

// Por ejemplo, para escribir datos en la base de datos, puedes usar el siguiente código:

// userRef.set({
//     name: "Juan",
//     age: 25,
//     email: "juan@example.com"
//   });

// Y para leer datos de la base de datos, puedes usar el siguiente código:
// userRef.once('value').then(function(snapshot) {
//     const user = snapshot.val();
//     console.log(user);
//   });
  
//   Esto lee los datos del usuario desde la base de datos y los muestra en la consola.







// Para que el usuario solo tenga acceso a sus propios datos en la base de datos de Firebase, puedes utilizar el ID único del usuario en la ruta de la base de datos para crear una estructura de datos que solo esté disponible para el usuario.

// Por ejemplo, si estás almacenando información de usuarios en una base de datos, puedes crear una estructura de datos como esta:


// /users
//     /<user-id>
//         name: "Juan",
//         age: 25,
//         email: "juan@example.com"

// En este ejemplo, los datos de cada usuario se almacenan en una ruta que contiene su ID de usuario único. Para que el usuario solo tenga acceso a sus propios datos, debes asegurarte de que la regla de seguridad correspondiente solo permita el acceso a la ruta de su propio usuario.

// Para hacer esto, puedes usar la variable auth.uid en tus reglas de seguridad para acceder al ID único del usuario autenticado. Por ejemplo, puedes utilizar la siguiente regla de seguridad en tu base de datos:


// {
//   "rules": {
//     "users": {
//       "$user_id": {
//         ".read": "$user_id === auth.uid",
//         ".write": "$user_id === auth.uid"
//       }
//     }
//   }
// }

// En esta regla de seguridad, $user_id se refiere a la ruta de usuario única en la base de datos. La regla ".read" y ".write" solo permitirá el acceso a la ruta del usuario actual que esté autenticado, comparando su ID único con auth.uid.

// De esta manera, cuando un usuario autenticado intente leer o escribir en la base de datos, solo tendrá acceso a su propia ruta de usuario y no podrá acceder a la información de otros usuarios.





// import React, { useState } from "react";
// import firebase from "firebase/app";
// import "firebase/auth";

// const Auth = ({ setUser }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(({ user }) => setUser(user))
//       .catch((error) => console.log(error));
//   };

//   const handleSignUp = () => {
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(({ user }) => setUser(user))
//       .catch((error) => console.log(error));
//   };

//   const handleSignOut = () => {
//     firebase
//       .auth()
//       .signOut()
//       .then(() => setUser(null))
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div>
//       {user ? (
//         <button onClick={handleSignOut}>Sign Out</button>
//       ) : (
//         <>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={handleSignIn}>Sign In</button>
//           <button onClick={handleSignUp}>Sign Up</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Auth;


// import React, { useState, useEffect } from "react";
// import firebase from "firebase/app";
// import "firebase/database";

// const Notes = ({ user }) => {
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     if (user) {
//       const notesRef = firebase.database().ref(`notes/${user.uid}`);
//       notesRef.on("value", (snapshot) => {
//         const notesData = snapshot.val();
//         if (notesData) {
//           const notesList = Object.entries(notesData).map(([id, data]) => ({
//             id,
//             ...data,
//           }));
//           setNotes(notesList);
//         } else {
//           setNotes([]);
//         }
//       });
//     }
//   }, [user]);

//   const handleAddNote =
