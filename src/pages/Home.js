import HeroSlider from '../components/HeroSlider';
import ServiceHighlights from '../components/ServiceHighlights';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutUs from '../components/AboutUs';
import BrandSlider from '../components/BrandSlider';
import PromiseSection from '../components/PromiseSection';
import NewProducts from '../components/NewProducts';
import Reviews from '../components/Reviews';

function Home() {
  return (
    <div>
      <HeroSlider />
      <ServiceHighlights />
      <FeaturedProducts />
      <AboutUs />
      <BrandSlider />
      <PromiseSection />
      <NewProducts />
      <Reviews />
    </div>
  );
}

export default Home;