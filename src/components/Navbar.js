import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <nav>
            <span>
                <link to="/">Movie</link>
            </span>
            <ul>
                <li>
                    <link to="/">Home</link>
                </li>
                <li>
                    <link to="/about">About</link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;