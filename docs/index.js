< script type = "module" >
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJU5MNcmZcVz9l2ohwOt08_25W6GKsMds",
    authDomain: "daniil-lebedev-site.firebaseapp.com",
    projectId: "daniil-lebedev-site",
    storageBucket: "daniil-lebedev-site.appspot.com",
    messagingSenderId: "889230027033",
    appId: "1:889230027033:web:8f241d75fff48f2ca8bd88",
    measurementId: "G-TK74P81LNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); <
/script>