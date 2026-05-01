import React, { useState } from "react";

export default function FAQ() {
    const [open, setOpen] = useState(null)
    return (
        <div className="faq">
            <h2>FAQs</h2>
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
                <div className="faq-box">
                    <h3 onClick={() => setOpen(open === 1 ? null : 1)}>
                        <span>What is your pricing model?</span>
                        <i className="bi bi-chevron-down"></i>
                    </h3>
                    {open === 1 && <p>We offer flexible pricing depending on the project scope. We typically work with fixed-fee contracts for specific deliverables or hourly rates for ongoing support. Contact us for a custom quote tailored to your budget.</p>}
                </div>
                <div className="faq-box">
                    <h3 onClick={() => setOpen(open === 2 ? null : 2)}>
                        <span>How long does a project take?</span>
                        <i className="bi bi-chevron-down"></i>
                    </h3>
                    {open === 2 && <p>Timeline depends on complexity. A standard website or branding project usually takes 4 to 6 weeks. We provide a detailed project roadmap during our kickoff meeting so you know exactly when to expect milestones.</p>}
                </div>
                <div className="faq-box">
                    <h3 onClick={() => setOpen(open === 3 ? null : 3)}>
                        <span>What industries do you work with?</span>
                        <i className="bi bi-chevron-down"></i>
                    </h3>
                    {open === 3 && <p>We specialize in working with Tech Startups, E-commerce brands, and Professional Service firms (like law or real estate). However, our process is adaptable to any industry looking for a modern digital presence.</p>}
                </div>
                <div className="faq-box">
                    <h3 onClick={() => setOpen(open === 4 ? null : 4)}>
                        <span>How is project tracking handled?</span>
                        <i className="bi bi-chevron-down"></i>
                    </h3>
                    {open === 4 && <p>Transparency is key for us. We use tools like Trello, Asana, or Notion to give you real-time access to our progress. You will also receive weekly email updates and have scheduled check-in calls.</p>}
                </div>
                <div className="faq-box">
                    <h3 onClick={() => setOpen(open === 5 ? null : 5)}>
                        <span>What happens after the project is complete?</span>
                        <i className="bi bi-chevron-down"></i>
                    </h3>
                    {open === 5 && <p>We don’t just "disappear." We offer 30 days of free post-launch support to fix any bugs. We also provide optional monthly maintenance packages to keep your site secure and updated.</p>}
                </div>
                <div className="faq-box">
                    <h3 onClick={() => setOpen(open === 6 ? null : 6)}>
                        <span>What services do you offer for help?</span>
                        <i className="bi bi-chevron-down"></i>
                    </h3>
                    {open === 6 && <p>Our core services include Web Design, Full-stack Development, SEO Optimization, and Brand Strategy. If you need help with something specific not listed, feel free to ask!</p>}
                </div>
            </div>
        </div>
    )
}