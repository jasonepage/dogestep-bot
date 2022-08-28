const firebase = require("../db/firebaseConfig")

const getQNA = (callback) => {
    firebase.ref(`qna`).once(
        'value',
        (snapshot) => {
            callback(snapshot.val());
        },
        (err) => {
            console.log('Read failled: ', err.name);
        }
    );
};


const addQNA = (guildId, card, user) => {
    firebase.ref(guildId).push().set({
        card,
        user,
    });
};

module.exports = { getQNA, addQNA };