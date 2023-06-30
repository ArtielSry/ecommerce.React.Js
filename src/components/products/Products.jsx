import { useCart } from '../../hooks/useCart'
import './products.css'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { RiDeleteBackLine } from 'react-icons/ri'

export function Products({products}) {
    
    const {addToCart, removeFromCart, cart} = useCart()
    
    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {
                    products.map(product => {
                        const isProductInCart = checkProductInCart(product)
                        return (
                            <li key={product.id}>
                                <div>
                                <img src={product.images} alt={product.title}/>
                                    <h3>{product.title}</h3>      
                                    <p className='gray'>{product.description}</p>
                                    <p>{product.price}€</p>
                                </div>
                                <div>
                                    <button onClick={() => {
                                         isProductInCart 
                                         ? removeFromCart(product)
                                         : addToCart(product)
                                        }}
                                    >
                                        {
                                            isProductInCart
                                            ?  <RiDeleteBackLine className='products_btn-red'/>
                                            :  <BsFillCartPlusFill  className='products_btn' />
                                        }
                                        </button>
                                </div>
                                
                            </li>  
                        )})
                }
            </ul>
        </main>
    )
}

