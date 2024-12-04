export const squared = (x: number): number => x * x;
export const selector = (onSelect: (value: string) => void) => {
  onSelect("1");
  onSelect("2");
  onSelect("3");
};
