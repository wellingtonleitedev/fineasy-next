import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  StyledOverlay,
  DialogTitle,
  Fieldset,
  Label,
  Input,
  StyledContent,
} from "./addModal.style";

interface AddModalProps {
  show: boolean;
}

const AddModal: React.FC<AddModalProps> = ({ show }) => {
  const [values, setValues] = React.useState({
    title: "",
    date: "",
    price: 0,
  });

  const handleSubmit = (event, values) => {
    event.preventDefault();

    console.log({ values });
  };

  return (
    <Dialog.Root open={show}>
      <Dialog.Portal>
        <StyledOverlay />
        <StyledContent>
          <DialogTitle>Modal</DialogTitle>
          <form onSubmit={(event) => handleSubmit(event, values)}>
            <Fieldset>
              <Input
                name="title"
                placeholder="Title"
                onChange={(event) =>
                  setValues((state) => ({
                    ...state,
                    title: event.target.value,
                  }))
                }
              />
            </Fieldset>
            <Fieldset>
              <Input
                name="date"
                placeholder="Date"
                onChange={(event) =>
                  setValues((state) => ({ ...state, date: event.target.value }))
                }
              />
            </Fieldset>
            <Fieldset>
              <Input
                name="price"
                placeholder="Price"
                onChange={(event) =>
                  setValues((state) => ({
                    ...state,
                    price: Number(event.target.value),
                  }))
                }
              />
            </Fieldset>
            <button type="submit">Submit</button>
          </form>
        </StyledContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddModal;
