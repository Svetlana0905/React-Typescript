import { FC } from "react";

interface ModalProps {
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ title, children, onClose }) => {
  return (
    <>
      <div
        className="fixed bg-black/50 top-0 right-0 left-0 bottom-0 z-10"
        onClick={onClose}
      />
      <article className="fixed w-[500px] p-5 rounded bg-white top-10 left-1/2 -translate-x-1/2 z-20">
        <h1 className="text-2xl text-center mb-4">{title}</h1>
        {children}
      </article>
    </>
  );
};
