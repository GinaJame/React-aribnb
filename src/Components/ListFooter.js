import React from 'react';

const ListFooter = (props) => {
  return (
        <>
            <ul>
            {props.list.map((item, i)=>{
                return <li>{item}</li>
            })}
            </ul>
        </>
  );
}

export default ListFooter;