import './Orders.css'
import IndivOrder from './IndivOrder';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders } from '../../store/order';
import { getProducts } from "../../store/products";
import { Redirect } from 'react-router-dom';

function Orders() {

  const [loaded, setLoaded] = useState(false);
  const user = useSelector(state => state.session.user);
  const orders = useSelector(state => state.order)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProducts()).then(() => dispatch(getOrders(user?.id))).then(() => setLoaded(true))
  },[])

  const eachOrder = Object.values(orders)

  if (!user) return <Redirect to="/login" />;

    return loaded && (
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
              <button className="general__button disabled">Search Orders</button>
            </div>
          </div>
          <div className="order__navBar">
            <span>Orders</span>
          </div>
          <div className="order__all__tally">
            <span>{`${eachOrder.length} orders`}</span>
            <span>placed in</span>
            <select name="order__months" id="order__months__select">
              <option value="last7days">past week</option>
            </select>
          </div>
          {eachOrder.sort((a,b) => b.id-a.id).map((ele,idx) => 
            <IndivOrder order={ele} key={ele.id}/>
            )}
      
        </div>
      </div>
    );
}

export default Orders
