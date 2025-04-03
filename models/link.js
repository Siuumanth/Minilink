const { db } = require("./firebase.js");
const crypto = require("crypto");

class Link {
  constructor(originalURL) {
    this.originalURL = originalURL;
    this.hashed = this.generateHash();
    this.clicks = 0;
  }

  generateHash() {
    return crypto.createHash("sha1").update(this.originalURL).digest("hex").slice(0, 4); // 8-char hash
  }

  toJSON() {
    return {
      originalURL: this.originalURL,
      hashed: this.hashed,
      clicks: this.clicks,
    };
  }
}
