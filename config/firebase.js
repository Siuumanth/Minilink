require("dotenv").config();

const admin = require("firebase-admin");

// Parse JSON from .env
const firebaseConfig = JSON.parse(process.env.FB_CREDS.toString());
console.log(firebaseConfig)
// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
});

console.log("Firebase initialized successfully!");

const db = admin.firestore(); // <-- Ensure this is included

module.exports = { db };