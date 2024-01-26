import classNames from "classnames";
import "./index.scss";

interface IProps {
  label: string;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "text";
  link?: string;
  linkColor?: string;
  className?: string;
  styles?: string;
}

export const Typography = ({
  label,
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
          {label ? label : "Typography"}
        </div>
      )}
    </>
  );
};