import './Orders.css';
import IndivOrderItem from './IndivOrderItem';
import { useSelector} from 'react-redux';

function IndivOrder({order}) {
  
  const products = useSelector(state => state.products)
  const ordersReparse = {};
  const newDict = () => {
    for (let key in order.items) {
      ordersReparse[key] = { ...products[key], quantity: order.items[key] };
    }
  };
  newDict();
    

  const deliveryDate = () => {
    let orderDate = new Date(order.created_at);
    const options = { month: "long", day: "numeric", year:"numeric"};
    return orderDate.toLocaleDateString("en-US", options);
  };

    return (
      <div className="order__item__container">
        <div className="order__item__meta__container">
          <div className="order__item__meta__headlines">
            <div>
              <span>ORDER PLACED</span>
              <span>{deliveryDate()}</span>
            </div>
            <div>
              <span>{null}</span>
              <span>{null}</span>
            </div>
            <div>
              <span>SHIP TO</span>
              <span>{`${order.first_name} ${order.last_name}`}</span>
            </div>
            <div>
              <div className="order__item__meta__order__number">
                <span>ORDER #</span>
                <span>{order.id}</span>
              </div>
              <div className="order__item__meta__order__number__split">
                <span>View Order Details</span>
                <span>View Invoice</span>
              </div>
            </div>
          </div>
        </div>
        {Object.values(ordersReparse).map((ele,idx) => (
          <IndivOrderItem key={ele.id} indivOrder={ele}/>
      ))}
      </div>
    );
}

export default IndivOrder
