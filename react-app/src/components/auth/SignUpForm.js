import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import '../../components/UserReviews/ReviewModal.css'

const SignUpForm = ({setShowModal}) => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, email, password));
      setShowModal(false)
      if (data) {
        setErrors(data)
      }
    }
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
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
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
          onSubmit={onSignUp}
          type="submit"
        >
          Sign Up
        </button>
      </div>
      <div className="signup__container__right__box">
        <span className="signup__headone">Emi</span><span className="signup__headtwo">zon</span>
        <br/>
        <span className="signup__tagline">"smile"</span>
      </div>
    </div>
  );
};

export default SignUpForm;
