import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
background-color: red;
opacity: 0.5;
width: 30%;
margin: 1rem auto;
padding: .5rem;
`;

const Smurf = props => {
  return (
    <div className="Smurf">
    <Card>
    <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </Card>  
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

