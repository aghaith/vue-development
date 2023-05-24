import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDs44taYNHDFGSrHwzVrDZsWp9WY0u4tOU",
    authDomain: "music-b3de3.firebaseapp.com",
    projectId: "music-b3de3",
    storageBucket: "music-b3de3.appspot.com",
    appId: "1:730283840518:web:47c8aabed6f66e6b325f87"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
    console.log(`Firebase persistence error ${error.code}`)
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export { 
    auth, 
    db, 
    usersCollection, 
    songsCollection,
    commentsCollection,
    storage 
}