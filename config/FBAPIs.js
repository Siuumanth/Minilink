const { db } = require("./firebase.js");
const { Link } = require("../models/link.js");
const crypto = require("crypto");


async function addURL(link) {
  console.log(link.hashed);
  const docRef = db.collection("links").doc(link.hashed); // Set ID to hashed value
  
//This statement accesses the "links" collection in Firestore, creates or references a document using link.hashed as its unique ID, and stores the reference in docRef for further operations.
  const doc = await docRef.get();
  if (doc.exists) {
    console.log("URL already exists");
    return;
  }

  await docRef.set(link.toJSON());
  console.log("URL added with hashed ID:", link.hashed);
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

const newLink = new Link( "https://example.com");
addURL(newLink);


// Export functions
module.exports = {
  addURL,
  incrementClicks,
};