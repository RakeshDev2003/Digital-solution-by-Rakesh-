import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import OurService from "./Component/OurService";
import Product from "./Component/Product";
import Business from "./Component/Business";
import FeatureProduct from "./Component/FeaturesProduct";
import DigitalSolution from "./Component/DigitalSolution";
import FAQ from "./Component/FAQ";
import Feedbacks from "./Component/Feedbacks";
import LatestBlog from "./Component/LatestBlog";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import FindUs from "./Component/FindUs";


export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <div id="home">
        <Hero></Hero>
      </div>
      <div id="services">
        <OurService></OurService>
      </div>
      <div id="products">
        <Product></Product>
      </div>
      <Business></Business>
      <FeatureProduct></FeatureProduct>
      <DigitalSolution></DigitalSolution>
      <div id="faq">
        <FAQ></FAQ>
      </div>
      <Feedbacks></Feedbacks>
      <div id="blog">
        <LatestBlog></LatestBlog>
      </div>
      <Contact></Contact>
      <FindUs></FindUs>
      <Footer></Footer>

      
    </>
  )
}