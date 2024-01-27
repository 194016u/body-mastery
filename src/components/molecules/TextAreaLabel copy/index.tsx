import classNames from "classnames";
import { Typography } from "../../atoms/Typography";
import { TextArea } from "../../atoms/TextArea";
import "./index.scss";

export const TextAreaLabel = () => {
  return (
    <div className={classNames("text-area-label-wrapper")}>
      <div className="typography">
        <Typography
          label="Pricing"
          font="Quicksand"
          variant="v2"
          color="black"
        />
      </div>
      <div className="text-area">
        <TextArea />
      </div>
    </div>
  );
};
