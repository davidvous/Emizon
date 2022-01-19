import { useState } from "react";
import { Modal } from "../../../context/Modal";
import "../UserReviews.css";

function ReviewImgModal({reviewInfo}) {
    const [showModal, setShowModal] = useState(false);
    
    return (
    <>
      <img className="userReviews__img" src={`${reviewInfo.reviewImg}`} onClick={()=> setShowModal(true)}></img>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <img src={`${reviewInfo.reviewImg}`}></img>
        </Modal>
      )}
    </>
  );
}

export default ReviewImgModal;
