import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOUHMOgDNrTcdxe9WHn4j25x_Bz1eLUCA",
  authDomain: "netflixclone-1150e.firebaseapp.com",
  projectId: "netflixclone-1150e",
  storageBucket: "netflixclone-1150e.appspot.com",
  messagingSenderId: "410304092916",
  appId: "1:410304092916:web:de359030226b6f0f35dca1",
  measurementId: "G-6VMVRG3PE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();