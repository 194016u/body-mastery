import classNames from "classnames";
import "./index.scss";

interface IProps {
  label: string;
  color: 
    |"gunmetalGray"
    |"grayish"
    |"cottonCandyPink"
    |"richBlack"
    |"white"
    |"paleGreen"
    |"paleMagenta"
    |"alabaster"
    |"gradientpinks"
    |"deepLilac"
    |"tumbleweed"
    |"goldenrod"
    |"black"
    |"purpleMountainMajesty"
    |"russianViolet";


  font:
    | "Birds-of-Paradise"
    | "Gilroy-light"
    | "Gilroy-Regular"
    | "Nexa"
    | "Quicksand";
  variant:
    | "v1"
    | "v2"
    | "v3"
    | "v4"
    | "v5"
    | "v6"
    | "v7"
    | "v8"
    | "v9"
    | "v10"
    | "v11"
    | "v12"
    | "v13"
    | "v14"
    | "v15"
    | "v16"
    | "text";
  styles?: string;
}

export const Typography = ({ label, font, variant, color, styles }: IProps) => {
  return (
    <div className={classNames(`${font}`, `${variant}`, `${color}`, styles && `${styles}`)}>
      {label}
    </div>
  );
};
