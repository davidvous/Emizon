import { useState } from "react";
import { Modal } from "../../context/Modal";

function FinalRemove() {
  const [showModal, setShowModal] = useState(false);
  return <div></div>;
  {
    showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <SignUpForm setShowModal={setShowModal} />
      </Modal>
    );
  }
}

export default FinalRemove;
