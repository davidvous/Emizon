import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProductDetail() {
    const { productId } = useParams()
    const product = useSelector(state => state.products)

    return (
        <div>
            <h1>This is Product Number { productId } </h1>
            <h1>{product?.[productId]?.name} </h1>
        </div>
    )
}

export default ProductDetail
