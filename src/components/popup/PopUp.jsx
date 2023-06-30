
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Btn from '../btn/Btn';

import logo from '../../assets/logo.png'
import './popup.css'

import {IoPersonOutline } from 'react-icons/io5';

const PopUp = () => (
  <Popup trigger={<button className='icon'> <IoPersonOutline/> </button>} modal nested>
  {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header">
        <img src={logo} alt='logo'/>
         <h3>Sing up</h3> 
      </div>
      <div className="content">
        {' '}
        <input placeholder='Name'/>
        <input placeholder='Email'/>
        <Btn title="Create account"/>
      </div>
      <div className="actions">
        <Popup
          trigger={<button className="button"> More info</button>}
          position="top center"
          nested
        >
          <strong>
          Before accepting it is recommended to read the privacy policy.
          </strong>
        </Popup>
        <button
          className="button"
          onClick={() => {
            console.log('modal closed ');
            close();
          }}
        >
          Exit
        </button>
      </div>
    </div>
  )}
  </Popup>
);

export default PopUp;