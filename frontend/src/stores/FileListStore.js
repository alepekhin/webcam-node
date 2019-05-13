import axios from 'axios';
import config from '../config';

export default class FileListStore {

    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
    }

    getFiles() {
        let aconfig = {
            'url': config.data.BEURL+'/' + config.data.webcamid,
            'method': 'GET'
        };
        axios(aconfig)
        .then((response) => {
            this.eventEmitter.emit('listFiles', response.data);
            this.eventEmitter.emit('selectedFile', response.data[0]);
        });
    }
    
}