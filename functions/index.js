const functions = require("firebase-functions");
const express = require("express");

const admin = require("firebase-admin");

const app = express();

admin.initializeApp({
  credential: admin.credential.cert("./permissions.json"),
});

app.get("/hello-world", (req, res) => {
  return res.status(200).json({message: "Hello world"});
});

app.use(require("./routes/products"));

exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
