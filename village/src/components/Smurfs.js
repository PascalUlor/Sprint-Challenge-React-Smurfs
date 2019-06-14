import React, { Component } from "react";
// import { Route } from "react-router-dom";
import styled from "styled-components";
import Smurf from "./Smurf";
// import SmurfForm from "./SmurfForm";

const Container = styled.div`
  background-color: rgba(236, 240, 241, 1);
  width: 70%;
  height: 100vh;
  margin: 0 auto;
`;
const Header = styled.header`
  @import url("https://fonts.googleapis.com/css?family=Lobster&display=swap");
  font-family: "Lobster", cursive;
  font-size: 2rem;
  font-weight: lighter;
  padding: 0 0 0 1rem;
  margin: 0 0 3rem 0;
`;

class Smurfs extends Component {
  render() {
    console.log(this.props)
    if (this.props.smurfs) {
      const { smurfs } = this.props;
      return (
        <Container>
          <Header>Smurf Village</Header>
          <ul>
            
            {smurfs.map(smurf => {
              return (
                <div key={smurf.id}>
                  <Smurf
                    name={smurf.name}
                    id={smurf.id}
                    age={smurf.age}
                    height={smurf.height}
                    key={smurf.id}
                    DeleteSmurf={this.props.DeleteSmurf}
                  />
                </div>
              );
            })}
          </ul>
        </Container>
      );
    }
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
