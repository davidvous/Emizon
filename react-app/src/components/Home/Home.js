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

  const topRowProducts = products.slice(0,2);
  const topRowProducts2 = products.slice(2,6);
  const midRowProducts = products.slice(7,10);
  const botRowProducts = products.slice(10,11);
  const botRowProducts2 = products.slice(11, 15);

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
                rating={
                  each.average_rating_length
                    ? each.average_rating_total / each.average_rating_length
                    : 0
                }
                id={each.id}
              />
            ))}
          </div>
          <div className="home__row">
            {topRowProducts2.map((each) => (
              <Product
                key={each.id}
                name={each.name}
                price={each.price}
                product_url={each.product_url}
                rating={
                  each.average_rating_length
                    ? each.average_rating_total / each.average_rating_length
                    : 0
                }
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
                rating={
                  each.average_rating_length
                    ? each.average_rating_total / each.average_rating_length
                    : 0
                }
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
                rating={
                  each.average_rating_length
                    ? each.average_rating_total / each.average_rating_length
                    : 0
                }
                id={each.id}
              />
            ))}
          </div>

          <div className="home__row">
            {botRowProducts2.map((each) => (
              <Product
                key={each.id}
                name={each.name}
                price={each.price}
                product_url={each.product_url}
                rating={
                  each.average_rating_length
                    ? each.average_rating_total / each.average_rating_length
                    : 0
                }
                id={each.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default Home
