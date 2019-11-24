'use strict'

const NodeWebcam = require("node-webcam");
const axios = require("axios");
const os = require('os');
const fs   = require('fs');
const FILE = 'snapshot';
const PROPERTIES = os.homedir()+'/.webcam.properties';
const Webcam = NodeWebcam.create();
const host = process.argv[2];
var webcamid = undefined;

if (process.argv.length == 2) {
    console.log('Usage: use server address as parameter, i.e. http://localhost:4000')
    process.exit(1);
}

async function sendImage() {
    Webcam.capture(FILE, function (err, data) {
        let img = fs.readFileSync(FILE+'.jpg');
        post(img.toString('base64'));
        fs.unlinkSync(FILE+'.jpg');
    });
}

async function post(data) {
    //console.log('post to '+webcamid);
    let config = {
        'url': host + '/webcam',
        'method': 'POST',
        'headers': {
            'content-type': 'application/json'
        },
        'data': {
            'webcamid': webcamid,
            'image': data
        }
    };
    await axios(config);
}

async function doRegister() {
    if (!fs.existsSync(PROPERTIES)) {
        let config = {
            'url': host + '/webcam/register',
            'method': 'GET'
        };
        await axios(config).then(response => {
            webcamid = response.data
            fs.writeFileSync(PROPERTIES, webcamid);
        });
    } else {
        webcamid = fs.readFileSync(PROPERTIES, 'UTF-8');
    }
}

doRegister();
sendImage();
setInterval(sendImage, 120000);
