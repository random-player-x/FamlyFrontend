import '../index.css';
import { Header } from '../components/Header';
import { MainBox } from '../components/Headings';
import WhychooseUs from '../components/WhychooseUs';
import  TestimonialsSection  from '../components/Testimonials';
import SearchAsNeed from '../components/SearchAsNeed';
import Footer  from '../components/Home/Footer';
import  GooglePlay  from '../components/GooglePlay';
import BottomDescription from '../components/BottomDescription';
import ImageCarousel from '../components/Carousel';
// import WhyChooseUs from '../components/Home/WhyChooseUs';
function HomePage() {
  return (
    <div className="app-container">
      <Header />
      <MainBox />
      <WhychooseUs />
      {/* <WhyChooseUs /> */}
      <SearchAsNeed />
      <ImageCarousel/>
      <TestimonialsSection/>
      <GooglePlay />
      <BottomDescription />
      <Footer />
    </div>
  );
}

export default HomePage;
