import React from 'react'
import './Cart.css'

function Cart() {
    return (
      <div className="cart">
        <div className="cart__left">
          <img alt="cart__fakeAd"
            className="cart__fakeAd"
            src="https://cdn.discordapp.com/attachments/920474033932349511/921157060027093002/cart_medium.png"
          />

        <div>
            <h2 className="cart__title">Your Shopping Cart</h2>   
        </div>

        <div className="cart__right">
            <h2>The subtotal will go here</h2>
        </div>

        </div>
      </div>
    );
}

export default Cart
