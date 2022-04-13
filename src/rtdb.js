import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC43HHAX7Sd8F-Zb__fS_Bz6yuGERCLvmY", // route requests to your Firebase project
    authDomain: "chatapp-vue-8cfdd.firebaseapp.com", // host name
    databaseURL: "https://chatapp-vue-8cfdd-default-rtdb.asia-southeast1.firebasedatabase.app", //
    projectId: "chatapp-vue-8cfdd", //
    storageBucket: "chatapp-vue-8cfdd.appspot.com", // storage
    messagingSenderId: "157795919550", // push notification
    appId: "1:157795919550:web:57f9a34a83838c10ace0ef", // 
    measurementId: "G-CV69ZVP8M0" // if analytics enabled 
}

const db = firebase.initializeApp(firebaseConfig)

export default db