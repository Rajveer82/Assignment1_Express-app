// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZIEY2qp2zoGcvyc1gf0wSF_teMby7Wp0",
    authDomain: "fir-app-8e0ca.firebaseapp.com",
    databaseURL: "https://fir-app-8e0ca-default-rtdb.firebaseapp.com",
    projectId: "fir-app-8e0ca",
    storageBucket: "fir-app-8e0ca.firebasestorage.app",
    messagingSenderId: "1020285030807",
    appId: "1:1020285030807:web:925b290a4630355380b4d2",
    measurementId: "G-CJVC88459J"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Handle Sign-In
  document.getElementById("signinForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("signinEmail").value;
    const password = document.getElementById("signinPassword").value;
  
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const idToken = await userCredential.user.getIdToken();
      localStorage.setItem("authToken", idToken);
      window.location.href = "welcome.html"; // Redirect to the welcome page
    } catch (error) {
      document.getElementById("signinMessage").innerText = error.message;
    }
  });
  
  // Handle Sign-Up
  document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
  
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      document.getElementById("signupMessage").innerText = "Account created successfully!";
    } catch (error) {
      document.getElementById("signupMessage").innerText = error.message;
    }
  });
  