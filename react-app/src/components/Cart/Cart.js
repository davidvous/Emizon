import React from 'react'
import './Cart.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
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

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",

      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    const cartSubTotal = Object.keys(cartItems).reduce(function (previous, key) {
      return previous + parseFloat((cartItems[key].product_info.price)*cartItems[key].quantity);
    }, 0.00);

    useEffect(() => {
      (async () => {
          await userCheck()
      })();
    }, []);

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
                        key={each.product_id}
                        id={each.product_id}
                        product_url={each.product_info.product_url}
                        name={each.product_info.name}
                        price={each.product_info.price}
                        total_rating={each.product_info.average_rating_total}
                        rating_length={each.product_info.average_rating_length}
                        quantity={each.quantity}
                        userId={user.id}
                      />
                    ))
                  ) : (
                    <h1 key="cartEmptyMessage">The cart is empty!</h1>
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
              items):
              <strong>{formatter.format(cartSubTotal)}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
            {cartItems.length > 0 && <Link to="/confirmOrder">
              <button className="pointer">Proceed to Checkout</button>
            </Link>}
          </div>
        </div>
      </div>
    );
}

export default Cart
