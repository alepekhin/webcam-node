import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';

ReactDOM.render((
    <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/:webcamid" component={App}/>
    </BrowserRouter>
), document.getElementById('root'));
