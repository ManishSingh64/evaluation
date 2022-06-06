import React,{useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import {AuthContext} from '../../context/AuthContext';
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {isAuth,logout} = useContext(AuthContext);
  const {length} = useContext(CartContext);
 
  const navigate = useNavigate();
  const handleOnClick = () =>{
    if(isAuth){
      logout();
    }else{
      navigate("/login")
    }
  }
  return (
    <div data-cy="navbar" style={{display: "flex" ,justifyContent:"space-between"}}>
      <div>
      <Link data-cy="navbar-home-link" to="/">
        LOGO
      
      </Link>

      </div>
      <div>
      <span data-cy="navbar-cart-items-count">cart: {length}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleOnClick}>
        {isAuth? "Logout" : "Login"}
        </button>

      </div>
    </div>
  );
};

export default Navbar;
