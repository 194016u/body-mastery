import classNames from "classnames";
import { Typography } from "../../atoms/Typography";
import "./index.scss";


interface IProps{
  label:string;
  paragraph:string;
  
}

export const Chapter = ({label,paragraph}:IProps) => {

  

    return (
      <div className={classNames("chapter-wrapper")}>
        <div className="chapter-title">
          <Typography
            label={label}
            font="Quicksand-bold"
            variant="v4"
            color="tumbleweed"
          />
        </div>
        <div className="chapter-paragraph">
          <Typography
            label={paragraph}
            font="Quicksand"
            variant="v2"
            color="gunmetalGray"
          />
        </div>
      </div>
    );
  };