import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculater from './Calculater';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "ตารางผ่อนชำระเงินกู้"
    }
  }
  // componentWillMount(){
  //   this.setState({name: "eieieiก่อน"})
  // }
  // componentDidMount(){
  //   this.setState({name: "eieieiหลัง"})
  // }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ตารางผ่อนชำระเงินกู้</h1>
        </header> */}

        <h1>{this.state.name}</h1>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Calculater />
        {/* <Calculater plus={true} ></Calculater> */}
      </div>
    );
  }
}

export default App;
