import React from "react";

export default function Feedbacks(){
    return(
        <div className="feedback">
            <h2>CLIENT FEEDBACKS</h2>
            <div className="feedback-item">
                <div className="feedback-left">
                <img src="/Images/Client.png" alt="" />
            </div>
            <div className="feedback-right">
                <h4>"Amazing results! Highly recommend Digital Solution for Web design."</h4>
                <div className="feedback-right-item">
                    <img src="/Images/Client.png" alt="" />
                    <div className="feedback-right-item-box">
                        <p>Ercan Gumus</p>
                        <p>Company</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}