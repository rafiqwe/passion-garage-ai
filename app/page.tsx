
// import FeaturedCars from "./components/cars/FeaturedCars";
import AiGarageLanding from "./components/ai garage/AIGarage";
import BmwStory from "./components/bmw story/BmwStory";
import LegendGarage from "./components/cars/LegendGarage";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/hero";
import ImageGalary from "./components/image galary/ImageGalary";
import ScrollStory from "./components/story/ScrollStory";

export default function Home() {

  // https://sketchfab.com/3d-models/2022-full-carbon-bmw-m4-gt3-g82-9b44e0f0cc234328a9381d889b61f890 BMW 3D Model
  return (
    <div className="relative w-full h-full bg-background">
      <Hero/>
      <ScrollStory/>        
      <LegendGarage/>
      <BmwStory/>
      <AiGarageLanding/> 
      <ImageGalary/>
      <Footer/>
    </div>
  );
}
