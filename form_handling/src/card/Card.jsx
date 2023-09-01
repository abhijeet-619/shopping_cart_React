import React, { useState } from 'react'
import './Card.css'

function Card(props) {
    let[count,setCount]=useState(0);

    const fun=()=>{
        setCount((pre)=>pre+1);
    }
    
  return (
    <div className='card'>
     <img src={props.uri} alt={props.alt} />
     <b>Price : {props.price}</b>
     <button onClick={fun}>Add to Cart</button>
     
    </div>
  )
}

export default Card;