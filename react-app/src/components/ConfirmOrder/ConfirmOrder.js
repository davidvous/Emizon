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
      const [showAddressChange, setShowAddressChange] = useState(false);
      const [showCreditCard, setShowCreditCard] = useState(false);
      
      const [firstName, setFirstName] = useState('')
      const [lastName, setLastName] = useState('');
      const [address, setAddress] = useState(latestOrder?.address);
      const [city, setCity] = useState(latestOrder?.city);
      const [usState, setUsState] = useState(latestOrder?.state);
      const [zipCode, setZipCode] = useState(latestOrder?.zipCode);

      const [creditNum, setCreditNum] = useState(latestOrder?.credit_card)
      const [creditDate, setCreditDate] = useState(latestOrder?.expiration_date)
      const [creditCode, setCreditCode] = useState(latestOrder?.cc_code)

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

      useEffect(() => {
        latestOrder ? setFirstName(latestOrder.first_name) : setFirstName(user.first_name);
        latestOrder ? setLastName(latestOrder.last_name) : setLastName(user.last_name);
        setAddress(latestOrder?.address);
        setCity(latestOrder?.city);
        setUsState(latestOrder?.state);
        setZipCode(latestOrder?.zipCode)
      }, [latestOrder?.first_name, latestOrder?.last_name, latestOrder?.address, latestOrder?.city, latestOrder?.state, latestOrder?.zipCode]);

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

    console.log("DOES THIS EXIST??!", latestOrder)
    console.log("CAN I DO THIS?!?", latestOrder ? Object.values(latestOrder).includes(null) : 'IT DOESNT EXIST')
    
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
                  {latestOrder ? latestOrder.first_name : user.last_name}
                </span>
                <span>{latestOrder ? latestOrder.address : null}</span>
                <span>
                  {latestOrder ? `${latestOrder.city}, ` : null}
                  {latestOrder ? latestOrder.state : null}
                  {latestOrder ? ` ${latestOrder.zipCode}` : null}
                </span>
              </div>
              <button
                className="pointer order__change__button"
                onClick={() => setShowAddressChange(true)}
              >
                {address ? `Change` : `Add Info`}
              </button>
              {showAddressChange && (
                <Modal onClose={() => setShowAddressChange(false)}>
                  <ChangeAddress
                    setShowAddressChange={setShowAddressChange}
                    currentFirstName={user?.first_name}
                    currentLastName={user?.last_name}
                    userId = {user.id}
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
                  <span>Credit Card</span>
                  <span>
                    ending in{" "}
                    {latestOrder
                      ? latestOrder.credit_card?.slice(-4)
                      : [creditNum ? creditNum.slice(-4) : `0000`]}
                  </span>
                </div>
                <div className="confirmOrder__shipping__info__billing">
                  <span>Billing address: </span>
                  <span>
                    {latestOrder
                      ? ` ${latestOrder.city}, ${latestOrder.state} ${latestOrder.zipCode}`
                      : `${city}, ${usState} ${zipCode}`}
                  </span>
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
                    creditNum={creditNum}
                    setCreditNum={setCreditNum}
                    creditDate={creditDate}
                    setCreditDate={setCreditDate}
                    creditCode={creditCode}
                    setCreditCode={setCreditCode}
                    firstName={firstName}
                    lastName={lastName}
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
