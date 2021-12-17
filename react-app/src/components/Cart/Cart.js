import React from 'react'
import './Cart.css'
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function Cart() {
    const user = useSelector((state) => state.session.user);

    if (!user) {
    return <Redirect to="/login" />;
    }

    return (
      <div className="cart">
        <div className="cart__left">
          <img
            alt="cart__fakeAd"
            className="cart__fakeAd"
            src="https://cdn.discordapp.com/attachments/920474033932349511/921157060027093002/cart_medium.png"
          />
          <div>
            <h2 className="cart__title">Your Shopping Cart</h2>
            <h3>BasketItem</h3>
            <h3>BasketItem</h3>
            <h3>BasketItem</h3>
            <h3>BasketItem</h3>
          </div>
        </div>
        <div className="cart__right">
          <div className="subtotal">
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    );
}

export default Cart
