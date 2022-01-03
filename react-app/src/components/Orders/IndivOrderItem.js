import "./Orders.css"
import { Link } from 'react-router-dom'

function IndivOrderItem({indivOrder}) {


    return (
      <div className="order__item__product__container">
        <div className="order__item__product__left">
          <h3>Delivered December 22</h3>
          <span>Your package was left near the front door porch</span>
          <div>
            <img alt="product image" src={indivOrder.product_url}></img>
            <div>
              <span>{indivOrder.name}</span>
              <span>Return or replace items: Eligibe through +30 days</span>
              <div>
                <button className="disabled">Buy it again</button>
                <button className="pointer">
                  <Link
                    className="general__link"
                    to={`/products/${indivOrder.id}`}
                  >
                    View item
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="order__item__product__right">
          <button className="general__button disabled">Track package</button>
          <button className="general__button disabled">Return or replace items</button>
          <button className="general__button disabled">Share gift receipt</button>
          <button className="general__button pointer"><Link
                    className="general__link"
                    to={`/products/${indivOrder.id}`}
                  >Write a product review</Link></button>
        </div>
      </div>
    );
}

export default IndivOrderItem
