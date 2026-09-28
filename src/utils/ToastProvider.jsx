import { useRef, useState } from "react";
import Toaster from "../components/Toster";
import ToastContext from "./ToasterContext";

const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);

  const showToast = (message, type = "success", duration = 3000) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setToast({
      message,
      type,
    });

    timerRef.current = setTimeout(() => {
      setToast(null);
    }, duration);
  };

  const hideToast = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setToast(null);
  };

  return (
    <ToastContext.Provider
      value={{
        showToast,
        hideToast,
      }}>
      {children}

      {toast && (
        <Toaster
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
