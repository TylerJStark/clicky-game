import React from "react";
import "./NavBar.css";

const Navbar = props => (
    <nav>
        <ul>
            <li className="title">
                <a href="/clicky">{props.title}</a>
            </li>
            <li id="rightwrong">{props.rightwrong}</li>
            <li id="score">Score: {props.score}</li>
            <li id="highScore">High Score: {props.highScore}</li>
        </ul>
    </nav>
)

export default Navbar;