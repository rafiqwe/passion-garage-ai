// import FeaturedCars from "./components/cars/FeaturedCars";
import AiGarageLanding from "./components/ai garage/AIGarage";
import BmwStory from "./components/bmw story/BmwStory";
import LegendGarage from "./components/cars/LegendGarage";
import GSAPRefresh from "./components/common/GSAPRefresh";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/hero";
import ImageGalary from "./components/image galary/ImageGalary";
import ScrollStory from "./components/story/ScrollStory";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-clip bg-background">
      <GSAPRefresh />

      <Hero />
      <ScrollStory />
      <LegendGarage />
      <BmwStory />
      <AiGarageLanding />
      <ImageGalary />
      <Footer />
    </main>
  );
}
