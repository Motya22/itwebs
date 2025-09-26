"use client";
import type React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/dialog";

type ModalContentProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export const ModalContent = ({
  title,
  description,
  children,
  className,
}: ModalContentProps) => {
  return (
    <DialogContent className={className}>
      <DialogHeader>
        {title && <DialogTitle>{title}</DialogTitle>}
        {description && <DialogDescription>{description}</DialogDescription>}
      </DialogHeader>
      {children}
    </DialogContent>
  );
};
