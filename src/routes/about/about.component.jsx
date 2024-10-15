import { ReactComponent as WavySeparator } from "../../assets/wave.svg";

import Footer from "../../components/footer/footer.component";

import "./about.styles.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image-container">
        <h2 className="about-title">ABOUT US</h2>
      </div>
      <div className="about-text-container">
        <h2 className="about-text">
          Step into the world of Greco, where style meets individuality. Our
          store is a heaven for trendsetters and street style enthusiasts,
          offering a curated selection of the latest urban apparel.
        </h2>
        <h2 className="about-text">
          From graphic tees and oversized hoodies to stylish joggers and
          accessories, we have everything you need to express your unique
          personality.
        </h2>
        <h2 className="about-text">
          Join us on this stylish journey, and discover the perfect pieces to
          elevate your wardrobe. Thank you for being a part of the Greco family!
        </h2>
      </div>
      <WavySeparator className="wavy-separator" />
      <Footer />
    </div>
  );
};
export default About;
