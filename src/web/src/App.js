import { RouterProvider } from "react-router-dom";

import { Toast } from "./components";
import { DialogProvider, ModalProvider } from "./providers";
import { router } from "./routes";

import "react-toastify/dist/ReactToastify.css";
import "./styles/reset.css";

function App() {
  return (
    <ModalProvider>
      <DialogProvider>
        <RouterProvider router={router} />
        <Toast />
      </DialogProvider>
    </ModalProvider>
  );
}

export default App;
