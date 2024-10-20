const crypto = require("crypto")

function generateSalt(length){
    return crypto.randomBytes(Math.ceil(length/2))
    .toString('hex')
    .slice(0, length);
}

const salt = generateSalt(10);

module.exports = { salt };