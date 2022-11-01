export const useSplitString = (str: string): string | undefined => {
  return str.split("/").pop();
};
