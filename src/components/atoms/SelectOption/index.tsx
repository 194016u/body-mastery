import classNames from "classnames";
import './index.scss';

interface IProps{
    type:"checkbox"|"radio";
    onChange?: () => void;
    styles:string;
}

export const SelectOption =({type,onChange,styles}: IProps) =>{
    return(
        <div>
          <input type={type} className={classNames('select-option',styles && `${styles}`)}/>
        </div>
    )
}


