import React, { useState } from "react";
import { Modal } from "../../..//context/Modal";
import EditReview from "../EditReview/EditReview";

function EditReviewModal({ reviewInfo }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="button pointer" onClick={() => setShowModal(true)}>
        Edit Your Review
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReview
            reviewInfo={reviewInfo}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
}

export default EditReviewModal;
