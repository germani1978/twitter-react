import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCEK3e7GPpYj5VBSTurPSAFYDvPYYfP9JY",
  authDomain: "twitter-8bb2c.firebaseapp.com",
  databaseURL: "https://twitter-8bb2c-default-rtdb.firebaseio.com",
  projectId: "twitter-8bb2c",
  storageBucket: "twitter-8bb2c.appspot.com",
  messagingSenderId: "711948163091",
  appId: "1:711948163091:web:d7d462bb5495eadab087e6"
};


export default function Init(params) {
   const app = initializeApp(firebaseConfig);
   return app
}
// Initialize Firebase