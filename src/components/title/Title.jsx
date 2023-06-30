import React from 'react'
import './title.css'

function Title(props) {
  return (
    <div className='title_container'>
      <h1 className='title'>{props.title}</h1>
    </div>
  )
}

export default Title
