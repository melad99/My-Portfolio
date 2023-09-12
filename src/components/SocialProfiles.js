import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";



const SocialProfiles = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h3>Contact Me</h3>
            {
                    SOCIAL_PROFILES.map(PROFILE => {
                        return <SocialProfile socialProfile={PROFILE} />
                    })
                }

        </div>
    );
}

const SocialProfile = (props) => {
    const { link, image } = props.socialProfile;
    return (
            <a href={link}>
                <img src={image} alt="social" style={{width:20,margin:5}}></img>
            </a>
    );
}

export default SocialProfiles;




