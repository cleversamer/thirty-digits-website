import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3KWXiHrA3n1WbBShJaiHBliioOkcJWwQ",
  authDomain: "thirty-digits.firebaseapp.com",
  projectId: "thirty-digits",
  storageBucket: "thirty-digits.appspot.com",
  messagingSenderId: "1061648090084",
  appId: "1:1061648090084:web:a6e45840e5ae01831c3df1",
  measurementId: "G-GJDQBKW2FS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
