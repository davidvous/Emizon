import React from 'react'
import './CartProduct.css'

function CartProduct({id, product_url, name, price, rating, quantity}) {
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
                <p key={i}>⭐️</p>
              ))}
          </div>
          <div className="cartProduct__title">
              <small>Quantity: </small><strong>{quantity}</strong>
          </div>
          <button>Remove from Cart</button>
        </div>
      </div>
    );
}

export default CartProduct
