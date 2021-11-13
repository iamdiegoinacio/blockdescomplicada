import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.API_ID
};


// const firebaseConfig = {
//   apiKey: "AIzaSyCFg7wAncE3EickpZlWG8dgD90x1rJK6Ic",
//   authDomain: "blockchaindescomplicada.firebaseapp.com",
//   projectId: "blockchaindescomplicada",
//   storageBucket: "blockchaindescomplicada.appspot.com",
//   messagingSenderId: "31204662979",
//   appId: "1:31204662979:web:f14ff438d2eeb2737d8c76"
// };

if(!firebase.apps.length){
  const app = firebase.initializeApp(firebaseConfig);
}

export default firebase;