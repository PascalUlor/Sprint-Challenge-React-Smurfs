import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Nav from './components/Nav';


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
      <div className="App">
      <Nav/>
      <Route
      exact 
        path='/'
        render={props=>this.state.smurfs && 
        <Smurfs smurfs={this.state.smurfs} {...props}/>
      }
      />
      <Route
        path='/smurf-form'
        render={props => this.state.smurfs &&
        <SmurfForm {...props}/>
      }
      />
      

      {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
      </div>
    );
  }
}

export default App;
