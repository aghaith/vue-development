import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDs44taYNHDFGSrHwzVrDZsWp9WY0u4tOU",
    authDomain: "music-b3de3.firebaseapp.com",
    projectId: "music-b3de3",
    storageBucket: "music-b3de3.appspot.com",
    appId: "1:730283840518:web:47c8aabed6f66e6b325f87"
};

export default firebase.initializeApp(firebaseConfig);
