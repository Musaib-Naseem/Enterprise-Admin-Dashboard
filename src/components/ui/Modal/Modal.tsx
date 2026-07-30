import type { ReactNode } from "react";

interface Props {
  open: boolean;
  children: ReactNode;
}

const Modal = ({ open, children }: Props) => {
  if (!open) return;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black/50">
        <div className="rounded bg-white p-6">{children}</div>
      </div>
    </>
  );
};

export default Modal;
