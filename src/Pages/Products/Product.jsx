import React,{useState,useEffect} from 'react'
import './Product.css'
import Card from '../../Components/Card/Card';
import Nav from '../../Components/NavBar/Nav';
import OfferBanner from '../../Components/OfferBanner/OfferBanner';
import { Link } from 'react-router-dom';


const Product = () => {

  const [data, setData] = useState([])

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            // console.log(data);
        })
    },[]);  

    console.log(data);

  return (
    <div>
      <Nav />
      <OfferBanner />
      <div className="Products">
      {
        data.map((e) => {
          return (
          <Link to={`/item/${e.id}`}>
            <Card d={e} key={e.id} />
          </Link>
          )
        })
      }
      </div>
    </div>
  )
}

export default Product