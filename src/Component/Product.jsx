import React from "react";
import ProductUselist from "./ProductUselist";

export default function FeatureProduct() {
    const products = [
        {
            id: 1,
            title: "Modern Website Template",
            price: "$99",
            buttonText: "View Demo",
            image: "/Images/template.png",
        },
        {
            id: 2,
            title: "E-Commerce Plugin",
            price: "$19",
            buttonText: "Add to Cart",
            image: "/Images/project-ecommerce.png",
        },
        {
            id: 3,
            title: "Analytics Dashboard",
            price: "$189",
            buttonText: "Buy Now",
            image: "/Images/analytics.png",
        },
        {
            id: 4,
            title: "Digital Marketing Toolkit",
            price: "$79",
            buttonText: "Explore",
            image: "/Images/digital-marketing.jpg",
        },
    ]
    return (
        <div className="product-container">
            <h2 className="heading">OUR PRODUCTS</h2>
            <div className="product-item">
                {
                    products.map((item) => {
                        return (
                            <ProductUselist key={item.id} data={item}></ProductUselist>
                        )
                    })
                }
            </div>
        </div>

    )
}