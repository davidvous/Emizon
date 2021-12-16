import React from 'react'
import Product from '../Product/Product';
import './Home.css'

function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            alt=""
            src="https://cdn.discordapp.com/attachments/920474033932349511/920968459989430272/home_dash_medium.jpg"
          />
          <div className="home__row">
            <Product />
          </div>
          <div className="home__row">
          </div>
          <div className="home__row">
          </div>
        </div>
      </div>
    );
}

export default Home
