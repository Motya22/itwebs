"use client";
import { Button, type ButtonProps } from "../components/button";
import { DialogTrigger } from "../components/dialog";

type ModalTriggerProps = ButtonProps & {
  onModalOpen: () => void;
};

export const ModalTrigger = ({
  children,
  asChild,
  onModalOpen,
  ...props
}: ModalTriggerProps) => {
  return (
    <DialogTrigger asChild>
      <Button {...props} onClick={onModalOpen}>
        {children}
      </Button>
    </DialogTrigger>
  );
};
