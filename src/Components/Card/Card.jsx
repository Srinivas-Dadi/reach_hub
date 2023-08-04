import React from 'react'
import './Card.css'
import {AiOutlineStar} from 'react-icons/ai'


const Card = (props) => {
  return (
    <div className='Card'>
      <div className="CardImg">
        <img src={props.d.image} alt="ProductImg"  />
      </div>
      <div className="CardDesc">
        <p className='Title'>{props.d.title}</p>
        <div className="Price-Rating">
          <p className="Price">
           <b>${props.d.price}</b>
          </p>
          <p className="Rating">
          <b> {props.d.rating.rate} <AiOutlineStar /> </b>
          </p>
        </div>
        <button type="button"> <p> ADD TO CART</p></button>
      </div>

    </div>
  )
}

export default Card