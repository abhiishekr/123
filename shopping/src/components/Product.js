import React,{useState,useEffect} from 'react'
import axios from 'axios';


const Product = () => {
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([]);

useEffect(()=>{
    setLoading(true);

    axios({
        method:"GET",
        url:"https://fakestoreapi.com/products"

    }).then(res=>{
        console.log(res.data)
        setData(res.data)
    }).catch(e=>console.log(e))
    .finally(()=> setLoading(false));

},[])
  return (
    <div className='Product-container'>
        {loading&& (
            <div>
                {" "}
                <h1> Loading...</h1>
            </div>
        )}
        
        {data.map((product)=> (
            <div key={product.id} className="cart">
            <div><img src={product.image} alt="#"/></div>
            <div>
                <h6>{product.title}</h6>
                <h6>{`Price: ${product.price}`}</h6>
                <h6>{`Description: ${product.description}`}</h6>
            </div>
            </div>
        ))}

    </div>
  )
}

export default Product