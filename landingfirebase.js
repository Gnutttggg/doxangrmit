 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCqpme0ulRw4eHc6LSW64GKlXhkPKKuRH4",
   authDomain: "notii-8e38a.firebaseapp.com",
   projectId: "notii-8e38a",
   storageBucket: "notii-8e38a.appspot.com",
   messagingSenderId: "909617956814",
   appId: "1:909617956814:web:f9c4440ee70f907b8d0d9f",
   measurementId: "G-B61BLH0DMK"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);