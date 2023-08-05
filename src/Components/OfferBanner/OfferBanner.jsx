import React from 'react'
import './OfferBanner.css'
import cart from '../../asserts/cart.png'

const OfferBanner = () => {
  return (
    <div className='OfferBanner'>
        <h1 className='OfferHead'>Grab Upto 50% Off On <br/> Selected Product </h1>
        {/* <div><Bag /></div> */}
        <div className="img">
          <img src={cart} alt="cart-img" />
        </div>
    </div>
  )
}

export default OfferBanner