import React, { useState } from 'react';
import axios from 'axios';

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
      <div className="SmurfForm">
        <form onSubmit={addSmurf}>
          <input
            onChange={handleInputChange}
            placeholder="name"
            value={smurf.name}
            name="name"
          />
          <input
            onChange={handleInputChange}
            placeholder="age"
            value={smurf.age}
            name="age"
          />
          <input
            onChange={handleInputChange}
            placeholder="height"
            value={smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  // }
}

export default SmurfForm;
