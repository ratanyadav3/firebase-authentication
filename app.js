// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgxkjJW4Mbt_1DLo79Sa9nqKPwky2CKTM",
    authDomain: "fir-auth-82e58.firebaseapp.com",
    projectId: "fir-auth-82e58",
    storageBucket: "fir-auth-82e58.appspot.com",
    messagingSenderId: "210646827029",
    appId: "1:210646827029:web:8a8ce942b1de0e02878e1c",
    measurementId: "G-VPH17VKLZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Show Sign Up Form and Hide Sign In Form


// Sign Up Function
document.getElementById('sign-up').addEventListener('click', () => {
    document.querySelector('#Sign-in-form').style.display='none';
    document.querySelector('#Sign-up-form').style.display='block';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log('User signed up:', user);
        })
        .catch((error) => {
            console.error('Error signing up:', error);
        });
});

// Sign In Function
document.getElementById('sign-in').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('User signed in:', user);
        })
        .catch((error) => {
            console.error('Error signing in:', error);
        });
});

// Sign Out Function
document.getElementById('sign-out').addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('User signed out');
    }).catch((error) => {
        console.error('Error signing out:', error);
    });
});

// Listen for Auth State Changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('user-container').style.display = 'block';
        document.getElementById('user-email').textContent = user.email;
    } else {
        document.getElementById('login-container').style.display = 'block';
        document.getElementById('user-container').style.display = 'none';
    }
});
