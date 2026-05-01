import React from "react";

export default function FindUs() {
  return (
    <section className="find-us">
      <h2 className="find-us-heading">FIND US</h2>

      <div className="find-us-map">
        <iframe
          title="map"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps?q=Statue%20of%20Liberty&output=embed"
        ></iframe>
      </div>
    </section>
  );
}
