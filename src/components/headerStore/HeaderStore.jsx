import React from 'react'
import Filters from '../../pages/store/Filters'

function HeaderStore({changeFilters}) {
  return (
    <>
      <Filters onChange={changeFilters}/>
    </>
  )
}

export default HeaderStore
