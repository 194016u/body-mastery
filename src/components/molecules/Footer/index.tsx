import classNames from "classnames";
import { Typography } from "../../atoms/Typography";
import './index.scss';

interface IProps{
    styles:string;
}

export const Footer =({styles}: IProps)=>{
  return(
    <div>
        <footer className={classNames('footer-feild',styles && `${styles}`)}>
        <div className="typography">
        <Typography
          label="Copyright 2023.All Rights Reserved."
          font="Gilroy-Light"
          variant="v2"
          color="prichBlack"
        />
      </div>
        </footer>
    </div>
  )

}