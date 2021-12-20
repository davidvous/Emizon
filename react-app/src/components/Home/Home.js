import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product/Product';
import './Home.css'
import { getProducts } from '../../store/products';


function Home() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getProducts());
      setLoaded(true);
    })();
  }, [dispatch])

  const products = useSelector(state => Object.values(state.products));

  if (!loaded) {
    return null;
  }

  const topRowProducts = products.slice(0,2)
  const midRowProducts = products.slice(2,5)
  const botRowProducts = products.slice(5,6)

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
              <Product
                key={each.id}
                name={each.name}
                price={each.price}
                product_url={each.product_url}
                rating={each.average_rating}
                id={each.id}
              />
            ))}
          </div>
          <div className="home__row">
            {midRowProducts.map((each) => (
              <Product
                key={each.id}
                name={each.name}
                price={each.price}
                product_url={each.product_url}
                rating={each.average_rating}
                id={each.id}
              />
            ))}
          </div>
          <div className="home__row">
            {botRowProducts.map((each) => (
              <Product
                key={each.id}
                name={each.name}
                price={each.price}
                product_url={each.product_url}
                rating={each.average_rating}
                id={each.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default Home
