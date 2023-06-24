import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <nav>
            <FontAwesomeIcon icon={faEarthAmericas} className="nav--logo" />
            <h1 className="nav--title">Travel Journal</h1>
        </nav>
    )
}
