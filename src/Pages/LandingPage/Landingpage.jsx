import React from "react";
import Article from "../../Components/Article/Article";
import ArticleSecond from "../../Components/ArticleSecond/ArticleSecond";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Gallery from "../../Components/Gallery/Gallery";
import Herosection from "../../Components/HeroSection/Herosection";
import MarqueeSection from "../../Components/Marquee/MarqueeSection";
import TeamSection from "../../Components/Team/TeamSection";

const Landingpage = () => {
  return (
    <div>
      <Herosection />
      <MarqueeSection />
      <Banner />
      <Article />
      <ArticleSecond />

      <TeamSection />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Landingpage;
