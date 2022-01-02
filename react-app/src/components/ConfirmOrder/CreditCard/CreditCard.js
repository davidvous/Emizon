import "./CreditCard.css";
import Cards from "react-credit-cards";
import { useState } from 'react';
import { useDispatch} from "react-redux";
import { newOrderPayment, editOrderPayment } from "../../../store/order";

function CreditCard({setShowCreditCard, currentFirstName, currentLastName, userId, latestOrder
}) {
    const [focus, setFocus] = useState('')
    const [creditNum, setCreditNum] = useState(latestOrder?.credit_card);
    const [creditDate, setCreditDate] = useState(latestOrder?.expiration_date);
    const [creditCode, setCreditCode] = useState(latestOrder?.cc_code);
    let [errors, setErrors] = useState([]);
    const [validationErrors, setValidationErrors] = useState([]);
    const dispatch = useDispatch();

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

  const validate = () => {
    const validateErrors = [];

    // if (!headline) validateErrors.push("Please enter a title/headline");
    // if (!body) validateErrors.push("Please enter a review");

    return validateErrors;
  };

  const onCreate = async (e) => {
    e.preventDefault();
    errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);
    else {
      const data = await dispatch(
        newOrderPayment(
          userId,
          creditNum,
          creditDate,
          creditCode
        )
      );
      setShowCreditCard(false);
      if (data) {
        setErrors(data);
      }
    }
  };

  const onEdit = async (e) => {
    e.preventDefault();
    errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);
    else {
      const data = await dispatch(
        editOrderPayment(
          userId,
          creditNum,
          creditDate,
          creditCode,
        )
      );
      setShowCreditCard(false);
      if (data) {
        setErrors(data);
      }
    }
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
                <input
                  type="text"
                  placeholder="CVC"
                  maxLength="3"
                  name="cc_code"
                  value={creditCode}
                  onChange={updateSecureCode}
                ></input>
              </div>
              <div className="credit__card__default__payment">
                <i className="far fa-check-square"></i>
                <span>Set as default payment method.</span>
              </div>
            </div>
          </div>
          {validationErrors.length > 0 && (
            <div className="validationErrors">
              The following errors were found:
              <ul>
                {validationErrors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          {validationErrors.length > 0 && (
            <div className="validationErrors">
              The following errors were found:
              <ul>
                {validationErrors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="credit__card__middle__sugoi">
          <span>Emizon accepts all major credit and debit cards.</span>
          <Cards
            cvc="123"
            expiry={creditDate ? creditDate : `0000`}
            name={
              latestOrder
                ? `${latestOrder.first_name} ${latestOrder.last_name}`
                : `${currentFirstName} ${currentLastName}`
            }
            number={creditNum ? creditNum : `0000000000000000`}
            focused={focus}
          />
        </div>
      </div>
      <div className="credit__card__bottom">
        <div className="credit__card__bottom__buttons">
          <button className="pointer" onClick={() => setShowCreditCard(false)}>
            Cancel
          </button>
          <button
            className="pointer"
            onClick={
              Object.values(latestOrder)?.includes(null)
                ? onEdit
                : onCreate
            }
          >
            {Object.values(latestOrder)?.includes(null) ? `Edit your card` : `Add your card`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
