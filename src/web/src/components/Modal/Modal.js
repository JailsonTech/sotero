import "./styles.css";

export default function Modal({ children, isOpen, handleClose }) {
  return (
    isOpen && (
      <>
        <div className="modal__overlay" onClick={handleClose}></div>
        <div className="modal__content">{children}</div>
      </>
    )
  );
}
