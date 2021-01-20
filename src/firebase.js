import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
    apiKey: "AIzaSyB4g1cL6cAsje1ufQhTHWviZjN3HtAl4UU",
    authDomain: "vuegram-78234.firebaseapp.com",
    projectId: "vuegram-78234",
    storageBucket: "vuegram-78234.appspot.com",
    messagingSenderId: "724994653241",
    appId: "1:724994653241:web:61e4720c83add75c79a1e8",
    // measurementId: "G-G1038FVT5W"
}
firebase.initializeApp(firebaseConfig)


// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}