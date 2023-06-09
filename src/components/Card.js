import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
    const shouldRenderHr = props.item.key === 1 || props.item.key === 2;

    return (
        <div>
        <div className="card">
            <div className="card--img-box">
                <img className="card--img" src={props.item.imageUrl}></img>
            </div>

            <div className="card--info">
                <FontAwesomeIcon icon={faLocationDot} className="card--dot" />
                <h2 className="card--location">{props.item.location}</h2>
                <a className="card--location-url" href={props.item.googleMapsUrl}>
                    View on google maps
                </a>

                <h3 className="card--title">{props.item.title}</h3>
                <p className="card--date">
                    {props.item.startDate} - {props.item.endDate}
                </p>
                <p className="card--description">{props.item.description}</p>
            </div>

        </div>
            {shouldRenderHr && <hr className="break--line"></hr>}
        </div>
    )
}
