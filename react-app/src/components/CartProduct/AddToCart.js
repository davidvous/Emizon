import React from 'react'
import { addCart } from "../../store/cart";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

function AddToCart({user, productId}) {
      const dispatch = useDispatch();

      const addToCart = () => {
        dispatch(addCart(user?.id, productId));
      };

      return (
        <> 
          {user?.id ? <button className="addToCart__button pointer" onClick={addToCart}>Add to Cart</button> :
          <Link to="/login"><button className="addToCart__button pointer">Add to Cart</button></Link>}
        </>



          // <button
          //   className="addToCart__button pointer"
          //   onClick={user?.id ? () => addToCart() : () => window.location.href="/login"}
          // >
          //   Add to Cart
          // </button>
      );
}

export default AddToCart
