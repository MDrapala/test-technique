import { PropsWithChildren } from "react";
import Modal from "react-modal";

type propsType = PropsWithChildren<{
  openModal: boolean;
  className?: string;
  setOpenModal: (a: boolean) => void;
}>;

const ModalRender = ({
  children,
  openModal,
  className,
  setOpenModal,
}: propsType) => {
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={(e) => {
        e.stopPropagation();
        setOpenModal(false);
      }}
      overlayClassName="animate-in fade-in fixed inset-0 left-0 z-30 bg-[#0D0C0C] bg-opacity-50"
      className={`pt-10 ${className}`}
    >
      {children}
    </Modal>
  );
};

export default ModalRender;
