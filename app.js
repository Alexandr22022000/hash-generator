const CryptoJS = require('crypto-js'),
    DATA = 'postgres://test00:0000@localhost:5432/secret-database-00',
    KEY = '0000';

const hash = CryptoJS.DES.encrypt(DATA, KEY).toString();

console.log(hash);