// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import { Switch, Route, HashRouter } from 'react-router-dom'

import './index.css';
import Home from './components/Home'
import Faith from './components/Faith'
import Sermons from './components/Sermons'
import SermonSingle from './components/SermonSingle'
import About from './components/About'
import Leadership from './components/Leadership'
import Devotional from './components/Devotional'
import Bulletin from './components/Bulletin'
import Gospel from './components/Gospel'
import Give from './components/Give'
import Drawer from './components/Drawer'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
 <Provider store={configureStore()}>
    <HashRouter>
        <div>
            <Drawer />
            <div className='top-level'>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/sermons" component={Sermons} />
                    <Route path="/sermon-single/:id" component={SermonSingle} />
                    <Route path="/faith" component={Faith} />
                    <Route path="/leadership" component={Leadership} />
                    <Route path="/devotional" component={Devotional} />
                    <Route path="/gospel" component={Gospel} />
                    <Route path="/give" component={Give} />
                    <Route path="/bulletin" component={Bulletin} />
                </Switch>
            </div>
        </div>
        </HashRouter>
 </Provider>,
 document.getElementById('root')
);
serviceWorker.register();
