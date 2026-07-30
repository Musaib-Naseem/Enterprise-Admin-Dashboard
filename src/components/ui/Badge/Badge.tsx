interface props {
  text: string;
}

const Badge = ({ text }: props) => {
  return <span className="rounded bg-blue-100 px-2 py-1 text-sm">{text}</span>;
};

export default Badge;
