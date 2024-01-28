import classNames from "classnames";
import './index.scss';

interface IProps{
   
    placeHolder:string;
    value:any;
    styles?:string;
}
export const TextArea = ({placeHolder,value,styles}: IProps)=> {
    return (
      <div>
         <textarea value={value} placeholder={placeHolder} className={classNames('textarea-field',styles && `${styles}`)} />
  
      </div>
    )
  }