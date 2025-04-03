const { db } = require("./firebase.js");
const { Link } = require("../models/link.js");
const crypto = require("crypto");


async function addURL(link) {
  const doc = db.collection("links").doc(link.hashed);

  if (await doc.get().exists) {
    console.log("URL already exists");
    return;
  }
  const docRef = db.collection("links").doc();
  await docRef.set(link.toJSON());
  console.log("URL added ", docRef.id)
}



async function incrementClicks(hashed) {
  const docRef = db.collection("links").doc(hashed);
  const doc = await docRef.get();

  if (!doc.exists) {
    console.log("No such document!");
    return;
  }

  const data = doc.data();
  const newClicks = (data.clicks || 0) + 1;

  await docRef.update({ clicks: newClicks });
  console.log("Clicks updated for", hashed, "New count:", newClicks);
}

const newLink = new Link("syedboy", "https://example.com");
addURL(newLink);


// Export functions
module.exports = {
  addURL,
  incrementClicks,
};