import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 50rem;
background-color: #fafafa;
margin: 0 auto;
margin-top: 0;
`;

const FormStyle = styled.form`
  width: 50%;
  margin: 5rem auto;
  border: 2px solid lightgrey;
  padding: 4rem;
`;

const FormInput = styled.input`
  color: #000;
  font-weight: 100;
  width: 90%;
  display: block;
  padding: 0.5rem;
  background-color: rgba(242, 241, 239, 1);
  border: 2px solid rgba(242, 241, 239, 1);
  -webkit-transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  background-position: -800px 0;
  background-size: 100%;
  background-repeat: no-repeat;
  font-family: "Montserrat", sans-serif;
  margin: auto;
  margin-bottom: 1em;
  &:focus {
    outline: none;
    border:1px solid rgba(189, 195, 199, 1);
}
`;


const baseUrl = 'http://localhost:3333/smurfs';

const SmurfForm =()=> {
  const [smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: ''
  })
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     age: '',
  //     height: ''
  //   };
  // }

  const addSmurf = event => {
    // event.preventDefault();
    let newSmurf = {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    }
    // add code to create the smurf using the api
    axios.post(`${baseUrl}`, newSmurf)
    .then(res=>{
      
    }).catch(err=> console.log(err));
    setSmurf({
      name: '',
      age: '',
      height: ''
    });
  }

  const handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setSmurf(smurf=>({ ...smurf, [name]: value }));
  };

  // render() {
    return (
      <Container>
        <FormStyle onSubmit={addSmurf}>
          <FormInput
            onChange={handleInputChange}
            placeholder="name"
            value={smurf.name}
            name="name"
          />
          <FormInput
            onChange={handleInputChange}
            placeholder="age"
            value={smurf.age}
            name="age"
          />
          <FormInput
            onChange={handleInputChange}
            placeholder="height"
            value={smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </FormStyle>
      </Container>
    );
  // }
}

export default SmurfForm;
