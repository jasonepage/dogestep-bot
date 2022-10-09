const { ChildProcess } = require("child_process");
const { firestore } = require("firebase-admin");

const db = require("./firebaseConfig");

// Use to add any amount of coins to a user.
const addCoins = (userId, amount) => {
    db.collection("users").doc(userId).set({
        "Coins": firestore.FieldValue.increment(amount)
        },
        { merge: true });
};

// Use to give any amount of a single card to a user. (doesn't work XD)
const addCard = (userId, card, amount) => {
    db.collection("users").doc(userId).set({
        "userID": userId, // change this to their username, not their userId?
        "Cards": {
            card: amount,
            },
        },
        { merge: true });

    console.log(db.collection("users").doc(userId).get())
};

// Use to find the inventory of a user.
const getUserInventory = async (userId) => {
    const mySnapshot = db.collection("users").doc(userId)
    await mySnapshot.get().then((doc) => {
        if (doc.exists) {
            let inventory = JSON.stringify(doc.data())
            console.log(typeof inventory, inventory) // console returns: "string {"Coins":1020}"
            return inventory; // discord bot prints: "undefined"
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    });
};

module.exports = { addCard, addCoins, getUserInventory };

// users/userId/inventory
// users/1011847000788041758/Lego-Mint/