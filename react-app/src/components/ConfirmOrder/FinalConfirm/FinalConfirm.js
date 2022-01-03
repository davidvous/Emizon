import './FinalConfirm.css'

function FinalConfirm() {
    return (
      <div className="final__confirm__container slideDownAnimation">
        <div className="final__confirm__heading">
          <h4>An error occured with your order!</h4>
        </div>
         <div className="final__confirm__middle">
             <h4>Please review your shipping or payment information.</h4>
         </div>
         <div className="final__confirm__bottom">
         </div>
      </div>
    );
}

export default FinalConfirm
