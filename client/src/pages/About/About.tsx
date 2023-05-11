import Hero from "../../components/Hero";
import heroData from "../../data/hero.json";
import sliderData from "../../data/aboutSlider.json";
import SwiperSection from "../../components/Swiper";

const AboutPage = () => {
  return (
    <>
      <Hero
        title={heroData.title}
        button={heroData.button}
        image={heroData.image}
      />

      <div className="container">
        <h1>About</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        animi eaque, eligendi eos maiores ullam. Alias eos expedita id molestiae
        nemo odio qui reiciendis saepe ut? Aliquid culpa ex qui!
      </div>

      <SwiperSection sliderData={sliderData} />
    </>
  );
};

export default AboutPage;
