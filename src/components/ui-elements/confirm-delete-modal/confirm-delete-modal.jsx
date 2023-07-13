import Button from "../button";
import Modal from "../modal";
import PropTypes from "prop-types";

const ConfirmDeleteModal = (props) => {
  const { isOpen, onClose, onConfirm, title } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="mb-6">
        <h3 className="font-bold text-ink text-2xl mb-3 text-center">
          {title}
        </h3>
      </div>
      <div>
        <Button className="mb-3 font-medium" type="button" onClick={onConfirm}>
          Confirm
        </Button>
        <Button
          className="bg-transparent font-medium"
          btnType="secondary"
          type="button"
          onClick={onClose}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

ConfirmDeleteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  title: PropTypes.string,
};

export default ConfirmDeleteModal;
