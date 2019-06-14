import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

const Container = styled.div`
background-color: rgba(236, 240, 241, 1);
width: 70%;
height: 100vh;
margin: 0 auto;
`;
const Header = styled.header`
@import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');
    font-family: 'Lobster', cursive;
    font-size: 2rem;
    font-weight: lighter;
    padding: 0 0 0 1rem;
    margin: 0 0 3rem 0;
`;


class Smurfs extends Component {
  render() {
    return (
      <Container>
        <Header>Smurf Village</Header>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
              <Route
                exact
                path='/smurf-form/:id?'
                render={props=> <SmurfForm
                 {...props}
                 />}
              />
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              </div>
              
            );
          })}
        </ul>
      </Container>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
