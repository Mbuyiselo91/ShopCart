import React from 'react'
import '../App.css';

const Header = (props) => {
  return (
    <div className='flex shopping-card'>
          <div> Shopping Cart App</div>
          <div> Cart
               <sup> {props.count} </sup>
          </div>
    </div>
  )
}

export default Header