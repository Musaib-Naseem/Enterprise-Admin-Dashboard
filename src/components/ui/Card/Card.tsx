import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className="rounded-lg bg-white p-6 shadow">{children}</div>;
};

export default Card;
