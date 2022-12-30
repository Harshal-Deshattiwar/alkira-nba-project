import { Dialog } from "@headlessui/react";
import "./styles.css";
export default function Modal({
  children,
  showOverlay = true,
  open = false,
  onClose = () => {},
  ...props
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="modal-container"
      {...props}
    >
      {showOverlay && <Dialog.Overlay className="modal-container-overlay" />}
      <div className="modal-box">{children}</div>
    </Dialog>
  );
}
