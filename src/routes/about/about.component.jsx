import { ReactComponent as WavySeparator } from "../../assets/wave.svg";

import "./about.styles.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image-container">
        <h2 className="main-title">ABOUT US</h2>
      </div>
      <div className="about-text-container">
        <h2 className="about-text">
          Step into the world of Greco, where style meets individuality. Our
          store is a haven for trendsetters and street style enthusiasts,
          offering a curated selection of the latest urban apparel. From graphic
          tees and oversized hoodies to stylish joggers and accessories, we have
          everything you need to express your unique personality.
        </h2>
      </div>
        <WavySeparator className="wavy-separator" />
    </div>
  );
};
export default About;
