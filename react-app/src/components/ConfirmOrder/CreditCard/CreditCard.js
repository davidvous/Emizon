import "./CreditCard.css";
import Cards from "react-credit-cards";

function CreditCard({
  setFirstName,
  firstName,
  lastName,
  setLastName,
  address,
  setAddress,
  city,
  setCity,
  usState,
  setUsState,
  zipCode,
  setZipCode,
}) {

  const updateCCNumber = (e) => {
    setFirstName(e.target.value);
  };

  const updateCCDate = (e) => {
    setLastName(e.target.value);
  };

  const updateSecureCode = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="credit__card__container slideDownAnimation">
      <div className="credit__card__top__heading">
        <h4>Enter credit or debit card information</h4>
      </div>
      <div className="credit__card__middle">
        <div className="credit__card__middle__details">
          <div className="credit__card__number">
            <span>Card Number</span>
            <input type="text" maxLength="16"></input>
          </div>
          <div className="credit__card__expiration">
            <span>Expiration date</span>
            <div className="credit__card__expiration__dates">
              <div className="credit__card__expiration__dates__monthyear">
                <input type="text" placeholder="MM" maxLength="2"></input>
                <input type="text" placeholder="YYYY" maxLength="4"></input>
              </div>
              <div className="credit__card__default__payment">
                <i className="far fa-check-square"></i>
                <span>Set as default payment method.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="credit__card__middle__sugoi">
          <span>Emizon accepts all major credit and debit cards.</span>
          <Cards
            cvc="123"
            expiry="10/20"
            name="John Smith"
            number="5066 9911 1111 1118"
          />
        </div>
      </div>
      <div className="credit__card__bottom">
        <div className="credit__card__bottom__buttons">
          <button>Cancel</button>
          <button>Add your card</button>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
