import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAypmrJXU8c3Slv8urgqmNGe_k2Fq-I3Hc",
    authDomain: "todoist-92854.firebaseapp.com",
    databaseURL: "https://todoist-92854.firebaseio.com",
    projectId: "todoist-92854",
    storageBucket: "todoist-92854.appspot.com",
    messagingSenderId: "1002792701540",
    appId: "1:1002792701540:web:48061e45869b20a07cd971"
});

export { firebaseConfig as firebase };