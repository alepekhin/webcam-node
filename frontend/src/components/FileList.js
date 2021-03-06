import * as React from 'react';

export default
class FileList extends React.Component {

    constructor(props) {
        super(props);
        this.eventEmitter = props.eventEmitter;
        this.state = {files: []}
        this.eventEmitter.on('listFiles', (files) => {
            let newState = this.state;
            newState.files = files;
            this.setState(newState);
        });
    }

    handleClick = (event) => {
        this.eventEmitter.emit('selectedFile', event.file);
    };

    render() {
        return (
            <div>
                <label htmlFor="files">File list:</label>
                <ul id="files">
                    {this.state.files.map(( file, index ) => <li key={index}><button class="btn btn-link" onClick={() => this.handleClick({file})}>{file}</button></li> )}
                </ul>
            </div>
        );
    }
}