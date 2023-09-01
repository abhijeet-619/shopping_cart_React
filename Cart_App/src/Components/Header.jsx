import './Header.css'

function Header({count,toggle}) {
  return (
    <div className='heading'>
        <div onClick={()=>toggle(false)}>Shopping Cart App</div>
        <div onClick={()=>toggle(true)}>Cart<sup>{count}</sup></div>
    </div>
  )
}

 
export default Header