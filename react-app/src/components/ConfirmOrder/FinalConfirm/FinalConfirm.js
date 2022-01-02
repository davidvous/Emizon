function FinalConfirm() {
    return (
      <div className="final__confirm__container slideDownAnimation">
        <div className="final__confirm__heading">
          <h4>Thank you for ordering with Emizon!</h4>
        </div>
         <div className="final__confirm__middle">
             <h4>Please check your e-mail for a copy of this confirmation.</h4>
             <div className="final__confirm__order__meta">
                 <div>
                    <span>Order Number: 23312</span>
                    <span>Order Date:</span>
                 </div>
                 <div>
                     <button>Your Orders</button>
                 </div>
             </div>
         </div>
         <div className="final__confirm__bottom">
         </div>
      </div>
    );
}

export default FinalConfirm
