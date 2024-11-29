const admin = require("firebase-admin");

// Firebase Admin SDK service account credentials
const serviceAccount = require("../fir-app-8e0ca-firebase-adminsdk-ck88g-e3f0a041d1.json"); // Update the path to your service account file

// Initialize Firebase Admin SDK
if (!admin.apps.length) { // Prevent reinitialization
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fir-app-8e0ca-default-rtdb.firebaseio.com", // Replace with your Firebase Realtime Database URL
  });
}

// Export the initialized admin object
module.exports = admin;
