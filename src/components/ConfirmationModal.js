import React from "react";

const ConfirmationModal = ({
  title,
  message,
  closeModal,
  successAction,
  modalData,
}) => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <button onClick={closeModal} className="btn">
              Cancel
            </button>
            <label
              onClick={() => successAction(modalData)}
              htmlFor="my-modal"
              className="btn btn-outline"
            >
              Confirm
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
