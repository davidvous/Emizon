import './ConfirmOrder.css';

function FinalRemove({cartItems, setShowModal, removeItem, setFlag}) {

    const finalRemove = async () => {
        await removeItem()
        setFlag(false)
    }

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
            <button className="pointer" onClick={() => setShowModal(false)}>Back To Orders</button>
            <button className="pointer" onClick={finalRemove}>Yes</button>
        </div>
      </div>
    </div>
  );
  
}

export default FinalRemove;
