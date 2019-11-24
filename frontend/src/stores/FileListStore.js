import axios from 'axios';
import config from '../config';

export default class FileListStore {

    constructor(props, eventEmitter) {
        this.eventEmitter = eventEmitter;
        this.webcamid = props.match.params.webcamid;
        //console.log('FileListStore: '+this.webcamid);
        config.data.webcamid = this.webcamid;
    }

    getFiles() {
        let aconfig = {
            'url': config.data.BEURL+'/' + this.webcamid,
            'method': 'GET'
        };
        axios(aconfig)
        .then((response) => {
            this.eventEmitter.emit('listFiles', response.data);
            this.eventEmitter.emit('selectedFile', response.data[0]);
        });
    }
    
}