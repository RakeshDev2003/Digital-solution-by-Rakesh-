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
      <Navbar/>
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <OurService />
      </section>

      <section id="products">
        <Product />
      </section>

      <Business />
      <FeatureProduct />
      <DigitalSolution />

      <section id="faqs">
        <FAQ />
      </section>

      <Feedbacks />

      <section id="blogs">
        <LatestBlog />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <FindUs />
      <Footer />


    </>
  )
}