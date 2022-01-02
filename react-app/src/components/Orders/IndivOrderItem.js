import "./Orders.css"
function IndivOrderItem() {
    return (
      <div className="order__item__product__container">
        <div className="order__item__product__left">
          <h3>Delivered December 22</h3>
          <span>Your package was left near the front door porch</span>
          <div>
            <img alt="product image"></img>
            <div>
              <span>Name of the product</span>
              <span>Return or replace items: Eligibe through +30 days</span>
              <div>
                <button>Buy it again</button>
                <button>View item</button>
              </div>
            </div>
          </div>
        </div>
        <div className="order__item__product__right">
          <button>Track package</button>
          <button>Return or replace items</button>
          <button>Share gift receipt</button>
          <button>Write a product review</button>
        </div>
      </div>
    );
}

export default IndivOrderItem
