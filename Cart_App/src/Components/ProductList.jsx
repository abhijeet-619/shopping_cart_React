import './ProductList.css'

function ProductList({product,addToCart}) {
  return (     
    <div className="productContainer">{
    product.map((item,index) => {
      return(
        <div className='item'>
          <div className='item1'>
            <img src={item.url} alt={item.name} />
            <p>{item.name}</p>
            <p>Price: Rs. {item.price} /-</p>
            <button onClick={()=>addToCart(item)}>Add To Cart</button>
         </div>
        </div>
    )
    })
   }
    </div>
  )
}

export default ProductList