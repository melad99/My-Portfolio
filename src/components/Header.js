import React from "react";
import { Link } from "react-router-dom";


const Header =() =>{

    const style = {display:"inline-block", margin:10, marginBottom:30 }
    return(
        <div>
            <div>
                <h3 style={style}><Link to="/My-Portfolio">Home</Link></h3>
                <h3 style={style}><Link to = "/Project">Projects</Link></h3>
            </div>
        </div>

    )
}


export default Header;