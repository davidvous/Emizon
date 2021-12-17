import React from 'react'
import './Product.css'
import addCart from '../../store/cart'

function Product({name, price, product_url, rating}) {

  const addToCart = (id, userId, item) => {
    dispatch(addCart(id, userId, item));
    // console.log(song, playlistId)
  };

    return (
      <div className="product">
        <div className="product__info">
          <p>{name}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating).fill().map((_,i) => (
              <p key={i}>⭐️</p>
            ))}
          </div>
        </div>
          <img
            src={`${product_url}`}
            alt=""
          />
        <button>Add to Basket</button>
      </div>
    );
}

export default Product
