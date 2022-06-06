import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = ({ id, name, description }) => {
  // Note: this id should come from api
  const product = { id };

  const CartItems = useContext(CartContext);

  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      <button data-cy="product-add-item-to-cart-button">"Remove from cart"</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">+</button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
  );
};

export default Product;
