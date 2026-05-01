import React from "react";

export default function FeatureUselist(props) {
    return (
        <div className="card">
            <img src={props.data.image} alt={props.data.title} className="card-image" />
            <h3>{props.data.title}</h3>
            {props.data.price && <p className="price">{props.data.price}</p>}
            <button>{props.data.buttonText}</button>
        </div>
    )
}