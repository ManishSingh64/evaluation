import axios from "axios";
import React, { useState,useEffect } from "react";
import { Product } from './Product'

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/products").then(({data}) =>{
      setProducts(data)
    })
  }, []);
  console.log(products)
  return <div>
    <div>
      {products.map((product) =>(
       <Product key={product.id} {...product}/>
      ))}
    </div>
  </div>;
};

export default Products;
