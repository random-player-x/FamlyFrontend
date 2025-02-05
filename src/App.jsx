import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TnC from './pages/TnC';
import FraudsAlerts from './pages/FraudsAlerts';
import ContactForm from './pages/ContactUs';
import SignupPage from './pages/SignUp';
// import Footer from './components/Home/Footer';
import CookiesPolicy from './pages/CookiesPolicy';
import UserProfile from './pages/UserinfoPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/tnc" element={<TnC />} />
      <Route path="/fraudsalerts" element={<FraudsAlerts />} />
      <Route path="/contactus" element={<ContactForm />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/cookiespolicy" element={<CookiesPolicy />} />
      <Route path="/userinfo" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
