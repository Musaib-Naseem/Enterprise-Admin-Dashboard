import type { InputProps } from "./Input.types";

const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <>
      {label && <label> {label} </label>}

      <input {...props} className="w-full rounded border p-2" />

      {error && <p className="text-sm text-red-500"> {error} </p>}
    </>
  );
};

export default Input;
