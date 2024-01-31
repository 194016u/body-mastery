import React from "react";
import { Typography } from "../../atoms/Typography";
import "./index.scss";
import { Chapter } from "../../molecules/Chapter";

export const ThirdServiceSection = () => {
    return (
        <div className="third-service-wrapper">
            <div className="left-service-section-02" >
            <div className="third-service-main-topic-04">
                <Typography
                  label="Cellulite Reduction Cupping/Suction Services"
                  font="Birds-of-Paradise"
                  variant="v8"
                  color="deepLilac"
          />
        </div>
        <div className="service-paragraph-10">
                <Typography
                  label="An effective method for immediate reduction in cellulite!"
                  font="Quicksand"
                  variant="v4"
                  color="paleMagenta"
          />
        </div>
        <div className="service-paragraph-11">
                <Typography
                  label="Experience the efficacy of our Cellulite Reduction Cupping/Suction Services. A potent yet gentle approach to diminishing cellulite. We provide a treatment that combined with natural ingredients offer a quick fix for a special day or trip."
                  font="Quicksand"
                  variant="v2"
                  color="richBlack"
          />
        </div>
        <Chapter label={"Witness a remarkable improvement"} paragraph={"Although not a permanent solution, our Cupping Services deliver a dramatic enhancement that may last several weeks."}/>
        <Chapter label={"Unlike other companies"} paragraph={"We clarify that these services are temporary, ensuring a transparent and honest service experience. Perfect for that vacation or event coming up where you need a quick boost!"}/>
        <Chapter label={"For enduring results"} paragraph={"We recommend complementing our cupping services with permanent treatments like our RF Skin Tightening and Fat Freezing Services."}/>

        <div className="chapter-notice-3">
                <Typography
                  label="Understand that cellulite accumulation is often a result of prolonged adverse habits, yet with a committed approach and utilization of our array of services, reducing and eventually eliminating cellulite is an achievable goal."
                  font="Quicksand"
                  variant="v3"
                  color="russianViolet"
          />
        </div>



        </div>
        <div className="right-service-section-02">

        </div>
        </div>


    );
};