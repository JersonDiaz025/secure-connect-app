import { TitleProps } from "../../interfaces/TitleProps";

const Title = ({ title, styles }: TitleProps) => {
  return <h3 className={styles}>{title}</h3>;
};

export default Title;
