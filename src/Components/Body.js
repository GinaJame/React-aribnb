import React from 'react';
import Card from './Card';
import '../styles/body.css'
const Body = (props) => {
  return (
    <>
      <div class="cards">
        <h1>Plan a trip with help from local Hosts around the world</h1>
        <div class="cards-container">
          {props.data.map((place,i)=> {
              return <Card place={place}/>
          })}
        </div>
      </div>
    </>
  );
}

export default Body;