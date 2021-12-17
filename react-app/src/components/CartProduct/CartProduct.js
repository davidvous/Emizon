import React from 'react'
import './CartProduct.css'
import { deleteCartLine } from "../../store/cart";
import { useDispatch } from "react-redux";
import EditProduct from './EditProduct';

function CartProduct({id:product_id, userId, product_url, name, price, rating, quantity}) {
    const dispatch = useDispatch();

    const removeItem = () => {
      dispatch(deleteCartLine(userId, product_id));
    }

    return (
      <div className="cartProduct">
        <img alt="" className="cartProduct__image" src={product_url} />

        <div className="cartProduct__info">
          <p className="cartProduct__title">{name}</p>
          <p className="cartProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="cartProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>
                  <i class="fas fa-star"></i>
                </p>
              ))}
          </div>
          <EditProduct
            userId={userId}
            product_id={product_id}
            quantity={quantity}
          />
          <button onClick={removeItem}>Remove from Cart</button>
        </div>
      </div>
    );
}

export default CartProduct
