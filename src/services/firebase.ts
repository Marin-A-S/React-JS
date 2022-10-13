import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC9SUXn1KvZzwanLjDyLeRQgffQoA_3yH0",
  authDomain: "react-js-f045f.firebaseapp.com",
  databaseURL: "https://react-js-f045f-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "react-js-f045f",
  storageBucket: "react-js-f045f.appspot.com",
  messagingSenderId: "255399788123",
  appId: "1:255399788123:web:be0740e567ab081823097e"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(firebaseAuth, email, password);

export const logOut = async () => await signOut(firebaseAuth);

export const db = getDatabase(app);

export const getChats = () => ref(db, 'chats');
