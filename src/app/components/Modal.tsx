'use client'

import React from "react";
import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="bg-slate-800 bg-opacity-50 fixed top-0 right-0 bottom-0 left-0 z-10 flex justify-center items-center">
      <div className="bg-white px-16 py-14 rounded-md text-center relative">
        <div className="absolute right-0 top-0">
          <Button title="X" onClick={handleClose} outline className="w-fit border-none shadow-none" />
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};
