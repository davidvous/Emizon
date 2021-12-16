import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product/Product';
import './Home.css'
import { getProducts } from '../../store/products';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  const products = useSelector(state => Object.values(state.products));
  const topRowProducts = products.slice(0,2)
  console.log(topRowProducts)

    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            alt=""
            src="https://media.discordapp.net/attachments/920474033932349511/921090580988178472/home_dash_medium_edit.png"
          />
          <div className="home__row">
            {topRowProducts.map((each) => (
              <Product key={each.id} name={each.name} price={each.price} product_url={each.product_url} rating={each.average_rating} />
            ))}
          </div>
          <div className="home__row">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="home__row">
            <Product />
          </div>
        </div>
      </div>
    );
}

export default Home
