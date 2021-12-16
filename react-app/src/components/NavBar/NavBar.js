
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import Category from './Category';
import './NavBar.css'


    //  <li>
    //       <NavLink to="/" exact={true} activeClassName="active">
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/login" exact={true} activeClassName="active">
    //         Login
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/sign-up" exact={true} activeClassName="active">
    //         Sign Up
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/users" exact={true} activeClassName="active">
    //         Users
    //       </NavLink>
    //     </li>
    //     <li>
    //       <LogoutButton />
    //   </li>


const NavBar = () => {
  return (
    <nav>
      <div className="header">
        <h1 className="header__title">Emizon</h1>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <i className="fas fa-search header__searchIcon"></i>
        </div>
        <div className="header__nav">
          <div className="header__meta">
            <span className="header__metaLineOne">Hello Guest!</span>
            <span className="header__metaLineTwo">Account & Lists</span>
          </div>
          <div className="header__meta">
            <span className="header__metaLineOne">Returns</span>
            <span className="header__metaLineTwo">& Orders</span>
          </div>
          <div className="header__meta">
            <span className="header__metaLineOne">Your</span>
            <span className="header__metaLineTwo">Prime</span>
          </div>
        </div>
        <div className="header__metaBasket">
          <i className="fas fa-shopping-basket fa-lg"></i>
          <span className="header__metaLineTwo header__basketCount">0</span>
        </div>
      </div>
        <Category/>
    </nav>
  );
}

export default NavBar;
