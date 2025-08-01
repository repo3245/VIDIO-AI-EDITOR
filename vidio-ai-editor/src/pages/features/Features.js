// src/components/home/Home.jsx
import React from "react";
import "./Features.css";

import FeaturesImage1 from "../../assets/features-image1.jpg";
import FeaturesImage2 from "../../assets/features-image2.png";
import FeaturesImage3 from "../../assets/features-image3.jpg";




const Features = () => {

    return (
        <section className="features">
            <div className="container-1">
                <div className="features-grid">
                    <div className="features-item features-item-1">
                        <img src={FeaturesImage1} />
                        <div className="features-item-1-text-background">
                            <p>Narrative Arc Mapping:   Maps story flow from setup to resolution, highlighting peaks and quotes to craft emotionally rich, short-form content.</p>
                            <p id='one'>1</p>
                        </div>

                    </div>
                    <div className="features-item features-item-2">
                        <img src={FeaturesImage2} />
                        <div className="features-item-2-text-background">
                            <p>Tone Shift Spotlighting: Finds key mood changes in content, flagging them for dynamic highlights with suggested effects to boost impact.</p>
                            <p id='two'>2</p>
                        </div>
                    </div>

                    <div className="features-item features-item-3">
                        <div className="features-item-3-text-background">
                            <p>Contextual Highlight Detection: Spots plot shifts, emotions, and visual cues using AI to surface the most powerful, story-worthy moments.</p>
                            <p id='three'>3</p>
                        </div>
                        <img src={FeaturesImage3} />
                    </div>


                    <div className=" features-item-4">
                        <h1 className="features-title">
                            Features
                        </h1>

                        <div className="features-text">
                            <p>
                                Nano Reel Editor uses AI to map emotional arcs, detect tonal shifts, and identify key story moments—transforming long-form videos, articles, and podcasts into dynamic, short-form content tailored for engagement.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default Features;
