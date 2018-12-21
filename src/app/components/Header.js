import React from "react";

export const Header = (props) => {
    return(
        <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">{props.link1}</a></li>
                            <li><a href="#">{props.link2}</a></li>
                        </ul>
                    </div>
                </div>
        </nav>
    )    
}


export const Footer = (props) => {
    return(
        <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Footer1</a></li>
                            <li><a href="#">{"Footer 2"}</a></li>
                        </ul>
                    </div>
                </div>
        </nav>
    )    
}