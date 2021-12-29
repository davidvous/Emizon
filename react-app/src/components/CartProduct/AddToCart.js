import React from 'react'
import { addCart } from "../../store/cart";
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom'

function AddToCart({user, productId}) {
      const dispatch = useDispatch();

      const addToCart = () => {
        dispatch(addCart(user?.id, productId));
      };

      console.log("WHAT IT DO???????>>>", user, user?.id)
      return (
          <button
            className="addToCart__button pointer"
            onClick={user?.id ? () => addToCart() : () => window.location.href="/login"}
          >
            Add to Cart
          </button>
      );
}

export default AddToCart
