import '../index.css';
import { Header } from '../components/Header';
import { MainBox } from '../components/Headings';
import { WeDifferent } from '../components/WhychooseUs';
// import { Testimonials } from '../components/Testimonials';
import SearchAsNeed from '../components/SearchAsNeed';
import Footer  from '../components/Home/Footer';
import  GooglePlay  from '../components/GooglePlay';
import BottomDescription from '../components/BottomDescription';
import WhyChooseUs from '../components/Home/WhyChooseUs';
function HomePage() {
  return (
    <div className="app-container">
      <Header />
      <MainBox />
      {/* <WeDifferent /> */}
      <WhyChooseUs />
      <SearchAsNeed />
      <GooglePlay />
      <BottomDescription />
      <Footer />
    </div>
  );
}

export default HomePage;
