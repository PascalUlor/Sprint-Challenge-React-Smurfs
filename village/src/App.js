import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Nav from "./components/Nav";
import SmurfDeet from "./components/SmurfDeet";

const MainContainer = styled.div`
  background: linear-gradient(to top, rgba(80, 68, 18, 0.6) 10%, transparent),
    url(https://wallpapersite.com/images/pages/pic_h/2350.jpg) center/cover
      no-repeat border-box,
    skyblue;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  text-align: center;
`;

const baseUrl = "http://localhost:3333/smurfs";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      errorMessage: ""
    };
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  FetchSmurfs() {
    axios
      .get(`${baseUrl}`)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(console.log(err));
        this.setState({ errorMessage: err.statusText });
      });
  }

  UpdateSmurf(dataInput){
    axios.put(`${baseUrl}/${dataInput.id}`, dataInput)
    .then(res=>{
      this.setState({smurfs: res.data});
    }).catch(err=> {
      console.log("---------",err);
    this.setState({errorMessage: `Something went wrong. Error: ${err}`})})
  }
  reloadState = (data) => {
    this.setState({
      smurfs: data
    })
  }

  DeleteSmurf = (dataInput) => {
    axios.delete(`${baseUrl}/${dataInput.id}`)
    .then(res=>{
      this.reloadState(res.data)
      console.log("-----Working", res.data);
    }).catch(err=> {
      console.log("---------",err)
      this.setState({errorMessage: `Something went wrong. Error: ${err}`})
      .finally(() => this.props.history.push('/'))
  });
}



  componentDidMount() {
    this.FetchSmurfs();
  }
  render() {
    return (
      <MainContainer>
        <Nav />
        <Route
          exact
          path="/"
          render={props =>
            this.state.smurfs && (
              <Smurfs smurfs={this.state.smurfs} {...props} DeleteSmurf={this.DeleteSmurf}
               />
            )
          }
        />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} />}
        />

        <Route
              exact
              path="/update-smurf/:id"
              render={props => <SmurfForm smurfs={this.state.smurfs} {...props} updateSmurf={this.UpdateSmurf}
               />}
            />

        <Route 
          path="/smurf/:id"
          render={props => <SmurfDeet {...props} smurfs={this.state.smurfs}
          updateSmurf={this.UpdateSmurf} DeleteSmurf={this.DeleteSmurf}
          />}
        />

        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
      </MainContainer>
    );
  }
}

export default App;
