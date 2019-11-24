'use strict'

const uuidv4 = require('uuid/v4');
const os = require('os');
const fs = require("fs");
const path = require("path");
const dateFormat = require('dateformat');

const USER_HOME = os.homedir();
const BASE_DIR = path.join(USER_HOME, "webcam");

const doRegister = function doRegister() {
    let webcamid = uuidv4();
    if (!fs.existsSync(BASE_DIR)) {
        fs.mkdirSync(BASE_DIR);
    }
    fs.mkdirSync(path.join(BASE_DIR, webcamid));
    return webcamid;
}

const doGetFiles = function doGetFiles(webcamid) {
    return fs.readdirSync(path.join(BASE_DIR, webcamid)).reverse();
}

const doGetImage = function doGetImage(webcamid, file) {
    return fs.readFileSync(path.join(BASE_DIR, webcamid, file));
}

const doSetImage = async function doSetImage(msg) {
    let fileName = dateFormat('mmdd-HHMM.jpg');
    fs.writeFileSync(path.join(BASE_DIR, msg.webcamid, fileName), new Buffer(msg.image, 'base64'));
    deleteOldFiles(msg.webcamid, fileName);
    return "OK";
}

function deleteOldFiles(webcamid, fileName) {
    fs.readdirSync(path.join(BASE_DIR, webcamid)).forEach(
        (file) => {
            if (!file.startsWith(fileName.substring(0,4))) {
                // delete file
                fs.unlinkSync(path.join(BASE_DIR, webcamid, file));
            }
        }
    )
} 

module.exports = { doRegister, doGetFiles, doGetImage, doSetImage };