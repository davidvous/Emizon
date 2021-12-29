import React from 'react'
import { addCart } from "../../store/cart";
import { useDispatch } from 'react-redux';

function AddToCart({user, productId}) {
      const dispatch = useDispatch();

      const addToCart = () => {
        dispatch(addCart(user?.id, productId));
      };

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
