import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  StyledOverlay,
  DialogTitle,
  Fieldset,
  Label,
  Input,
  StyledContent,
} from "./AddModal.style";

interface AddModalProps {
  show: boolean;
}

const AddModal: React.FC<AddModalProps> = ({ show }) => (
  <Dialog.Root open={show}>
    <Dialog.Portal>
      <StyledOverlay />
      <StyledContent>
        <DialogTitle>Modal</DialogTitle>
        <Fieldset>
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Pedro Duarte" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="@peduarte" />
        </Fieldset>
      </StyledContent>
    </Dialog.Portal>
  </Dialog.Root>
);

export default AddModal;
