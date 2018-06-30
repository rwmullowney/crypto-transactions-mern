const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cryptotransactions"
);

const userSeed = [
  {
    userName: "user string 1",
    userEmail: "user email 1",
    wallet: "wallet 1"
  },
  {
    userName: "user string 2",
    userEmail: "user email 2",
    wallet: "wallet 2"
  },
  {
    userName: "user string 3",
    userEmail: "user email 3",
    wallet: "wallet 3"
  },
  {
    userName: "user string 4",
    userEmail: "user email 4",
    wallet: "wallet 4"
  },
  {
    userName: "user string 5",
    userEmail: "user email 5",
    wallet: "wallet 5"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
