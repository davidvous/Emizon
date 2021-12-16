import React from 'react'
import './Product.css'

function Product() {
    return (
      <div className="product">
        <div className="product__info">
          <p>Info about product</p>
          <p className="product__price">
            <small>$</small>
            <strong>21.99</strong>
          </p>
          <div className="product__rating">
            <p>⭐️</p>
          </div>
        </div>
          <img
            src="https://cdn.discordapp.com/attachments/920474033932349511/920474083332862002/default-product-image.png"
            alt=""
          />
        <button>Add to Basket</button>
      </div>
    );
}

export default Product
