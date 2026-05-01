import React from "react";

export default function LatestBlog(){
    return(
        <div className="blog">
        <h1>LATEST FROM OUR BLOG</h1>
        <div className="blog-item">
            <div className="blog-item-box">
                <img src="/Images/Blog1.png" alt="" />
                <h3>Top 8 Marketing Trends for 2026</h3>
                <p>Discover the top AI-driven marketing trends that will define business growth and customer engagement in the coming year.</p>
                <span>3 Days ago</span>
            </div>
            <div className="blog-item-box">
                <img src="/Images/Blog2.png" alt="" />
                <h3>How to Optimize Your Website for SEO</h3>
                <p>Learn why having a mobile-friendly website is no longer optional for businesses that want to stay competitive in the modern digital landscape.</p>
                <span>7 Days ago</span>
            </div>
            <div className="blog-item-box">
                <img src="/Images/Blog3.png" alt="" />
                <h3>Top 8 Marketing Trends for 2026</h3>
                <p>A beginner-friendly guide to improving your search engine rankings and driving more organic traffic to your online platform.</p>
                <span>7 days ago</span>
            </div>
        </div>
    </div>
    )
}