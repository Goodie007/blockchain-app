import React, { Component } from 'react';
import './App.css';
import Status from '../src/components/Status'
import Send from '../src/components/Send'
import Transactions from '../src/components/Transactions'
import axios from 'axios';

const endpoint = '/mine_block'

class App extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    axios.get(endpoint)
  }
  render(){
  return (
    <div className="App">
    <Status/>
    <Send/>
    <Transactions/>
    </div>
    );
  }
}

export default App;