import React from "react";

export default function Contact() {
    return (
        <div className="contact">
            <h1>GET IN TOUCH</h1>

            <div className="contact-container">
                <div className="contact-form">
                    <div className="row">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                    </div>

                    <div className="row">
                        <input type="text" placeholder="Subject" />
                        <input type="text" placeholder="Subject" />
                    </div>

                    <textarea placeholder="Message"></textarea>

                    <button>Send Message</button>
                </div>

                <div className="contact-info">
                    <h3>Offices</h3>

                    <p><i className="bi bi-geo-alt"></i> 20373 Altrosa Street,<br />Ravenna, FL 33920</p>
                    <p><i className="bi bi-telephone"></i>(876) 256 4000</p>
                    <p><i className="bi bi-envelope"></i> example@email.com</p>
                </div>
            </div>
        </div>
    )
}