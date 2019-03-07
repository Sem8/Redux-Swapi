import React from "react";

const Character = props => {
  return (    
    <div className='eachCharacteristic'>
      <li>Name: {props.character.name}</li>
      <li>Height: {props.character.height}</li>
      <li>Mass: {props.character.mass}</li>
      <li>Hair Color: {props.character.hair_color}</li>
      <li>Skin color: {props.character.skin_color}</li>
    </div>
    );
};

export default Character;
