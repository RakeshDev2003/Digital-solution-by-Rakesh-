import React from "react";

export default function OurService() {
    return (
        <div className="our-service">
            <h2>OUR SERVICE</h2>
            <div className="service-item">
                <div className="service-box">
                    <div className="service-box-img">
                        <img src="/Images/web.png" alt="" />
                    </div>
                    <h3>WEB DESIGN</h3>
                    <p>We build responsive, high-converting websites that blend stunning aesthetics with seamless user experiences.</p>
                    
                </div>
                <div className="service-box">
                    <div className="service-box-img">
                        <img src="/Images/digital.png" alt="" />
                    </div>
                    <h3>DIGITAL MARKETING</h3>
                    <p>Scale your business with data-driven strategies, including SEO and targeted ads designed to maximize your ROI.</p>

                </div>
                <div className="service-box">
                    <div className="service-box-img">
                        <img src="/Images/digital.png" alt="" />
                    </div>
                    <h3>BRANDING</h3>
                    <p>Craft a memorable brand identity with professional logos and compelling stories that build lasting customer trust.</p>

                </div>
            </div>
        </div>
    )
}