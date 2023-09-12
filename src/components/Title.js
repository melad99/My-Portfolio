import React from "react";


const TITLES = [
    "a software Engineer",
    "a Front-end Developer",
    "IT support"
];

class Title extends React.Component {

    constructor() {
        super();
        this.state = { titleIndex: 0, fadeIn: true };

    }
    componentDidMount() {
        this.animateTitles();
        this.timeOut=setTimeout(() => {
            this.setState({ fadeIn: false })
        }, 2000)
    }
    componentWillUnmount(){
        clearInterval(this.titleInterval);
        clearTimeout(this.timeOut);
    }

    animateTitles() {
       this.titleInterval= setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex, fadeIn: true });
          this.timeOut =  setTimeout(() => {
                this.setState({ fadeIn: false })
            }, 2000)
        }, 4000);
    }
    render() {
        return (
            <p className={this.state.fadeIn ? "title-fade-in" : "title-fade-out"}>I'm {TITLES[this.state.titleIndex]}</p>
        )
    }
}

export default Title;