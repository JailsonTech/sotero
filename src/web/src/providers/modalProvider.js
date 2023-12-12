import { createContext, useContext, useState } from "react";

import { Modal } from "../components";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);

  const handleOpen = (modalContent) => {
    setModalContent(modalContent);
    setIsOpen(true);
  };

  const handleClose = (callback) => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ handleOpen, handleClose, isOpen }}>
      {children}
      <Modal isOpen={isOpen} handleClose={handleClose}>
        {modalContent}
      </Modal>
    </ModalContext.Provider>
  );
}

export function useModal() {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error("modalContext is undefined.");
  }

  return modalContext;
}
