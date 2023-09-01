import Header from './Components/Header'
import ProductList from './Components/ProductList'
import CartList from './Components/CartList'
import { useState } from 'react'
import './App.css'

function App() {

  const[product,setproduct]=useState([{
    url:'https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    name:'OMEGA',
    price:1000,
    id:0,
    count:0
  },
  {
    url:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    name:'ROLEX',
    price:1500,
    id:1,
    count:0
  },{
    url:'https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    name:'TITAN',
    price:2000,
    id:2,
    count:0
  }])
  const [cart,setCart]=useState([])
console.log(cart);
  const addToCart=(data)=>{
    
    setCart([...cart,{...data,quantity:1}])
    
}
const[showCart,setShowCart]=useState(false)
const toggle=(value)=>{
 setShowCart((value))
}

  return (
    <div>
    <Header count={cart.length} toggle={toggle}/>
    {
      showCart ?
    <CartList cart={cart}/>:
    <ProductList product={product} addToCart={addToCart}/>
    }
    </div>
  )
}

export default App
