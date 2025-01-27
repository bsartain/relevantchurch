import React, { Component } from 'react';
import { connect } from 'react-redux';

import { simpleAction } from '../actions/simpleAction'

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
  }

 render() {
  return (
   <div className="App">
    <header className="App-header">
     <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
     To get started, edit <code>src/App.js</code> and save to reload
    </p>
    <button onClick={this.simpleAction}>Test redux action</button>
    <pre>
    {
      JSON.stringify(this.props)
    }
    </pre>
   </div>
  );
 }
}

const mapStateToProps = state => ({
  myProps: state
})


export default connect(mapStateToProps, { simpleAction })(App);
