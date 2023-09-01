import Card from './card/card'
import Display from './card/Display'
import './App.css'
import Header from './component/header'
import { useState } from 'react'

function App() {
  return (
    <div className='app'>
      <Header/>
      <div className='cart_container'>
      <Card uri="https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="watch1" price={1000}/>
      <Card uri="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="watch2" price={1500}/>
      <Card uri="https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="watch3" price={2000}/>
     </div>
     <div className='total_container'>
     <Display num={1} price={1000}/>
     <Display num={2} price={1500}/>
     <Display num={3} price={2000}/>
    </div>
    </div>
  )
}

export default App
