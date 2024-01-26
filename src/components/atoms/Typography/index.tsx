import classNames from "classnames";
import "./index.scss";

interface IProps {
  label: string;
  font:
    |"Birds of Paradise  Personal use"
    |"Gilroy"
    |"Gilroy-Regular"
    |"Nexa"
    |"Quicksand";
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
  link?: string;
  linkColor?: string;
  className?: string;
  styles?: string;
}

export const Typography = ({
  label,
  font,
  variant,
  link,
  linkColor,
  className,
  styles,
}: IProps) => {
  return (
    <>
      {link ? (
        <a
          className={classNames(
            !className ? "default" : className,
            "text",
            link && `link-${linkColor}`,
            styles && `${styles}`
          )}
          href={link}
        >
          {label ? label : "Typography"}
        </a>
      ) : (
        <div
          className={classNames(
            !className ? "default" : className,
            variant,
            styles && `${styles}`
          )}
        >
          <div
          className={classNames(
            !className ? "default" : className,
            font,
            styles && `${styles}`
          )}
        ></div>
          {label ? label : "Typography"}
        </div>
      )}
    </>
  );
};