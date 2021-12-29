import React, { useState } from "react";
import { Modal } from "../../..//context/Modal"
import CreateReview from "../CreateReview/CreateReview";

function CreateReviewModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="button pointer"
        onClick={() => setShowModal(true)}
      >
        Leave a Review!
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateReview setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default CreateReviewModal;
