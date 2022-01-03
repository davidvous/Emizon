
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

  const aboutLinks = {
    linkedin: [
      "https://www.linkedin.com/in/david-vu-le/",
      "https://cdn.discordapp.com/attachments/920474033932349511/927448211612921866/linkedin.png",
    ],
    github: [
      "https://github.com/davidvous",
      "https://cdn.discordapp.com/attachments/920474033932349511/927448182730932234/github.png",
    ],
  };


  return (
    <nav>
      <div className="header">
        <Link className="general__link" to="/" exact="true">
          <h1 className="header__title">Emizon</h1>
        </Link>
        <div className="aboutMe__container">
          <div className="aboutMe">
            <div>
              <span>By</span>
              <span>
                <a href={aboutLinks["github"][0]}>David Le</a>
              </span>
            </div>
            <div>
              <a href={aboutLinks["linkedin"][0]}>
                <img alt="linkedin" src={aboutLinks["linkedin"][1]}></img>
              </a>
            </div>
            <div>
              <a href={aboutLinks["github"][0]}>
                <img alt="github" src={aboutLinks["github"][1]}></img>
              </a>
            </div>
          </div>
        </div>
        <div className="header__search">
          <input className="header__searchInput disabled" type="text" />
          <i className="fas fa-search header__searchIcon disabled"></i>
        </div>
        <div className="header__nav">
          <div className="header__meta">
            <span className="header__metaLineOne">
              Hello {user ? user.first_name : null}!
            </span>
            <span className="header__metaLineTwo">
              {!user?.id && <Link className="general__link" to="/login">Login Here</Link>}
            </span>
          </div>
          <div>
            <Link to="/orders" exact="true">
              <span className="header__metaLineOne">Returns</span>
              <span className="header__metaLineTwo">& Orders</span>
            </Link>
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
