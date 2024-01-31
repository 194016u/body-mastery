import React from "react";
import { Typography } from "../../atoms/Typography";
import "./index.scss";
import { Card } from "../../molecules/Card";
import right_arrow from "./../../../assets/arrow_right.png"
import left_arrow from "./../../../assets/arrow_left.png"


export const CardSection =() => {
  return (
    <div className="card-section-wrapper">
        <div className="card-section-topic">
            <Typography
              label="Testimonials"
              font="Birds-of-Paradise"
              variant="v14"
              color="gunmetalGray"
            />
          </div>
        <div className="card-section-part">
            <div className="left_arrow">
                 <img src={left_arrow} alt="star" />
            </div>
       

            <Card label={"Doris L."} paragraph={"I am older and need all the help I can get. The services provided give more than what they detail. Their guidance provided me better results than I was expecting. If you want lasting results, you need more than procedures at your appointment and they provide that. Thank you so much Marianne"}/>

            <Card label={"Daniella Z."} paragraph={"You're a priority in their care. They run this out of their home, so it feels very cozy and intimate. Thank you for the attention with each service Marianne!"}/>

            <Card label={"Margaret B."} paragraph={"I was very skeptical that I would see any improvement in my hair, specifically return of my hair color. It did take time but I am pleasantly surprised that my original hair color has returned. I would definitely recommend this service. My friend referred me due to her results with both the hair blossoming and radio frequency services and now I am sending my husband."}/>
            <div className="right_arrow">
            <img src={right_arrow} alt="star" />
            </div>


        </div>
        
      
    </div>
  )
}

