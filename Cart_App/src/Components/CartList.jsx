import { useEffect, useState } from "react"
import './CartList.css'

function CartList({cart}) {
  const[Cart,setCart]=useState([])
  useEffect(()=>{
    setCart(cart)
  },[cart])
  return (
    <div className="listcontainer">{
       Cart.map((item,index)=>{
        return(
          <div className="cartlist">
           <img src={item.url} alt={item.name} width={50}/>
           <span>{item.name}</span>
           <button id="plus" onClick={()=>{
            const _cart=Cart.map((_item,_index)=>{
              return index === _index?{..._item,quantity:_item.quantity+1}:_item
            })
              setCart(_cart)
           }}>+</button>

           <span>{item.quantity}</span>

           <button id="minus" onClick={()=>{
            const _cart=Cart.map((_item,_index)=>{
              return index === _index?{..._item,quantity:_item.quantity-1}:_item
            })
              setCart(_cart)
           }}>-</button>
           <span>Rs.{item.price*item.quantity}</span>
         
          </div>

        )

       })
    }
    <p>Total: 
      {
        Cart.map(item=>item.price*item.quantity).reduce((total,value)=>total+value,0)
      }
    </p>
    </div>


  )
}

export default CartList