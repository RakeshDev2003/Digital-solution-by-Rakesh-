import React, { useState } from "react";

export default function FeatureProduct() {
    const [show, setShow] = useState(false)
    return (
        <div className="feature">
            <h2>FEATURE PRODUCTS</h2>
            <div className="feature-item">
                <div className="feature-item-left">
                    <h3>READY TO GROW YOUR BUSINESS?</h3>
                    <p>Let’s discuss how our expertise in digital innovation and strategy can help you achieve your business goals. Our team is dedicated to providing high-quality solutions tailored to your unique vision.</p>
                    <button>CONTACT US NOW</button>
                </div>
                <div className="feature-item-right">
                    <img src="/Images/business.png" alt="" />
                    <div className="feature-item-right-box" onClick={() => setShow(!show)}>
                        <h3>What is your pricing model?</h3>
                        {show ? (
                            <p>We offer a variety of flexible pricing plans designed to meet the needs of businesses at every scale. Our transparent approach ensures you get the most value for your investment, with reliable support and premium features included.</p>
                        ) : null}
                    </div>

                </div>
            </div>
        </div>
    )
}