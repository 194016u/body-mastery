import classNames from "classnames";
import { Typography } from "../../atoms/Typography";
import "./index.scss";


interface IProps{
  label:string;
  paragraph:string;
  
}

export const Pricing = ({label,paragraph}:IProps) => {

  

    return (
      <div className={classNames("Pricing-wrapper")}>
      <Pricing label={""} paragraph={""}/>
      </div>
    );
  };