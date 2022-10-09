const admin = require("firebase-admin");
const serviceAccount = require("./dogestep-bot-firebase-adminsdk-vyd7m-d677a8fe5a.json"); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dogestep-bot-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

module.exports = db;