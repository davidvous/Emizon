import { useState } from "react";
import { Modal } from "../../../context/Modal";
import "../UserReviews.css";

function ReviewImgModal({reviewInfo}) {
    const [showModal, setShowModal] = useState(false);
    
    return (
      <>
        <img alt="userReviews__img__preview"
          className="userReviews__img"
          src={`${reviewInfo.reviewImg}`}
          onClick={() => setShowModal(true)}
        ></img>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
              <img alt="userReviews__img__full"
                className="userReviews__img__full"
                src={`${reviewInfo.reviewImg}`}
              ></img>
          </Modal>
        )}
      </>
    );
}

export default ReviewImgModal;
