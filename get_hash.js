const crypto = require('crypto');
const fs = require('fs');

const fileBuffer = fs.readFileSync('i18n.js');
const hashSum = crypto.createHash('sha384');
hashSum.update(fileBuffer);
const base64Hash = hashSum.digest('base64');
console.log(`sha384-${base64Hash}`);
