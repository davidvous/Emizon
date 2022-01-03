import "./ChangeAddress.css";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { newOrderAddress, editOrderAddress } from "../../../store/order";

function ChangeAddress({setShowAddressChange, currentFirstName, currentLastName, userId}) {
  
  let [errors, setErrors] = useState([]);
  const userOrders = useSelector((state) => Object.values(state.order));
  const latestOrder = userOrders[userOrders.length - 1];
  const [firstName, setFirstName] = useState(latestOrder ? latestOrder.first_name : currentFirstName);
  const [lastName, setLastName] = useState(latestOrder ? latestOrder.last_name : currentLastName);
  const [address, setAddress] = useState(latestOrder?.address);
  const [city, setCity] = useState(latestOrder?.city);
  const [usState, setUsState] = useState(latestOrder?.state);
  const [zipCode, setZipCode] = useState(latestOrder?.zipCode);
  const [validationErrors, setValidationErrors] = useState([]);
  const dispatch = useDispatch()

  const states = {
    AL: "Alabama",
    AK: "Alaska",
    AS: "American Samoa",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    DC: "District Of Columbia",
    FM: "Federated States Of Micronesia",
    FL: "Florida",
    GA: "Georgia",
    GU: "Guam",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MH: "Marshall Islands",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    MP: "Northern Mariana Islands",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PW: "Palau",
    PA: "Pennsylvania",
    PR: "Puerto Rico",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VI: "Virgin Islands",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming",
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateAddress = (e) => {
    setAddress(e.target.value);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const updateUsState = (e) => {
    setUsState(e.target.value);
  };

  const updateZipCode = (e) => {
    setZipCode(e.target.value);
  };

  const validate = () => {
    const validateErrors = [];

    if (!/^[a-z ,.'-]+$/i.test(firstName) || firstName === null)
      validateErrors.push("Please check First Name");
    if (!/^[a-z ,.'-]+$/i.test(lastName) || lastName === null)
        validateErrors.push("Please check Last Name");
    if (!address)
      validateErrors.push("Please check Address");
      if (!/^[a-z ,.'-]+$/i.test(city) || lastName === null) validateErrors.push("Please check City");
    if (!usState) validateErrors.push("Please check State");
     if (!/\d{3}/i.test(zipCode))
       validateErrors.push("Please check Zip Code (XXXXX)");


    return validateErrors;
  };

  const onCreate = async (e) => {
    e.preventDefault();
    errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);
    else {
      const data = await dispatch(
        newOrderAddress(userId, address, city, usState, zipCode, firstName, lastName)
      );
      if (data) {
        setErrors(data);
      }
      setShowAddressChange(false);
    }
  };

  const onEdit = async (e) => {
    e.preventDefault();
    errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);
    else {
      const data = await dispatch(
        editOrderAddress(
          userId,
          address,
          city,
          usState,
          zipCode,
          firstName,
          lastName
        )
      );
      if (data) {
        setErrors(data);
      }
      setShowAddressChange(false);
    }
  };

  return (
    <div className="change__address__container slideDownAnimation">
      <div className="change__address__heading">
        <h4>
          {latestOrder
            ? `Edit Shipping Address`
            : `Enter a new shipping address`}
        </h4>
      </div>
      {validationErrors.length > 0 && (
        <div className="addressErrors">
          <ul>
            {validationErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="change__address__form">
        <h2>{latestOrder ? `Edit Address` : `Add a new address`}</h2>
        <div className="change__address__country">
          <span>Country/Region</span>
          <select id="country" className="general__button">
            <option value="United States">United States</option>
          </select>
        </div>
        <div className="change__address__name">
          <div className="change__address__first__name">
            <span>First Name</span>
            <input
              type="text"
              name="first_name"
              value={firstName}
              placeholder="First Name"
              onChange={updateFirstName}
            ></input>
          </div>
          <div className="change__address__last__name">
            <span>Last Name</span>
            <input
              type="text"
              name="last_name"
              value={lastName}
              placeholder="Last Name"
              onChange={updateLastName}
            ></input>
          </div>
        </div>
        <div className="change__address__address">
          <span className="change__address__span">Address</span>
          <input
            type="text"
            placeholder="Street address or P.O. Box"
            name="address"
            value={address}
            onChange={updateAddress}
          ></input>
        </div>
        <div className="change__address__meta">
          <div className="change__address__meta__city">
            <span>City</span>
            <input
              type="text"
              name="city"
              value={city}
              placeholder="City"
              onChange={updateCity}
            ></input>
          </div>
          <div className="change__address__meta__state">
            <span>State</span>
            <select id="state" onChange={updateUsState} defaultValue={usState}>
              {Object.keys(states).map((each, idx) => (
                <option value={each} key={idx}>
                  {each}
                </option>
              ))}
            </select>
          </div>
          <div className="change__address__meta__zipCode">
            <span>ZIP Code</span>
            <input
              type="text"
              name="zipCode"
              value={zipCode}
              onChange={updateZipCode}
              placeholder="Zip Code"
              maxLength="5"
            ></input>
          </div>
        </div>
        <div className="change__address__default__address">
          <i className="far fa-check-square"></i>
          <span>Make this my default address</span>
        </div>
        {(() => {
          if (latestOrder)
            if (Object.values(latestOrder).includes(null))
              return (
                <button onClick={onEdit} className="pointer">
                  Use this address
                </button>
              );
            else
              return (
                <button onClick={onCreate} className="pointer">
                  Use this address
                </button>
              );
        })()}
      </div>
    </div>
  );
}

export default ChangeAddress;
