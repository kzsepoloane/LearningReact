interface MyButtonProps {
  disabled: boolean;
  text: string;
}
export default function MyButton({
  disabled = false,
  text = "My Button",
}: MyButtonProps) {
  return <button disabled={disabled}>{text}</button>;
}
// Alternatively
/* MyButton.defaultProps = {
  disabled: false,
  text: "My Button",
}; */
