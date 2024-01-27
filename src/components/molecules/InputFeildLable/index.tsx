import classNames from "classnames";
import { Typography } from "../../atoms/Typography";
import { InputFeild } from "../../atoms/InputFeild";
import "./index.scss";

export const InputFeildLabel = () => {
    return (
      <div className={classNames("input-feild-label-wrapper")}>
        <div className="typography">
          <Typography
            label="check box label"
            font="Quicksand"
            variant="v2"
            color="black"
          />
        </div>
        <div className="input-field">
          <InputFeild />
        </div>
      </div>
    );
  };