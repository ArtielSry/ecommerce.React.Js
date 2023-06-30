
import './cart.css'

import { useId } from 'react'
import {useCart} from '../../hooks/useCart'
import { BsFillBagFill } from 'react-icons/bs';
import {RiDeleteBin6Fill} from 'react-icons/ri'


function CartItem({title,images, price, quantity, addToCart}) {
  return (
    <li className='bag'>
        <div>
            <p>{title}</p>
            <p>{price}€</p>
            <img src={images} alt='product'/>
        </div>
          <footer>
           <small>
            Qty: {quantity}
          </small>
          <button onClick={addToCart}>+</button>
        </footer>
      </li>
  )
}



function CartShow() {

    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart()

    return (
    <>
      
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <BsFillBagFill />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem 
              key={product.id} 
              addToCart={() => addToCart(product)}
              {... product} />
          ))}
        </ul>
        <button className='btn-clear' onClick={clearCart}>Clear <RiDeleteBin6Fill/></button>
      </aside>
    </>
  )
}

export default CartShow
