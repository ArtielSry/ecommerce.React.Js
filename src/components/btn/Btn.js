import React from 'react';
import './btn.css';
import { NavLink } from 'react-router-dom';

function Btn(props) {
  return (
    <>
    <NavLink to={props.link}>
      <button className='btn'>{props.title}</button>
      </NavLink>
    </>
  )
}

export default Btn
