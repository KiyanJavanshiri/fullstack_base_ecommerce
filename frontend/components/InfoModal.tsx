import { createPortal } from "react-dom";

const InfoModal = ({ message }: { message: string }) => {
  return createPortal(
    <div className="z-20 fixed left-1/2 top-1/8 -translate-x-1/2 px-3 py-2 rounded-sm text-sm font-semibold text-black leading-6 bg-white shadow-[0_0_10px_rgba(0,0,0,10%)]">
      {message}
    </div>,
    document.getElementById("modals")!,
  );
};

export default InfoModal;
