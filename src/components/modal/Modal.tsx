import * as Dialog from "@radix-ui/react-dialog";
import { StyledOverlay, DialogTitle, StyledContent } from "./Modal.style";

interface ModalProps {
  show: boolean;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, title, children }) => (
  <Dialog.Root open={show}>
    <Dialog.Portal>
      <StyledOverlay />
      <StyledContent>
        {title && <DialogTitle>{title}</DialogTitle>}
        {children}
      </StyledContent>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
