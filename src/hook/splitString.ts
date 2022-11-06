// Обрезка строки для ссылок mail и phone
export const splitString = (str: string): string | undefined => {
  return str.split("/").pop();
};
