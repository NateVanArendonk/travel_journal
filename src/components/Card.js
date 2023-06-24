import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function Card() {
    return (
        <div className="card">
            <div className="card--img-box">
                <img className="card--img" src="https://source.unsplash.com/WLxQvbMyfas" alt="TestTitle"></img>
            </div>

            <div className="card--info">
                <FontAwesomeIcon icon={faLocationDot} className="card--dot" />
                <h3>Test</h3>
            </div>


        </div>
    )
}
