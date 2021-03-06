import axios from "axios";
import React, { useContext,useState,useEffect } from "react";
import { Product } from './Product'
import {AuthContext} from '../../context/AuthContext';
import styles from './Products.module.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  // const {isAuth} = useContext(AuthContext)
  useEffect(() => {
    axios.get("http://localhost:8080/products").then(({data}) =>{
      setProducts(data)
    })
  }, []);
  console.log(products)
  return <div>
    <div className= {styles.box}>
      {products.map((product) =>(
       <Product key={product.id} {...product}/>
      ))}
    </div>
  </div>;
};

export default Products;
