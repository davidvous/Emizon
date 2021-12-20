import React from 'react'
import './Product.css'
import { addCart } from '../../store/cart'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Product({name, price, product_url, rating, id:item}) {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(addCart(user?.id, item));
  };

    return (
      <Link className="product__link" to={`/products/${item}`}>
        <div className="product hvr-grow pointer">
          <div className="product__info">
            <p>{name}</p>
            <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="product__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p key={i}>
                    <i key={i} className="fas fa-star"></i>
                  </p>
                ))}
            </div>
          </div>
          <img src={`${product_url}`} alt="" />
          <button onClick={() => addToCart()}>Add to Cart</button>
        </div>
      </Link>
    );
}

export default Product
