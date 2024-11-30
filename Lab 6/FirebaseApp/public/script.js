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
// Handle Verified route Access

document.getElementById("verifiedRouteForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    // Get the current Firebase user
    const user = firebase.auth().currentUser;

    if (!user) {
      throw new Error("User not logged in.");
    }

    // Get the user's token
    const token = await user.getIdToken();

    // Make a request to the backend verified route
    const response = await fetch("http://localhost:3000/firebase/verified", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      document.getElementById("verifiedRouteMessage").innerText =
        "Access granted: " + JSON.stringify(data);
    } else {
      throw new Error("Access denied. Unauthorized.");
    }
  } catch (error) {
    document.getElementById("verifiedRouteMessage").innerText = error.message;
  }
});


    

  
  