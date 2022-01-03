import React, { useState } from "react";
import { Modal } from "../../../context/Modal"
import CreateReview from "../CreateReview/CreateReview";

function CreateReviewModal({productId, user}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="userReviews_review_buttons_edit pointer"
        onClick={() => setShowModal(true)}
      >
        Leave a Review!
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateReview className="pointer"
            productId={productId}
            user={user}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
}

export default CreateReviewModal;
