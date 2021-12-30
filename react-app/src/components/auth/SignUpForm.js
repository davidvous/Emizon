import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import '../../components/UserReviews/ReviewModal.css'

const SignUpForm = ({setShowModal}) => {
  let [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const validate = () => {

    const validationErrors = [];
    if (!/^[a-z ,.'-]+$/i.test(firstName)) validationErrors.push("First name is invalid")
    if (firstName.length > 50) validationErrors.push("First name too long");
    if (!/^[a-z ,.'-]+$/i.test(lastName)) validationErrors.push("Last name is invalid")
    if (lastName.length > 50) validationErrors.push("Last name too long");
    if (
      !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        email
      )
    )
      validationErrors.push("Please enter a valid e-mail");
    if (!password) validationErrors.push("Please enter a password");
    if (!repeatPassword) validationErrors.push("Please confirm password");
    if (password !== repeatPassword) validationErrors.push("Passwords do not match")

    return validationErrors;
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    errors = validate();
    if (errors.length > 0) return setErrors(errors);
      const data = await dispatch(signUp(firstName, lastName, email, password));
      if (data) {
        return setErrors(data)
    }
    setShowModal(false);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id="signup__container">
      <div className="signup__container__left__box">
        <h1>Sign Up</h1>
        <div className="validation__errors">
          {errors.map((error, ind) => (
            <div key={ind}>{error.includes('email :') ? 'Email already in use' : error}</div>
          ))}
        </div>
        <input
          type="text"
          name="firstName"
          onChange={updateFirstName}
          placeholder="First Name"
          value={firstName}
        ></input>
        <input
          type="text"
          name="lastName"
          onChange={updateLastName}
          placeholder="Last Name"
          value={lastName}
        ></input>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          placeholder="Email"
          value={email}
        ></input>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          placeholder="Password"
          value={password}
        ></input>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          placeholder="Confirm Password"
          required={true}
        ></input>
        <button
          className="submit__button pointer"
          onClick={onSignUp}
          type="submit"
        >
          Sign Up
        </button>
      </div>
      <div className="signup__container__right__box">
        <span className="signup__headone">Emi</span>
        <span className="signup__headtwo">zon</span>
        <br />
        <span className="signup__tagline">"smile"</span>
      </div>
    </div>
  );
};

export default SignUpForm;
