import classNames from "classnames";
import { Typography } from "../../atoms/Typography";
import "./index.scss";
import beautifulImage1 from "../../../assets/beautiful-image-sping-pink-flower-1.svg";
import beautifulImage2 from "../../../assets/beautiful-image-sping-pink-flowers-2.svg";
export const SideImageSection = ()=>{

    return(
        <div className={classNames("side-image-section-wrapper")}>
           <div className="image1">
           <img src={beautifulImage1} alt="image1" />
           </div>
           <div className="typography">
          <Typography
            label="Sculpting dreams. Mastering realities."
            font="Birds-of-Paradise"
            variant="v11"
            color="gunmetalGray"
          />
           </div>
           <div className="image2" >
           <img src={beautifulImage2} alt="image2"/>
           </div>
           

        </div>
    )


}