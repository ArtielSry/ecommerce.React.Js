import React from 'react'
import { useState, useId } from 'react'
import './filters.css'

function Filters({ onChange }) {
  /* estado para saber donde esta el rango de precio */
  const [minPrice, setMinPrice] = useState('-')

  /* useId para generar id unicos - se colocan en los id de abajo */
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    onChange(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <div className='filters'>
      <h2>Products:</h2>
      <div className='filter_container'>
      <div className='filters-price'>
        <label htmlFor={minPriceFilterId}>Max price: <span>{minPrice} €</span></label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='150'
          onChange={handleChangeMinPrice}
        />
        
      </div>
      <div className='filters-category'>
        <label htmlFor={categoryFilterId}>Category</label>
          <select id={categoryFilterId} onChange={handleChangeCategory}>
            <option value='all'>All</option>
            <option value='nike'>Nike</option>
            <option value='adidas'>Adidas</option>
            <option value='nb'>New Balance</option>
          </select>
      </div>
      </div>
    </div>
  )
}

export default Filters
