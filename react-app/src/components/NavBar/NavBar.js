
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import LogoutButton from '../auth/LogoutButton';
import Category from './Category';
import './NavBar.css'
import { getCart } from "../../store/cart";

const NavBar = () => {

  const cartItems = useSelector((state) => Object.values(state.cart));

  return (
    <nav>
      <div className="header">
        <Link to="/" exact="true">
          <h1 className="header__title">Emizon</h1>
        </Link>
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
          <Link to="/cart" exact="true">
            <i className="fas fa-shopping-basket fa-lg"></i>
          </Link>
          <Link to="/cart" exact="true">
            <span className="header__metaLineTwo header__basketCount">{cartItems.length}</span>
          </Link>
        </div>
        <LogoutButton />
      </div>
      <Category />
    </nav>
  );
}

export default NavBar;
