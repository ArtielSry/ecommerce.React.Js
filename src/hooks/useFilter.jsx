import { FiltersContext } from '../context';
import { useContext } from 'react';


function useFilters(){
  
    const {filters, setFilters} = useContext(FiltersContext)


    const filterProducts = (products) => {
      return products.filter(product => {
        return (
          product.price < filters.minPrice && 
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
        )
      })
    }
    /* estoy recuperando esto de la funcion useFilters, para poder usarlo fuera */
    return { filters, filterProducts, setFilters }
}

export default useFilters