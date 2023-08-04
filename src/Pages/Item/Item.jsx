import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

const Item = () => {

  const {id} = useParams();
  const [item,setItem] = useState({});
  const [itemId,setItemId] = useState(null);

  useEffect(() => {
    try{
      setItem(id);
      if(id){
      fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .then(console.log(item));
      }
    }
    catch(e){
      console.error(e);
    }
  },[]);

  return (
    <div>
      <h2>Item Details</h2>
      {/* <p>Title: {item.title}</p>
      <p>Description: {item.description}</p> */}
      {/* Add more properties as needed */}
    </div>
  )
}

export default Item