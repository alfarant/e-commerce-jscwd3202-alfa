import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCr7G-tyVqN9UwnfCjpCsdGQ62SYXew740",
    authDomain: "pwdjcwd2302-alfa.firebaseapp.com",
    projectId: "pwdjcwd2302-alfa",
    storageBucket: "pwdjcwd2302-alfa.appspot.com",
    messagingSenderId: "15693930808",
    appId: "1:15693930808:web:278bdafb5bbd3774d321cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);