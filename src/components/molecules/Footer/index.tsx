import classNames from "classnames";
import { Typography } from "../../atoms/Typography";
import './index.scss';

interface IProps{
    styles?:string;
    label:string
}

export const Footer =({styles,label}: IProps)=>{
  return(
    <div>
        <footer className={classNames('footer-feild',styles && `${styles}`)}>
       
        <Typography
            label={label}
            variant="v2" 
            color="richBlack" 
            font="Gilroy-Regular"          
        />
      
        </footer>
    </div>
  )

}