import "./ChangeAddress.css";
import { useState } from "react";

function ChangeAddress({setFirstName, firstName, lastName, setLastName, address, setAddress, city, setCity, usState, setUsState, zipCode, setZipCode}) {

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

  return (
    <div className="change__address__container slideDownAnimation">
      <div className="change__address__heading">
        <h4>Enter a new shipping address</h4>
      </div>
      <div className="change__address__form">
        <h2>Add a new address</h2>
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
              onChange={updateFirstName}
            ></input>
          </div>
          <div className="change__address__last__name">
            <span>Last Name</span>
            <input
              type="text"
              name="last_name"
              value={lastName}
              onChange={updateLastName}
            ></input>
          </div>
        </div>
        <div className="change__address__address">
          <span>Address</span>
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
              onChange={updateCity}
            ></input>
          </div>
          <div className="change__address__meta__state general__button">
            <span>State</span>
            <select id="state">
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
              maxlength="5"
            ></input>
          </div>
        </div>
        <div className="change__address__default__address">
          <i className="far fa-check-square"></i>
          <span>Make this my default address</span>
        </div>
        <button>Use this address</button>
      </div>
    </div>
  );
}

export default ChangeAddress;
