import React from 'react'
import './Product.css'
import { Link } from "react-router-dom";

function Product({name, price, product_url, rating, id:item}) {

  const averageRating = rating

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
              {Array(5)
                .fill()
                .map((_, i) => {
                  let currentRating = i + 1
                  return (
                  <p key={i}>
                    <i key={i} className={`fas fa-star ${currentRating <= averageRating ? `star-yellow` : `star-gray`}`}></i>
                  </p>
                )})}
            </div>
          </div>
          <img src={`${product_url}`} alt="" />
        </div>
      </Link>
    );
}

export default Product
