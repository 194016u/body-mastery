import React from "react";
import { Typography } from "../../atoms/Typography";
import "./index.scss";
import { Chapter } from "../../molecules/Chapter";

export const SecondServiceSection = () => {
    return (
        <div className="second-service-wrapper">
            <div className="left-service-section-01" >
            <div className="second-service-main-topic-03">
                <Typography
                  label="Hair Blossom Services"
                  font="Birds-of-Paradise"
                  variant="v8"
                  color="deepLilac"
          />
        </div>
        <div className="service-paragraph-08">
                <Typography
                  label="Hair Growth Mastery & Hair Rejuvenation At Its Best!"
                  font="Quicksand"
                  variant="v4"
                  color="paleMagenta"
          />
        </div>
        <div className="service-paragraph-09">
                <Typography
                  label="Discover the magic of our Hair Blossom Services, your gateway to youthful hair mastery and unparalleled hair rejuvenation."
                  font="Quicksand"
                  variant="v2"
                  color="richBlack"
          />
        </div>
        <Chapter label={"Benefit from"} paragraph={"Our potent concoction of intense nutrients and herbs, meticulously blended to combat gray hair and gradually restore your natural hair color."}/>
        
        <Chapter label={"Experience transformation"} paragraph={"For those suffering from both graying and thinning hair, our Hair Blossom Services will provide a noticeable restoration gradually."}/>

        <Chapter label={"Embark on a journey"} paragraph={"We only offer this service in packages of multiple treatments, in order to see the results. We have made if very affordable for just about anyone."}/>



        </div>
        <div className="service-image-section-01">

        </div>
        </div>


    );
};