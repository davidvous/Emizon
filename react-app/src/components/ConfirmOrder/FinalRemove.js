import './ConfirmOrder.css';

function FinalRemove({cartItems, setShowModal, removeItem}) {

  return (
    <div id="final__remove__container" className="slideDownAnimation">
      <div className="final__remove__contents">
        <h2>Are you sure?</h2>
        <div>
            <img alt="finalItem__image" src={cartItems[0].product_info.product_url}/>
            <span>{cartItems[0].product_info.name}</span>
        </div>
        <span>Removing this will take you back to the home page</span>
        <div>
            <button>Back To Orders</button>
            <button onClick={removeItem}>Yes</button>
        </div>
      </div>
    </div>
  );
  
}

export default FinalRemove;
