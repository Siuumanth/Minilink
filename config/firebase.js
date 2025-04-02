const admin = require("firebase-admin");

// Load Firebase service account key
const serviceAccount = require("./path/to/your-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
