// Code The Spaceship Component Here
import React from 'react';


class Spaceship extends React.Component { 
  render(){
    const {name , speed , hasRockets , colors}=this.props
    return(
      <div>
      <h1>Spaceship Name:  {name} </h1>
      <p>Ship Info:</p>
      <p>{speed} </p>
      <p>{hasRockets ? 'yes ':'no'} </p>
      <ul>{colors.map((color, index) => <li key={index}>{color}</li>)}</ul>
      </div>
      )
      Spaceship.defaultProps={
        speed:"slow",
        hasRockets:false,
        colors:['black', 'red']
      }
  }
  
}

export default Spaceship;