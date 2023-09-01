import React from 'react'
import './Display.css'
function Display(props) {
  return (
    <div className='total'>
        <span>{props.num}NO. item count</span>
        <span>{props.count}</span>
        <span>{props.count * props.price}</span>
    </div>
  )
}

export default Display