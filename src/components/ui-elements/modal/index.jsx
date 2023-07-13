import PropTypes from "prop-types";
import useClickOutSide from "../../functionals/useClickOutSide";
import { useRef } from "react";

const Modal = (props) => {
  const { isOpen, onClose, children } = props;

  const modalRef = useRef(null);

  useClickOutSide(modalRef, onClose);

  return (
    <div
      className={`${isOpen ? "block" : "hidden"} relative z-10`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-sm">
            <div className="bg-white p-[24px]" ref={modalRef}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Modal;
