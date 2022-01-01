import "./ConfirmOrder.css"

function IndivConfirmOrder() {
    return (
      <>
        <div className="confirmOrder__shipping__info__review__details">
          <div>
            <h3>Delivery date: Jan 3, 2022</h3>
            <span>If you order in the next 13 hours and 4 minutes</span>
            <span>(Details)</span>
          </div>
        </div>
        <span>Items shipped from Emizon.com</span>
        <div className="confirmOrder__shipping__info__review__item__container">
          <div className="confirmOrder__shipping__info__review__item__product">
            <img
              alt="productimg"
              className="confirmOrder__shipping__info__review__item__image"
              src="https://media.discordapp.net/attachments/920474033932349511/921362869352824842/kaneki_figure.jpg"
            />
            <div className="confirmOrder__shipping__info__review__item__product__details">
              <h4>The Book of Five Rings</h4>
              <span>by Musashi, Miyamoto</span>
              <div className="confirmOrder__shipping__info__review__item__product__details__price">
                <span>$9.99</span>
                <span>*Smile</span>
                <span>& FREE Returns</span>
              </div>
              <button>Qty: 1</button>
              <span>Sold by: Emizon.com services LLC</span>
              <button>Add gift options</button>
            </div>
          </div>
          <div className="confirmOrder__shipping__info__review__item__delivery">
            <h4>Your Smile delivery option:</h4>
            <div>
                <input type="radio" checked="yes"></input>
                <span>Monday, Jan 3</span>
            </div>
          </div>
        </div>
      </>
    );
}

export default IndivConfirmOrder
