const { ObjectId } = require("mongodb");

const { getDb } = require("../utils/database");

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }

  static findById(userId) {
    const db = getDb();
    return db.collection("users").find({ _id: new ObjectId(userId) });
  }
}

module.exports = User;
