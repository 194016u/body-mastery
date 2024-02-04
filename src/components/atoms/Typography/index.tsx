import classNames from "classnames";
import "./index.scss";

interface IProps {
  label: string;
  color:
    | "gunmetalGray"
    | "grayish"
    | "cottonCandyPink"
    | "richBlack"
    | "white"
    | "paleGreen"
    | "paleMagenta"
    | "alabaster"
    | "gradientpinks"
    | "deepLilac"
    | "tumbleweed"
    | "goldenrod"
    | "black"
    | "purpleMountainMajesty"
    | "russianViolet"
    | "lightyellow"
    | "lightblue"
    | "lightPurple"
    | "pink";

  font:
    | "Birds-of-Paradise"
    | "Gilroy-light"
    | "Gilroy-Regular"
    | "Nexa"
    | "Nexa-heavy"
    | "Quicksand-bold"
    | "Quicksand-Book"
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
  span?: string;
  spanStyle?: string;
}

export const Typography = ({
  label,
  font,
  variant,
  color,
  styles,
  span,
  spanStyle,
}: IProps) => {
  return (
    <div
      className={classNames(
        `${font}`,
        `${variant}`,
        `${color}`,
        styles && `${styles}`
      )}
    >
      {label}
      {span && (
        <span className={classNames(spanStyle && `${spanStyle}`)}>{span}</span>
      )}
    </div>
  );
};
