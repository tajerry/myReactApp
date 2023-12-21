import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import {getDatabase, ref} from "firebase/database";

const firebaseConfig = {

    apiKey: "AIzaSyADadO1XVgSVtng6p-2X3KGzBe6Z23Rm5k",

    authDomain: "jerry-react-app.firebaseapp.com",

    databaseURL: "https://jerry-react-app-default-rtdb.firebaseio.com",

    projectId: "jerry-react-app",

    storageBucket: "jerry-react-app.appspot.com",

    messagingSenderId: "533987777099",

    appId: "1:533987777099:web:a24387600dc2e7c7174bce",

    measurementId: "G-79VD7NP6ER"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireBaseAuth = getAuth(app);

export const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(fireBaseAuth, email, password);
}

export const signIn = async (email, password) => {
    await signInWithEmailAndPassword(fireBaseAuth, email, password);
}
export const loginOut = async () => {
    await signOut(fireBaseAuth);
}
const db = getDatabase(app);
export const postRef = ref(db, 'posts');
export const chatRef = ref(db, 'chats');
export const userRef = ref (db, 'users');
export const getPostById = (postId) => ref(db, `posts/${postId}`);
export const getChatById = (chatId) => ref(db, `chats/${chatId}`);
