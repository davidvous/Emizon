import React from 'react'
import './Product.css'

function Product({name, price, product_url, rating}) {
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
              <p>⭐️</p>
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
