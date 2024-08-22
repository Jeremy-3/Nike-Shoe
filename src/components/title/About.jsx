import React from "react";

function About() {
  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-8"
      style={{ backgroundImage: `url('https://t3.ftcdn.net/jpg/01/76/91/52/240_F_176915266_C2vxHyQ711zbHSfSg7uLZyuVbCq6O5CR.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About Nike</h1>
        <p className="mb-4">
          Nike, Inc. was founded on January 25, 1964, as Blue Ribbon Sports by
          Bill Bowerman, a track and field coach at the University of Oregon, and
          his former student Phil Knight. The company initially operated as a
          distributor for Japanese shoe maker Onitsuka Tiger (now ASICS), making
          most sales at track meets out of Knight's automobile.
        </p>
        <p className="mb-4">
          The company officially became Nike, Inc. on May 30, 1971. The name Nike
          is derived from the Greek goddess of victory. The iconic "Swoosh" logo
          was created by graphic design student Carolyn Davidson for just $35.
        </p>
        <p className="mb-4">
          Over the decades, Nike has grown to become one of the largest and most
          recognizable brands in the world. Known for its innovative products and
          impactful marketing, Nike has expanded its product offerings to include
          not just shoes, but also apparel, equipment, and accessories for a wide
          range of sports and fitness activities.
        </p>
        <p className="mb-4">
          Nike's mission is "To bring inspiration and innovation to every athlete
          in the world." The brand has been associated with some of the greatest
          athletes in history, including Michael Jordan, Serena Williams, and
          LeBron James. Through its sponsorships, campaigns, and product
          innovations, Nike continues to inspire athletes and sports enthusiasts
          worldwide.
        </p>
      </div>
    </div>
  );
}

export default About;
