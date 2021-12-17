import React from 'react'
import './Cart.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getCart } from '../../store/cart'
import CartProduct from '../CartProduct/CartProduct';

function Cart() {
    const user = useSelector((state) => state.session.user);
    const cartItems = useSelector((state) => Object.values(state.cart));
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    const userCheck = () => {
        if (!user) return <Redirect to="/login" />;
        else {
            dispatch(getCart(user?.id));
            setLoaded(true);
        }
    }

    useEffect(() => {
      (async () => {
          await userCheck()
      })();
    }, [dispatch]);

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
            {loaded
              ? [
                  cartItems.length > 0 ? (
                    cartItems.map((each, idx) => (
                      <CartProduct
                        key={idx}
                        id={each.product_id}
                        product_url={each.product_info.product_url}
                        name={each.product_info.name}
                        price={each.product_info.price}
                        rating={each.product_info.average_rating}
                        quantity={each.quantity}
                        userId={user.id}
                      />
                    ))
                  ) : (
                    <h1>The cart is empty!</h1>
                  ),
                ]
              : null}
          </div>
        </div>
        <div className="cart__right">
          <div className="subtotal">
            <p>
              Subtotal (
              {Object.keys(cartItems).reduce(function (previous, key) {
                return previous + cartItems[key].quantity;
              }, 0)}{" "}
              items):{" "}
              <strong>
              </strong>
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
