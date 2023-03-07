// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVMm0GNji4MOr1F2NCdpYVRg7yMA4Z_DQ",
  authDomain: "civicly-1a677.firebaseapp.com",
  projectId: "civicly-1a677",
  storageBucket: "civicly-1a677.appspot.com",
  messagingSenderId: "353857794300",
  appId: "1:353857794300:web:5345920a4bae54f1bea779",
  measurementId: "G-4H82L9M45J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = (getStorage(app));
const analytics = getAnalytics(app);

export default storage;

