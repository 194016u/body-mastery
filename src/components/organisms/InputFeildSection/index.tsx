import classNames from "classnames";
import { InputFeildLabel } from "../../molecules/InputFeildLabel";
import {TextAreaLabel} from "../../molecules/TextAreaLabel";
import "./index.scss"; 

export const InputFeildSection = ()=>{

    return(
        <div className={classNames("input-feild-section-wrapper")}>
            <InputFeildLabel label={"Name"} placeholder={"Your Name"}/>
            <InputFeildLabel label={"Phone Number"} placeholder={"Your Phone Number"}/>
            <InputFeildLabel label={"Email"} placeholder={"Your Email"}/>
            <TextAreaLabel/>

        </div>
    );

};