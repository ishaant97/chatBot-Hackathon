import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDpyo6GaHRQ3hli6LJ8xWf4PpraDWeEaWI",
  authDomain: "chatbot-f82a4.firebaseapp.com",
  projectId: "chatbot-f82a4",
  storageBucket: "chatbot-f82a4.appspot.com",
  messagingSenderId: "838871043606",
  appId: "1:838871043606:web:0868fe6b66f3c1e977ef37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
