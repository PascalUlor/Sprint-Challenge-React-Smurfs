import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
background-color: rgba(103, 128, 159, 1);
opacity: 0.5;
width: 30%;
margin: 1rem auto;
padding: .5rem;
`;

const Span = styled.div`
display: flex;
justify-content: flex-end;
margin: .5rem auto;
span {
  font-weight: bold;
  color: red;
  margin: 0 auto;
  }
`;

const Smurf = props => {
  console.log('======',props);
  return (
    <div className="Smurf">
    <Card>
    <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <Span>
        <span>
        <Link to={`/smurf-form/${props.id}`}>
        <button>Edit</button>
        </Link>
        </span>
        <span><button>Delete</button></span>
        </Span>
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

