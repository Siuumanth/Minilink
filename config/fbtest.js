const db = require("./firebase");

async function addURL(url) {
  const docRef = db.collection("urls").doc();
  await docRef.set({ original: url, createdAt: new Date() });
  console.log("URL added:", docRef.id);
}

addURL("https://example.com");
