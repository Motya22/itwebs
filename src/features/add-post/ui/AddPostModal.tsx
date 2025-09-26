"use client";

import { Modal, ModalContent, ModalTrigger } from "@/shared/ui/modal";
import { default as AddPostForm } from "./AddPostForm";

export default function AddPostModal() {
  return (
    <Modal>
      {(openModalCallback, closeModalCallback) => (
        <>
          <ModalTrigger onModalOpen={openModalCallback} variant="outline">
            Add Post
          </ModalTrigger>

          <ModalContent
            title="Post creation"
            description="Fill all form fields"
          >
            <AddPostForm onCloseModal={closeModalCallback} />
          </ModalContent>
        </>
      )}
    </Modal>
  );
}
