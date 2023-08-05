import React,{useState,useEffect} from 'react'
import './Product.css'
import Card from '../../Components/Card/Card';
import Nav from '../../Components/NavBar/Nav';
import OfferBanner from '../../Components/OfferBanner/OfferBanner';
import { Link } from 'react-router-dom';


const Product = () => {

  const [data, setData] = useState([])
  const [cat,setCat]= useState('')
  const [dupdate, setDupdate] = useState(true)

    useEffect(() => {
      if(cat === ""){
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            // setFulldata(data);
            setDupdate(true);
            // console.log(data);
        })
      }
      else{
        fetch(`https://fakestoreapi.com/products/category/${cat}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          // console.log(data);
        });
      }
    },[cat]);  


  // useEffect(() => {
  //     if(cat === ""){
  //       setDupdate(false);
  //       setData(fulldata);
  //     }
  //     else{
  //       setDupdate(false);
  //       fetch(`https://fakestoreapi.com/products/category/${cat}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         console.log(data);
  //       });
  //     }
  //     setDupdate(true);
  // },[cat]);


  return (
    <div>
      <Nav />
      <OfferBanner />
      <div className="Cat">
        <p onClick={ () => {setCat("men's clothing") }} >Men's Clothing</p> 
        <p onClick={ () => setCat("women's clothing")} >Women's Clothing</p>
        <p onClick={ () => setCat("jewelery")}>Jewelery</p>
        <p onClick={ () => setCat("electronics")} >Electronics</p>
        <p onClick={ () => setCat("")}>Clear Filter</p>
      </div>
      { dupdate &&
      <div className="Products">
      {  data.map((e) => {
          return (
          <Link to={`/item/${e.id}`} key={e.id}>
            <Card d={e} key={e.id} />
          </Link>
          )
        })
      }
      { !dupdate && <p>Loading</p>}
      </div>
      }
    </div>
  )
}

export default Product