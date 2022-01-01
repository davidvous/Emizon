import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./ConfirmOrder.css";
import { useDispatch } from "react-redux";
import { updateOneCart, deleteCartLine } from "../../store/cart";

function IndivConfirmOrder({cartInfo, userId}) {
  const cartItems = useSelector(state => Object.values(state.cart))
  const dispatch = useDispatch();
  const [itemQuantity, setItemQuantity] = useState(cartInfo.quantity);
  const [errors, setErrors] = useState([]);

  const updateItem = () => {
    if (errors.length > 0) return;
    dispatch(
      updateOneCart(userId, cartInfo.product_id, {
        "quantity": itemQuantity,
      })
    );
  };

  const removeItem = () => {
    dispatch(deleteCartLine(userId, cartInfo.product_id));
  };

  useEffect(() => {
    const validationErrors = [];
    if (!/^[1-9][0-9]*$/.test(itemQuantity))
      validationErrors.push("Please enter a valid quantity of 1 or more");
    if (itemQuantity > 999)
      validationErrors.push("Please call wholesale for quantities over 999!");
    setErrors(validationErrors);
  }, [itemQuantity]);

  const changeQuantity = (e) => {
    setItemQuantity(e.target.value);
  };

  const currentDate = (flag) => {
    let today = new Date();
    today.setDate(today.getDate() + 7);
    if (flag === "delivery") {
      const options = { month: "short", day: "numeric", year:"numeric" };
      return today.toLocaleDateString("en-US", options);
    } else if (flag === "shipping") {
      const options = { weekday: "long", month: "short", day: "numeric" };
      return today.toLocaleDateString("en-US", options);
    }
  };

  return (
    <>
      <div className="confirmOrder__shipping__info__review__details">
        <div>
          <h3>Delivery date: {currentDate("delivery")}</h3>
          <span>If you order in the next 13 hours and 4 minutes</span>
          <span>(Details)</span>
        </div>
      </div>
      <span className="confirmOrder__shipping__shippedFromEmizon">
        Items shipped from Emizon.com
      </span>
      <div className="confirmOrder__shipping__info__review__item__container">
        <div className="confirmOrder__shipping__info__review__item__product">
          <Link to={`/products/${cartInfo.product_id}`}>
            <img
              alt="productimg"
              className="confirmOrder__shipping__info__review__item__image"
              src={cartInfo.product_info.product_url}
            />
          </Link>
          <div className="confirmOrder__shipping__info__review__item__product__details">
            <h4><Link to={`/products/${cartInfo.product_id}`}>{cartInfo.product_info.name}</Link></h4>
            <span>{cartInfo.product_info.department}</span>
            <div className="confirmOrder__shipping__info__review__item__product__details__price">
              <span>${cartInfo.product_info.price}</span>
              <span>*Smile</span>
              <span>& FREE Returns</span>
            </div>
            {errors.map((error, ind) => (
              <div className="cartProduct__remove__error" key={ind}>
                {error}
              </div>
            ))}
            <div className="cartProduct__remove__buttons">
              <span>Qty:</span>
              <input
                className="cartProduct__remove__input pointer"
                type="number"
                name="cart_quantity"
                required
                onBlur={updateItem}
                onChange={changeQuantity}
                value={itemQuantity}
              ></input>
              <button className="pointer" onClick={removeItem}>
                Remove from Cart
              </button>
            </div>
            <span>Sold by: Emizon.com services LLC</span>
            <button>Add gift options</button>
          </div>
        </div>
        <div className="confirmOrder__shipping__info__review__item__delivery">
          <h4>Your Smile delivery option:</h4>
          <div>
            <input type="radio" checked="yes" readOnly></input>
            <span>{currentDate("shipping")}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndivConfirmOrder;
