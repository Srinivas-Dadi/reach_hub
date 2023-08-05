import React,{useEffect,useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import Nav from '../../Components/NavBar/Nav';
import './Item.css'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const Item = () => {

  const {id} = useParams();
  const [item,setItem] = useState([]);
  const [fet,setFet] = useState(false);
  const [count,setCount] = useState(0);


  useEffect(() => {
    try{
      if(id){
      fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setItem(res))
      .then(console.log(item))
      setFet(true)
      }
    }
    catch(e){
      console.error(e);
    }
  },[id]);

  const Dec = () => {
    if(count === 0)
      return
    else{
      setCount(count-1);
    }
  }

  const Inc =() => {
    if(count === 5){
      return
    }
    setCount(count+1);
  }



  return (
    <div>
      <Nav/>
      {fet &&
      <div>
      <hr className='line'/>
      <div className="ItemPath">
        <p> <Link to='/' >Product/Item/ </Link> </p> <p> {item.title}</p>
      </div>
      <div className="Item">
        <div className="ItemImg">
          <img src={item.image} alt="" />
        </div>
        <div className="ItemDetails">
          <p className='ItemTitle' >{item.title}</p>
          <p className='ItemDesc'>{item.description}</p>
          <hr className='line'/>
          <div className="ItemPrice">
          {item.price > 50 ? <p>$ {item.price} or $10/month <br /> <span>suggested payments with credit cards</span> </p> : <p> ${item.price} </p> }
          </div>
          <hr className='line'/>
          <div className="OrderCount">
            <div>
              <h2 onClick={Dec} > <AiOutlineMinus /> </h2>
              <p>{count}</p>
              <h2 onClick={Inc}> <AiOutlinePlus /> </h2>
            </div>
            <p>Select Quantity</p>
          </div>
          <hr className='line'/>
          <div className="Buttons">
            <p className='Buy'>Buy Now</p>
            <p className='AddToCart'>Add To Cart</p>
          </div>
          div.
        </div>
      </div>
      </div>
      }
      {!fet && <p>loading</p> }
    </div>
  )
}

export default Item