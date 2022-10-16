import { FC } from "react";

interface StandartInputProps {
  value: string;
  setValue: (event: string) => void;
}

export const StandartInput: FC<StandartInputProps> = ({ value, setValue }) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <input
      type="text"
      className="border py-2 px-4 mb-2 w-full outline-0"
      placeholder="Enter product title..."
      value={value}
      onChange={changeHandler}
    />
  );
};
