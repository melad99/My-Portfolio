import React from "react";
import profilePicture from "../assets/final-9360.jpg"

class Profile extends React.Component {
    constructor() {
        super();
        this.state = { displayBio: false }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        // if (this.state.displayBio === true){
        //     this.setState({displayBio :false})
        // }else{
        //     this.setState ({displayBio:true})
        // }
        this.setState({displayBio: !this.state.displayBio})
    }
    render() {
        return (
            <div>
                <img src={profilePicture} className="profile" alt="profile" />
                <h1>Hi</h1>
                <p>my name is Melad & I'm Software Engineer </p>
                {this.state.displayBio? (<div>
                    <p>Passoniate Front-end Developer</p>
                    <p>Currently learning ReactJs</p>
                    <button onClick={this.toggle} className="btn">hide</button>
                </div>) : <button onClick={this.toggle} className="btn">show more</button>
                }

            </div>
        );
    }
}

export default Profile;