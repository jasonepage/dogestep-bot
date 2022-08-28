const admin = require("firebase-admin");

const serviceAccount = require("./dogestep-bot-firebase-adminsdk-vyd7m-80ea2f5575.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dogestep-bot-default-rtdb.firebaseio.com"
});

const db = admin.database();

module.exports = db;