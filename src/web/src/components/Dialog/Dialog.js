import Button from "../Button";

import "./styles.css";

export default function Dialog({
  title,
  content,
  onConfirm,
  onConfirmButtonLabel = "Confirmar",
  onConfirmButtonVariant = "default",
  isOpen,
  handleClose,
}) {
  return (
    isOpen && (
      <>
        <div className="dialog__overlay" onClick={handleClose}></div>
        {console.log(isOpen)}
        <div className="dialog__modal">
          <h3 className="dialog__modal__title">{title}</h3>
          <p className="dialog__modal__content">{content}</p>
          <div className="dialog__modal__buttons">
            <Button
              className="dialog__modal__buttons__button"
              variant="secondary"
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button
              className="dialog__modal__buttons__button"
              onClick={onConfirm}
              variant={onConfirmButtonVariant}
            >
              {onConfirmButtonLabel}
            </Button>
          </div>
        </div>
      </>
    )
  );
}
