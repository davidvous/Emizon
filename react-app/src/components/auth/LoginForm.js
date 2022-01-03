import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import { Modal } from '../../context/Modal'
import './LoginForm.css'
import SignUpForm from './SignUpForm';

const LoginForm = () => {
  let [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

   const validate = () => {
     const validationErrors = [];
     if (
       !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
         email
       )
     )
       validationErrors.push("Please enter a valid e-mail");
     if (!password) validationErrors.push("Please enter a password");

     return validationErrors;
   };

  const onLogin = async (e) => {
    e.preventDefault();
    errors = validate();
    if (errors.length > 0) return setErrors(errors);
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    await dispatch(login("demo@demouser.com", "password"));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="login">
      <img alt="emizon_logo" src="https://cdn.discordapp.com/attachments/920474033932349511/927560040309751828/emizon_logo.png"/>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <div className="validation__errors ">
            <center>
              {errors.map((error, ind) => (
                <div key={ind}>
                  {error.includes("password :")
                    ? error.substr(10,error.length-1)
                    : error.includes("email")
                    ? error.substr(7,error.length-1)
                    : error}
                </div>
              ))}
            </center>
          </div>
          <div>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
            <div className="login__buttons">
              <button
                onClick={onLogin}
                className="submit__button pointer"
                type="submit"
              >
                Login
              </button>
              <button onClick={demoLogin} className="submit__button pointer">
                Demo User
              </button>
            </div>
          </div>
        </form>
        <p>
          By signing-in you agree to the Emizon conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button
          className="login__signInButton pointer"
          onClick={() => setShowModal(true)}
        >
          Create Your Emizon account
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <SignUpForm setShowModal={setShowModal} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
