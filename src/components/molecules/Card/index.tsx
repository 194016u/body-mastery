import classNames from "classnames";
import { Typography } from "../../atoms/Typography";
import "./index.scss";
import star from "./../../../assets/star.png"

interface IProps{
    label:string;
    paragraph:string;

    
  }
  
  export const Card = ({label,paragraph}:IProps) => {
  
    
  
      return (
        <div className={classNames("card-wrapper" ) }>
            <div className="card-section">
                <div className="card-title">
            <Typography
              label={label}
              font="Nexa-heavy"
              variant="v7"
              color="gunmetalGray"
            />
          </div>
          <div className="card-paragraph">
            <Typography
              label={paragraph}
              font="Gilroy-light"
              variant="v2"
              color="richBlack"
            />
          </div><div className="star-5">
            <img src={star} alt="star" />
          </div>
            </div>
          
          
        </div>
      );
    };
