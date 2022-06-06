import axios from "axios";
import React, {useState,useContext, createContext, useEffect } from "react";
import {AuthContext} from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const {isAuth} = useContext(AuthContext);
const [CartItems,setCartItems] = useState([])
const length = CartItems.length;
console.log(CartItems)

// const cartItemId = (prodId) =>{
//   CartItems.find((item) => item.prodId === prodId)
// }

useEffect(() =>{
  if(isAuth){
    axios.get("http://localhost:8080/cartItems").then(({data})=>{
      setCartItems(data);
    })
  }
},[isAuth])

  return <CartContext.Provider value={{CartItems,length}}>{children}</CartContext.Provider>;
};
