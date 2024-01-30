import React from "react";
import { Typography } from "../../atoms/Typography";
import "./index.scss";
import { Chapter } from "../../molecules/Chapter";

export const ServiceSection = () => {
    return (
        <div className="paragraph-section-02-wrapper">
            <div className="service-title">
                <Typography
                  label="Services Offered:"
                  font="Birds-of-Paradise"
                  variant="v15"
                  color="gunmetalGray"
          />
            </div>
        <div className="service-main-topic-01">
                <Typography
                  label="Skin Tightening Radio Frequency Services"
                  font="Birds-of-Paradise"
                  variant="v8"
                  color="deepLilac"
          />
        </div>
        <div className="service-paragraph-02">
                <Typography
                  label="Elevate Your Beauty with Radiant RF Skin Tightening!"
                  font="Quicksand"
                  variant="v4"
                  color="paleMagenta"
          />
        </div>
        <div className="service-paragraph-03">
                <Typography
                  label="Step into Innovation! Embrace the future of skin care with our groundbreaking Radio Frequency (RF) Skin Tightening services. Designed to unleash your skin's natural vitality and youth, our treatments are a confluence of technology and aesthetic excellence!"
                  font="Quicksand"
                  variant="v2"
                  color="richBlack"
          />
        </div>
        <div className="service-paragraph-04">
                <Typography
                  label="Why Choose RF Skin Tightening?"
                  font="Quicksand"
                  variant="v7"
                  color="pink"
          />
        </div>
        <Chapter label={"Non-Invasive & Painless"} paragraph={"Say goodbye to surgical risks! Embrace a treatment that's gentle but powerful and free from the hassles of surgery and downtime."}/>

        <Chapter label={"Safe and Proven Methodology"} paragraph={"Trust in a procedure that's backed by scientific research, ensuring safety and effectiveness.Where each session brings you closer to your desired skin texture and tone! Immediate and Long-Lasting Results: Targeted radio waves meticulously work on your concerned areas with immediate tightening effects, coupled with long-term benefits that enhance collagen production to promote long-term skin health and resilience"}/>

        <Chapter label={"Nourish and Flourish"} paragraph={"Entrust your skin to expert hands, employing meticulously researched techniques to nourish your skin deeply and unveil its inherent radiance."}/>

        <Chapter label={"Boost Your Confidence"} paragraph={"Entrust your skin to expert hands, employing meticulously researched techniques to nourish your skin deeply and unveil its inherent radiance. Unlock a new realm of self-confidence as you step out, flaunting skin that's tightened, toned and terrifically radiant!"}/>
        <div className="chapter-notice-1">
                <Typography
                  label="Don't wait! Let's redefine your skin's story with our exquisite Radio Frequency (RF) Skin Tightening services. Book your transformative session now!"
                  font="Quicksand"
                  variant="v3"
                  color="russianViolet"
          />
        </div>


        <div className="service-main-topic-02">
                <Typography
                  label="Fat Freezing Cool Sculpting Services"
                  font="Birds-of-Paradise"
                  variant="v8"
                  color="deepLilac"
          />
        </div>
        <div className="service-paragraph-05">
                <Typography
                  label="Sculpt Your Dream Body with Our Innovative Fat Freezing Services!"
                  font="Quicksand"
                  variant="v4"
                  color="paleMagenta"
          />
        </div>
        <div className="service-paragraph-06">
                <Typography
                  label="Elevate your physique with our Fat Freezing services, where science and technology converge to craft an artwork of beauty, elegance, and confidence!"
                  font="Quicksand"
                  variant="v2"
                  color="richBlack"
          />
        </div>
        <div className="service-paragraph-07">
                <Typography
                  label="Why Choose RF Skin Tightening?"
                  font="Quicksand"
                  variant="v7"
                  color="pink"
          />
        </div>
        <Chapter label={"Fat Freezing or Cryolipolysis"} paragraph={"Is a revolutionary procedure that targets and eliminates stubborn fat cells by freezing them. This science backed technique ensures that the fat cells under the skin are carefully crystalized and naturally eliminated by the body over time, promoting a more toned and sculpted appearance."}/>
        <Chapter label={"Advanced Targeting"} paragraph={"The procedure selectively targets fat cells, leaving surrounding tissues untouched."}/>
        <Chapter label={"Cellular Magic"} paragraph={"Post-treatment, the frozen fat cells die and are naturally expelled by the body over several weeks, revealing a more sculpted you."}/>
        <Chapter label={"Temperature Precision"} paragraph={"Our technology meticulously controls the cooling process, ensuring that it is precise enough to target only the fat cells."}/>

        <div className="chapter-notice-2">
                <Typography
                  label="Discover the extraordinary possibilities with our Fat Freezing services, where the brilliance of science becomes the architect of your dream physique!"
                  font="Quicksand"
                  variant="v3"
                  color="russianViolet"
          />
        </div>


        </div>
    )
}