import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';


const baseUrl = 'http://localhost:3333/smurfs';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      errorMessage: '',
    };
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  FetchSmurfs() {
    axios.get(`${baseUrl}`)
    .then(res=>{
      this.setState({smurfs: res.data})
    }).catch(err=>{
      console.log(console.log(err));
      this.setState({errorMessage: err.statusText})
    })
  }
  
  componentDidMount() {
   this.FetchSmurfs();
  }
  render() {
    return (
      <div>
      {this.state.smurfs && <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
      </div>}

      {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
      </div>
    );
  }
}

export default App;
