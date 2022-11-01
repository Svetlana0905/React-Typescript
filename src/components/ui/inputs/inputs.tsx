import { FC } from "react";

interface StandartInputProps {
  value: string;
  setValue: (event: string) => void;
  placeholder?: string;
  label: string;
}

export const StandartInput: FC<StandartInputProps> = ({
  value,
  setValue,
  placeholder,
  label,
}) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <label className="flex flex-col gap-2">
      <span>{label}</span>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0 placeholder:italic placeholder:text-slate-400"
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
      />
    </label>
  );
};
