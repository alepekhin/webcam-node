import * as React from 'react';
import path from 'path';
import config from '../config';

export default 
class Image extends React.Component { 

    constructor(props) {
        super(props);
        this.eventEmitter = props.eventEmitter;
        this.state = {selectedFile: ''};
        this.state.selectedFile = '';
        this.eventEmitter.on('selectedFile', (file) => {
            let newState = this.state;
            newState.selectedFile = file;
            this.setState(newState);
        });
    }

    render() {
        // no axios needed for showing image from BE
        let selectedFile = config.data.BEURL + '/' + path.join(config.data.webcamid, this.state.selectedFile);
        return (
            <img width='365' height='240' alt='No files' src={selectedFile}/>
        );
    }
} 