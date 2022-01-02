import './Orders.css';
import IndivOrderItem from './IndivOrderItem';

function IndivOrder() {
    return (
      <div className="order__item__container">
        <div className="order__item__meta__container">
          <div className="order__item__meta__headlines">
            <div>
              <span>ORDER PLACED</span>
              <span>December 21, 2021</span>
            </div>
            <div>
              <span>TOTAL</span>
              <span>$38.99</span>
            </div>
            <div>
              <span>SHIP TO</span>
              <span>Username</span>
            </div>
            <div>
              <div className="order__item__meta__order__number">
                <span>ORDER #</span>
                <span>123423423423234</span>
              </div>
              <div className="order__item__meta__order__number__split">
                <span>View Order Details</span>
                <span>View Invoice</span>
              </div>
            </div>
          </div>
        </div>
        <IndivOrderItem />
        <IndivOrderItem />
        <IndivOrderItem />
        <IndivOrderItem />
      </div>
    );
}

export default IndivOrder
