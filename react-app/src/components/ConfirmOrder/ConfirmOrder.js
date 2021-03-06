import './ConfirmOrder.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect} from "react-router-dom";
import { getCart } from "../../store/cart";
import { getOrders } from '../../store/order';
import IndivConfirmOrder from './IndivConfirmOrder';
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";
import "react-credit-cards/es/styles-compiled.css";
import { Modal } from '../../context/Modal';
import ChangeAddress from './ChangeAddress/ChangeAddress';
import CreditCard from './CreditCard/CreditCard';
import FinalConfirm from './FinalConfirm/FinalConfirm';
import { newOrderFinal } from '../../store/order';
import { useHistory } from 'react-router-dom';
import { deleteCartLine } from '../../store/cart';

const override = css`
  display: block;
  position: absolute;
  top: 50vh;
  left: 50vw;
  margin: 0 auto;
  border-color: red;
`;


function ConfirmOrder() {
      const user = useSelector((state) => state.session.user);
      const cartItems = useSelector((state) => Object.values(state.cart));
      const userOrders = useSelector((state) => Object.values(state.order));
      const latestOrder = userOrders[userOrders.length-1];
      const [flag, setFlag] = useState(true);
      const [loaded, setLoaded] = useState(false);
      const [showAddressChange, setShowAddressChange] = useState(false);
      const [showCreditCard, setShowCreditCard] = useState(false);
      const [showOrderError, setShowOrderError] = useState(false);

      let [loading, setLoading] = useState(false);
      let [color, setColor] = useState("grey");
      const dispatch = useDispatch();
      const history = useHistory();

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

    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const bodyOverlay = () => {
      const overlay = document.createElement("div")
      overlay.id = "overlay";
      document.body.appendChild(overlay)
    }

    const createOrder = async (e) => {
      e.preventDefault();
      const cartDict = {};
      const cartAdder = await Object.values(cartItems).forEach(
        (ele, index) => (cartDict[ele.product_id] = ele.quantity)
      );
      const data = await dispatch(
          newOrderFinal(
            user.id,
            cartDict
          )
      );
      if (data) {
        setShowOrderError(true);
      } else {
        bodyOverlay();
        setLoading(true);
        await sleep(1300);
        const overlay = document.getElementById("overlay");
        await Object.values(cartItems).forEach((each) =>
          dispatch(deleteCartLine(each.user_id, each.product_id))
        );
        await document.body.removeChild(overlay);
        await setLoading(false);
        history.push("/orders");
      }
    };
  
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
                  {latestOrder ? latestOrder.first_name : user.first_name}{" "}
                  {latestOrder ? latestOrder.last_name : user.last_name}
                </span>
                <span>{latestOrder ? latestOrder.address : null}</span>
                <span>
                  {latestOrder?.city ? `${latestOrder.city}, ` : null}
                  {latestOrder ? latestOrder.state : null}
                  {latestOrder?.zipCode ? (
                    ` ${latestOrder.zipCode}`
                  ) : (
                    <span key="shipping_check" style={{ color: "red" }}>
                      Please enter shipping info
                    </span>
                  )}
                </span>
              </div>
              <button
                className="pointer order__change__button"
                onClick={() => setShowAddressChange(true)}
              >
                {latestOrder?.address ? `Change` : `Add Info`}
              </button>
              {showAddressChange && (
                <Modal onClose={() => setShowAddressChange(false)}>
                  <ChangeAddress
                    setShowAddressChange={setShowAddressChange}
                    currentFirstName={user?.first_name}
                    currentLastName={user?.last_name}
                    userId={user.id}
                  />
                </Modal>
              )}
            </div>
            <hr></hr>
            <div className="confirmOrder__shipping__info__address">
              <h3>2</h3>
              <h3>Payment method</h3>
              <div className="confirmOrder__shipping__info__address__details">
                <div className="confirmOrder__shipping__info__payment__cc">
                  <i className="far fa-credit-card"></i>
                  <span>
                    {latestOrder?.credit_card ? (
                      <span>
                        Credit Card ending in{" "}
                        {latestOrder.credit_card?.slice(-4)}
                      </span>
                    ) : (
                      <span style={{ color: "red" }}>
                        Please enter payment method
                      </span>
                    )}
                  </span>
                </div>
                <div className="confirmOrder__shipping__info__billing">
                  <span>Billing address: </span>
                  <span>
                    <strong>
                      {latestOrder?.address ? (
                        latestOrder.address
                      ) : (
                        <span style={{ color: "red" }}>
                          Please review shipping address
                        </span>
                      )}
                    </strong>
                  </span>
                </div>
                <div className="confirmOrder__shipping__info__gift">
                  <span>^</span>
                  <span>Add a gift card or promotion code or voucher</span>
                </div>
                <div className="confirmOrder__shipping__info__gift">
                  <input type="text" placeholder="Enter code"></input>
                  <button className="disabled general__button">Apply</button>
                </div>
              </div>
              <button
                className="pointer order__change__button"
                onClick={() => setShowCreditCard(true)}
              >
                Change
              </button>
              {showCreditCard && (
                <Modal onClose={() => setShowCreditCard(false)}>
                  <CreditCard
                    setShowCreditCard={setShowCreditCard}
                    currentFirstName={user?.first_name}
                    currentLastName={user?.last_name}
                    userId={user.id}
                    latestOrder={latestOrder}
                  />
                </Modal>
              )}
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
                      latestOrder={latestOrder}
                      userId={user.id}
                      cartInfo={each}
                      setFlag={setFlag}
                    />
                  ))}
              </div>
              <div className="confirmOrder__shipping__info__review__place">
                <button className="pointer general__button" onClick={createOrder}>Place Your Order</button>
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
                <button className="general__button pointer" onClick={createOrder}>Place your order</button>
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
        {showOrderError && (
          <Modal onClose={() => setShowOrderError(false)}>
            <FinalConfirm
              setShowOrderError={setShowOrderError}
            />
          </Modal>
        )}
      </div>
    );
}

export default ConfirmOrder
