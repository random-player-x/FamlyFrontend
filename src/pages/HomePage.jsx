import '../index.css';
import { Header } from '../components/Header';
import { MainBox } from '../components/Headings';
import { WeDifferent } from '../components/WhychooseUs';
// import { Testimonials } from '../components/Testimonials';
import SearchAsNeed from '../components/SearchAsNeed';
import { Footer } from '../components/Footer';
import  GooglePlay  from '../components/GooglePlay';
import BottomDescription from '../components/BottomDescription';
function HomePage() {
  return (
    <div className="app-container">
      <Header />
      <MainBox />
      {/* <RotatedImageSlider /> */}
      <WeDifferent />
      <SearchAsNeed />
      <GooglePlay />
      <BottomDescription />
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <Footer />
    </div>
  );
}

export default HomePage;
