import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Smurf from './Smurf';

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

const SmurfDeet = props =>{
    const id = Number(props.match.params.id);
    const selectedSmurf = props.smurfs.find(smurf=> smurf.id === id)
    console.log("**********",selectedSmurf)
    return (
        <Card>
        <Smurf {...selectedSmurf}/>
        <Span>
        <span>
        <Link to={`/update-smurf/${id}`}>
        <button>Edit</button>
        </Link>
        </span>
        <span><button onClick={()=>props.DeleteSmurf(selectedSmurf)}>Delete</button></span>
        </Span>
        </Card>
    )
}

export default SmurfDeet;