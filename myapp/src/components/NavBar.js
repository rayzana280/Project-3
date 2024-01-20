import React from "react"
import { NavLink } from "react-router-dom"

const linkStyle = {
    display: "inline-block",
    width: "78px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "darkgreen",
    textDecoration: "none",
    color: "white",
};

function NavBar(){
    return(
        <div>
            <NavLink exact to= "/" style={linkStyle} activeStyle={{background: "green"}}>HOME</NavLink>
            <NavLink to="/biceps" style={linkStyle} activeStyle={{background: "green"}}>BICEPS</NavLink>
            <NavLink to="/triceps" style={linkStyle} activeStyle={{background: "green"}}>TRICEPS</NavLink>
        </div>
    )
};

export default NavBar;