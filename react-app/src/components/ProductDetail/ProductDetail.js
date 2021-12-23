import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOneProduct } from '../../store/products'
import './ProductDetail.css'

function ProductDetail() {
    const { productId } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.products)

    useEffect(()=> {
        dispatch(getOneProduct(productId))
    },[])

    return (
      <div className="product__detail__container">
        <div className="product_detail__top">
          <div className="product__detail__top__left">Picture of product</div>
          <div className="product__detail__top__middle">
            <h1>{product?.[productId]?.name} </h1>
          </div>
          <div className="product__detail__top__right">Cart information</div>
        </div>
        <h1>This is Product Number {productId} </h1>

        <div className="product__detail__divider" />
        <div className="product__detail__bottom">
          <div className="product__detail__bottom__left">
            Average Reviews and Such
          </div>
          <div className="product__detail__bottom__right">User Reviews</div>
        </div>
      </div>
    );
}

export default ProductDetail
