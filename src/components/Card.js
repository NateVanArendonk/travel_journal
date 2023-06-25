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
                <h2 className="card--location">Location Name</h2>
                <a className="card--location-url" href="https://www.google.com/maps/@43.0233862,-86.1650014,15z?entry=ttu">
                    View on google maps
                </a>

                <h3 className="card--title">Title</h3>
                <p className="card--date">
                    Date 1 through Date 2
                </p>
                <p className="card--description">Description of the trip</p>
            </div>
        </div>
    )
}
