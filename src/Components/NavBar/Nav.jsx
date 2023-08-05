import React from 'react'
import './Nav.css'
import {BsSearch} from 'react-icons/bs'

const Nav = () => {
  return (
    <div className='Nav'>
        <div className="Logo">
          <p>Shopcart</p>
        </div>
        <div className="Category">
          <p>Category</p>
          <p>Deals</p>
          <p>Whats new</p>
          <p>Delivery</p>
        </div>
        <div className="Search-Cart">
          <div className="Search">
            <input type="text" placeholder='Search Product' /><BsSearch className='Search-icon' />
          </div>
          <div className="Cart">
            <p>Login</p>
            <p>Cart</p>
          </div>
        </div>
    </div>
  )
}

export default Nav