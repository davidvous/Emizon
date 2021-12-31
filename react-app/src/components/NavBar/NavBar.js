
import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import LogoutButton from '../auth/LogoutButton';
import Category from './Category';
import './NavBar.css'
import { getCart } from '../../store/cart';
import { getProducts } from '../../store/products';

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const cartItems = useSelector((state) => Object.values(state.cart));
  const [departments, setDepartments] = useState('');

  useEffect(() => {
    (async () => { 
      await dispatch(getCart(user?.id))
    })()
  },[dispatch, user])

  useEffect(() => {
    (async () => {
      const data = await dispatch(getProducts());
      setDepartments(Object.values(data).map(each => each.department))
    })();
  },[]);

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
          <div className="header__metaBasket">
            <Link to="/cart" exact="true">
              <div className="header__basket__wrapper">
                <span className="header__basket__badge">
                {user
                  ? Object.keys(cartItems).reduce(function (previous, key) {
                    return previous + cartItems[key].quantity;
                  }, 0)
                  : 0}
                </span>
              </div>
            </Link>
            <Link to="/cart" exact="true">
              <i className="fas fa-shopping-basket fa-lg fa-colored"></i>
            </Link>
          </div>
          {user?.id && <LogoutButton />}
        </div>
      </div>
      <Category departments={departments} />
    </nav>
  );
}

export default NavBar;
