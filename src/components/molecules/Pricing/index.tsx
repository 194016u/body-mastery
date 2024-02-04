import classNames from "classnames";
import { Typography } from "../../atoms/Typography";
import "./index.scss";

interface IProps {
  label: string;
  paragraph: string;
}

export const Pricing = ({ label, paragraph }: IProps) => {
  return (
    <div className={classNames("Pricing-wrapper")}>
      <div className="chapter-title">
        <Typography
          label={label}
          font="Quicksand-bold"
          variant="v4"
          color="deepLilac"
        />
      </div>
      <div className="pricing-paragraph">
        <Typography
          label={paragraph}
          font="Quicksand"
          variant="v2"
          color="richBlack"
        />
      </div>
    </div>
  );
};
