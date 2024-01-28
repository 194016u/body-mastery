import classNames from "classnames";
import { Typography } from "../../atoms/Typography";
import { SelectOption } from "../../atoms/SelectOption";
import "./index.scss";

interface IProps{
  lable:"Pricing"|"Booking"|"Cancellation"|"Other"
}

export const TextOptionLabel = ({lable}:IProps) => {
  


  return (
    <div className={classNames("text-option-label-wrapper")}>
      <div className="check-box">
        <SelectOption/>
      </div>
      <div className="typography">
        <Typography
          label={lable}
          font="Quicksand"
          variant="v2"
          color="black"
        />
      </div>
    </div>
  );
};
