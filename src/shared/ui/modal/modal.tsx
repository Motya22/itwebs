"use client";

import React, { useCallback } from "react";
import { Dialog } from "../components/dialog";

type ModalProps = {
  children: (
    openModalCallback: () => void,
    closeModalCallback: () => void,
  ) => React.ReactNode;
  defaultOpen?: boolean;
};

export const Modal = ({ children, defaultOpen = false }: ModalProps) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  const openModalHandler = useCallback(() => setIsOpen(true), []);
  const closeModalHandler = useCallback(() => setIsOpen(false), []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {children(openModalHandler, closeModalHandler)}
    </Dialog>
  );
};
