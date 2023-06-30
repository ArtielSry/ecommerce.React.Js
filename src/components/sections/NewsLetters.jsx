import React from 'react'
import './newsLetters.css'
import Btn from '../btn/Btn'

function NewsLetters() {
  return (
    <div className='news_container'>
      <div className='news_title'>
        <h3>Register now in our Newsletter</h3>
      </div>
        
      <div className='news_div'>
        <input type='email' placeholder='Email'></input>
        <Btn title="Discover more"></Btn>
      </div>
    </div>
  )
}

export default NewsLetters
