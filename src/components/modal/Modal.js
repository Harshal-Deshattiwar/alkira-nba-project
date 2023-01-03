import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import "./styles.css";
export default function Modal({
  children,
  showOverlay = true,
  open = false,
  onClose = () => {},
  ...props
}) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <>
          <Dialog
            static
            as="div"
            open={open}
            onClose={onClose}
            className="modal-container"
            {...props}
          >
            {showOverlay && (
              <Dialog.Overlay className="modal-container-overlay" />
            )}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.75,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  ease: "easeOut",
                  duration: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.75,
                transition: {
                  ease: "easeIn",
                  duration: 0.15,
                },
              }}
            >
              <div className="modal-box">{children}</div>
            </motion.div>
          </Dialog>
        </>
      )}
    </AnimatePresence>
  );
}
