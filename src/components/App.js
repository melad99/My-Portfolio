import React from "react";
import Profile from "./Profile";
import Qualifications from "./Qualifications";
import Courses from "./Courses";
import "../index.css";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title"
class App extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <Title/>
                    <div className="column"><Profile /></div>
                    <div className="column"><Qualifications /></div>
                </div>
            <hr></hr>
            <Courses/>
            <hr></hr>
            <SocialProfiles/>
            </div>
        );
    }
}

export default App;