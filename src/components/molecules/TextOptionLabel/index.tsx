import classNames from "classnames";
import { Typography } from "../../atoms/Typography";
import { SelectOption } from "../../atoms/SelectOption";
import "./index.scss";

export const TextOptionLabel = () => {
  


  return (
    <div className={classNames("text-option-label-wrapper")}>
      <div className="check-box">
        <SelectOption />
      </div>
      <div className="typography">
        <Typography
          label="check box label"
          font="Quicksand"
          variant="v2"
          color="black"
        />
      </div>
    </div>
  );
};
