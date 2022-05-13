import React from 'react';
//componente funcional, solo tiene una function
const Hobbies = (props) => {
  return (
    <ul>
      {props.hobbies.map((hobby, i) => {
        return <li key={i}>{hobby}</li>
      })}
    </ul>
  );
}

export default Hobbies;