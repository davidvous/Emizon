import './Orders.css'
import IndivOrder from './IndivOrder';

function Orders() {
    return (
      <div className="order__master__container">
        <div className="order__content__container">
          <div className="order__current__links">
            <span>Your Account</span>
            <span>></span>
            <span>Your Orders</span>
          </div>
          <div className="order__tagline__searchbar">
            <h3>Your Orders</h3>
            <div>
              <input type="text"></input>
              <button>Search Orders</button>
            </div>
          </div>
          <div className="order__navBar">
            <span>Orders</span>
          </div>
          <div className="order__all__tally">
            <span>11 orders</span>
            <span>placed in</span>
            <select name="order__months" id="order__months__select">
              <option value="last7days">past week</option>
              <option value="last30days">past month</option>
              <option value="last90days">past 3 months</option>
            </select>
          </div>
          <IndivOrder />
          <IndivOrder />
          <IndivOrder />
          <IndivOrder />
          <IndivOrder />
        </div>
      </div>
    );
}

export default Orders
