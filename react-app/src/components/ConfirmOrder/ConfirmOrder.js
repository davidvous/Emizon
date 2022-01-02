import './ConfirmOrder.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect} from "react-router-dom";
import { getCart } from "../../store/cart";
import { getOrders } from '../../store/order';
import IndivConfirmOrder from './IndivConfirmOrder';
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


function ConfirmOrder() {
      const user = useSelector((state) => state.session.user);
      const cartItems = useSelector((state) => Object.values(state.cart));
      const userOrders = useSelector((state) => Object.values(state.order));
      const latestOrder = userOrders[userOrders.length-1]
      const [flag, setFlag] = useState(true)
      const [loaded, setLoaded] = useState(false);
      let [loading, setLoading] = useState(true);
      let [color, setColor] = useState("red");
      const dispatch = useDispatch();

      const userCheck = () => {
          dispatch(getCart(user?.id));
          dispatch(getOrders(user?.id));
          setLoaded(true);
      };

      
      useEffect(() => {
        (async () => {
          await userCheck();
        })();
      }, []);

      if (!user || !flag) {
        return <Redirect to="/login" />;
      }

      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

    const cartSubTotal = Object.keys(cartItems).reduce(function (
      previous,
      key
    ) {
      return (
        previous +
        parseFloat(cartItems[key].product_info.price * cartItems[key].quantity)
      );
    },
    0.0);

    console.log("This is the user's latest ORDER>>>>>", latestOrder)
    return (
      <div className="confirmOrder__master__container">
        <nav></nav>
        <div className="confirmOrder__container">
          <div className="confirmOrder__shipping__info">
            <div className="confirmOrder__shipping__info__address">
              <h3>1</h3>
              <h3>Shipping Address</h3>
              <div className="confirmOrder__shipping__info__address__details">
                <span>
                  {latestOrder?.first_name} {latestOrder?.last_name}
                </span>
                <span>{latestOrder?.address}</span>
                <span>
                  {latestOrder?.city}, {latestOrder?.state}{" "}
                  {latestOrder?.zipCode}
                </span>
              </div>
              <h5>Change</h5>
            </div>
            <hr></hr>
            <div className="confirmOrder__shipping__info__address">
              <h3>2</h3>
              <h3>Payment method</h3>
              <div className="confirmOrder__shipping__info__address__details">
                <div className="confirmOrder__shipping__info__payment__cc">
                  <Cards
                    cvc="123"
                    expiry="10/20"
                    name="John Smith"
                    number="5066 9911 1111 1118"
                  />
                  <h3>[CCPic]</h3>
                  <span>Credit Card</span>
                  <span>ending in {latestOrder?.credit_card.slice(-4)}</span>
                </div>
                <div className="confirmOrder__shipping__info__billing">
                  <span>Billing address:</span>
                  <span>City, State Zip Code</span>
                </div>
                <div className="confirmOrder__shipping__info__gift">
                  <span>^</span>
                  <span>Add a gift card or promotion code or voucher</span>
                </div>
                <div className="confirmOrder__shipping__info__gift">
                  <input type="text" placeholder="Enter code"></input>
                  <button>Apply</button>
                </div>
              </div>
              <h5>Change</h5>
            </div>
            <hr></hr>
            <div className="confirmOrder__shipping__info__review">
              <h3>3</h3>
              <h3>Review items and shipping</h3>
            </div>
            <div className="confirmOrder__shipping__info__master">
              <div className="confirmOrder__shipping__info__review__container">
                <div className="confirmOrder__shipping__info__review__headline">
                  <div className="confirmOrder__shipping__info__review__headline__box">
                    <div className="confirmOrder__shipping__info__review__headline__border"></div>
                    <span>
                      Select FREE Emizon Day Delivery below to reduce delivery
                      trips
                    </span>
                  </div>
                </div>
                {loaded &&
                  cartItems.map((each, id) => (
                    <IndivConfirmOrder
                      key={each.product_id}
                      userId={user.id}
                      cartInfo={each}
                      setFlag={setFlag}
                    />
                  ))}
              </div>
              <div className="confirmOrder__shipping__info__review__place">
                <button>Place Your Order</button>
                <div className="confirmOrder__shipping__info__review__place_total">
                  <h3>Order total: {formatter.format(cartSubTotal)}</h3>
                  <span>
                    By placing your order, you agree to Emizon's privacy notice
                    and conditions of use.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="confirmOrder__place__order">
            <div className="confirmOrder__place__container">
              <div className="confirmOrder__place__order__button">
                <button>Place your order</button>
                <span>
                  By placing your order, you agree to Emizon's privacy notice
                  and conditions of use.
                </span>
              </div>
              <hr></hr>
              <h4>Order Summary</h4>
              <div>
                <span>Items:</span>
                <span>{formatter.format(cartSubTotal)}</span>
              </div>
              <div>
                <span>Shipping & Handling:</span> <span>$0.00</span>
              </div>
              <div>
                <span>Total before tax:</span>
                <span>$0.00</span>
              </div>
              <div>
                <span>Estimate tax to be collected:</span> <span>$0.00</span>
              </div>
              <hr></hr>
              <div>
                <h4>Order total:</h4>
                <h4>{formatter.format(cartSubTotal)}</h4>
              </div>
            </div>
            <div className="confirmOrder__place__order__bottom">
              <span>How are shipping costs calculated?</span>
              <span>
                Smile shipping benefits have been applied to your order.
              </span>
            </div>
          </div>
        </div>

        <BounceLoader
          color={color}
          loading={loading}
          size={60}
          margin={2}
          css={override}
          speedMultiplier={1}
        />
      </div>
    );
}

export default ConfirmOrder
