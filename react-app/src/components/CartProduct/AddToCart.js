import React from 'react'
import { addCart } from "../../store/cart";
import { useDispatch } from 'react-redux';

function AddToCart({user, productId}) {
      const dispatch = useDispatch();

      const addToCart = () => {
        dispatch(addCart(user?.id, productId));
      };

    return (
      <button className="addToCart__button" onClick={() => addToCart()}>
        Add to Cart
      </button>
    );
}

export default AddToCart
