import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAsucWQxX5KXeUnZ88PArBGq_WpochctE0",
    authDomain: "vote-a7806.firebaseapp.com",
    projectId: "vote-a7806",
    storageBucket: "vote-a7806.appspot.com",
    messagingSenderId: "815963021713",
    appId: "1:815963021713:web:18853f23701279d42afa30"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();