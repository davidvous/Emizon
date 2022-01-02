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
      <div classNAme="credit__card__middle">
        <div className="credit__card__middle__details">
          <div className="credit__card__number">
            <span>Card Number</span>
            <input type="text"></input>
          </div>
          <div className="credit__card__expiration">
            <span>Expiration date</span>
            <input type="text" placeholder="01" maxlength="2"></input>
            <input type="text" placeholder="2022" maxlength="4"></input>
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
    </div>
  );
}

export default CreditCard;
