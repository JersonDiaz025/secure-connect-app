import { ButtonProps } from "../../interfaces/button.interface";

const Button = ({
  text,
  styles,
  type = "submit",
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={styles}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
