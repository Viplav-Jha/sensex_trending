import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDB-hPGqTPIZuVulQcwUPgaWF4MGxcYN4Q",
    authDomain: "sensex-a74ab.firebaseapp.com",
    projectId: "sensex-a74ab",
    storageBucket: "sensex-a74ab.appspot.com",
    messagingSenderId: "341088659401",
    appId: "1:341088659401:web:4cf31386f4d666cab8ea18",
    measurementId: "G-PLE377BKJ5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
