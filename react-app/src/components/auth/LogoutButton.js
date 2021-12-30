import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory } from "react-router";

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push("/");
  };

  return (
    <div onClick={onLogout} className="logout__container pointer">
      <span className="header__metaLineOne">logout</span>
      <i className="fas fa-sign-out-alt fa-lg fa-colored"> </i>
    </div>
  );
};

export default LogoutButton;
