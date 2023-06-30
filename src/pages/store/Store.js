import React, { useState } from 'react'
import Nav from '../../components/nav/Nav'
import Title from '../../components/title/Title'
import Footer from '../../components/footer/Footer'
import './store.css'

import { Products } from '../../components/products/Products.jsx';
import { products as initialProducts } from '../../components/products/products.js';
import HeaderStore from '../../components/headerStore/HeaderStore';
import useFilters from '../../hooks/useFilter'
import CartProvider from '../bag/Cart'
import CartShow from '../bag/CartShow'



function Store() {
  const [products] = useState(initialProducts)
  const {filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <CartProvider>
      <Nav/>
      <Title title="Available Articles"/>
      <div className='store_container container'>
        <HeaderStore changeFilters={setFilters} />
        <Products products={filteredProducts}/>
        <CartShow/>
      </div>
      <Footer/>
    </CartProvider>
  )
}

export default Store
