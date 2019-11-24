import React from 'react';
import events from 'events';
import FileListStore from '../stores/FileListStore';
import Image from './Image';
import FileList from './FileList';

export default
class App extends React.Component {

    constructor(props) {
        super(props);
        this.eventEmitter = new events.EventEmitter();
        this.store = new FileListStore(props, this.eventEmitter);
        this.store.getFiles();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <Image eventEmitter={this.eventEmitter}/>
                    </div>
                    <div className="col-md-2">
                        <FileList eventEmitter={this.eventEmitter}/>
                    </div>
                </div>
            </div>
        );
    }
}
