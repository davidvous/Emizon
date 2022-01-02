import "./CreditCard.css";
import Cards from "react-credit-cards";
import { useState } from 'react';

function CreditCard({setShowCreditCard, creditNum, setCreditNum, creditDate, setCreditDate, creditCode, setCreditCode, firstName, lastName
}) {
    const [focus, setFocus] = useState('')

  const updateCCNumber = (e) => {
    setCreditNum(e.target.value);
  };

  const updateCCDate = (e) => {
    setCreditDate(e.target.value);
  };

  const updateSecureCode = (e) => {
    setCreditCode(e.target.value);
  };

  const handleInputFocus = (e) => {
    setFocus(e.target.name)
  }

  return (
    <div className="credit__card__container slideDownAnimation">
      <div className="credit__card__top__heading">
        <h4>Enter credit or debit card information</h4>
      </div>
      <div className="credit__card__middle">
        <div className="credit__card__middle__details">
          <div className="credit__card__number">
            <span>Card Number</span>
            <input
              type="text"
              maxLength="16"
              name="credit_card"
              placeholder={creditNum ? creditNum : `0000000000000000`}
              value={creditNum}
              onChange={updateCCNumber}
              onFocus={(e) => handleInputFocus(e)}
            ></input>
          </div>
          <div className="credit__card__expiration">
            <span>Expiration date</span>
            <div className="credit__card__expiration__dates">
              <div className="credit__card__expiration__dates__monthyear">
                <input
                  type="text"
                  placeholder="MMYY"
                  maxLength="4"
                  name="expiration_date"
                  value={creditDate}
                  onChange={updateCCDate}
                  onFocus={(e) => handleInputFocus(e)}
                ></input>
                <input type="text" placeholder="CVC" maxLength="3"></input>
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
            expiry={creditDate ? creditDate : `0000`}
            name={`${firstName} ${lastName}`}
            number={creditNum ? creditNum : `0000000000000000`}
            focused={focus}
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
