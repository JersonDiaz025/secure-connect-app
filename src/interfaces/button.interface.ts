export interface ButtonProps {
  text: string;
  styles: string;
  type: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  onClick?: () => void;
}
