import React from 'react'
import './CartProduct.css'
import { deleteCartLine } from "../../store/cart";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import EditProduct from './EditProduct';


function CartProduct({id:product_id, userId, product_url, name, price, total_rating, rating_length, quantity}) {
    const dispatch = useDispatch();

    const removeItem = () => {
      dispatch(deleteCartLine(userId, product_id));
    }

    return (
      <div className="cartProduct">
        <Link to={`/products/${product_id}`}>
        <img alt="" className="cartProduct__image" src={product_url} />
        </Link>

        <div className="cartProduct__info">
          <p className="cartProduct__title">{name}</p>
          <p className="cartProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="cartProduct__rating">
            {Array(5)
              .fill()
              .map((_, i) => (
                (true ? (
                  <p key={i}>
                    <i
                      key={i}
                      className={`fas fa-star ${
                        i+1 <= total_rating/rating_length
                          ? `star-yellow`
                          : `star-gray`
                      }`}
                    ></i>
                  </p>
                ) : null)
              ))}
          </div>
          <EditProduct
            userId={userId}
            product_id={product_id}
            quantity={quantity}
          />
          <button className="pointer" onClick={removeItem}>Remove from Cart</button>
        </div>
      </div>
    );
}

export default CartProduct
