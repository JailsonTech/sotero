import { createContext, useContext, useState } from "react";

import { Dialog } from "../components";

const DialogContext = createContext();

export function DialogProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    title: "",
    content: "",
    onConfirm: () => {},
  });

  const handleOpen = (modalContent) => {
    setDialogContent(modalContent);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <DialogContext.Provider value={{ handleOpen, handleClose }}>
      {children}
      <Dialog isOpen={isOpen} handleClose={handleClose} {...dialogContent} />
    </DialogContext.Provider>
  );
}

export function useDialog() {
  const dialogContext = useContext(DialogContext);

  if (!dialogContext) {
    throw new Error("dialogContext is undefined.");
  }

  return dialogContext;
}
