import './ConfirmOrder.css'
import IndivConfirmOrder from './IndivConfirmOrder';

function ConfirmOrder() {
    return (
      <div className="confirmOrder__master__container">
        <nav></nav>
        <div className="confirmOrder__container">
          <div className="confirmOrder__shipping__info">
            <div className="confirmOrder__shipping__info__address">
              <h3>1</h3>
              <h3>Shipping Address</h3>
              <div className="confirmOrder__shipping__info__address__details">
                <span>Demo User</span>
                <span>123 Demo Lane</span>
                <span>City, State Zip Code</span>
              </div>
              <h5>Change</h5>
            </div>
            <div className="confirmOrder__shipping__info__address">
              <h3>2</h3>
              <h3>Payment method</h3>
              <div className="confirmOrder__shipping__info__address__details">
                <div className="confirmOrder__shipping__info__payment__cc">
                  <h3>[CCPic]</h3>
                  <span>MasterCard</span>
                  <span>ending in 9999</span>
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
                <IndivConfirmOrder />
                <IndivConfirmOrder />
                <IndivConfirmOrder />
                <div className="confirmOrder__shipping__info__review__place">
                  <button>Place Your Order</button>
                  <div className="confirmOrder__shipping__info__review__place_total">
                    <h3>Order total: $10.83</h3>
                    <span>
                      {" "}
                      By placing your order, you agree to Emizon's privacy
                      notice and conditions of use.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="confirmOrder__place__order">
            <button>Place your order</button>
            <span>
              By placing your order, you agree to Emizon's privacy notice and
              conditions of use.
            </span>
            <hr></hr>
            <h3>Order Summary</h3>
            <span>Items: $9.99</span>
            <span>Shipping & Handling: $0.00</span>
            <span>Total before tax: $9.99</span>
            <span>Estimate tax to be collected: $0.84</span>
            <hr></hr>
            <h3>Order total: $10.83</h3>
          </div>
        </div>
      </div>
    );
}

export default ConfirmOrder
