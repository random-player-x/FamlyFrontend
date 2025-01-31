import React from 'react';
import Footer from '../components/Home/Footer';

const CookiesPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg m-10">
      <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>
      <p className="mb-4">
        This Cookie Policy explains what cookies are and how we save them.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">What are cookies?</h2>
      <p className="mb-4">
        Cookies are small text files that are sent to or accessed from your browser. A cookie typically contains the name of the domain from which the cookie originated, the "lifetime" of the cookie (i.e., when it expires). A cookie may also contain information about your browsing history and activities conducted while using our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">What are the types of cookies?</h2>
      <h3 className="text-xl font-semibold mt-4 mb-2">First-Party and Third-Party Cookies</h3>
      <ul className="list-disc pl-8 mb-4">
        <li className="mb-2">
          <strong>First-Party Cookies</strong> are set by us while you access the site. These cookies often serve to give memory to the website about your data and preferences.
        </li>
        <li className="mb-2">
          <strong>Third-Party Cookies</strong> are cookies set by our partners and service providers. The aim of third-party cookies is often to collect certain information to carry out research into behavior, demographics, and targeted marketing.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">What do we use cookies for?</h2>
      <p className="mb-4">
        We and our third-party partners, such as our advertising and analytics partners, use cookies, web beacons, and other technologies to:
      </p>
      <ul className="list-disc pl-8 mb-4">
        <li className="mb-2">Collect information to improve and customize our products and websites (the "Services").</li>
        <li className="mb-2">Help us understand how our website is being used and enhance your experience thereon.</li>
        <li className="mb-2">Allow you to access and use the Services without re-entering your login credentials.</li>
        <li className="mb-2">Remember your preferences and interests to display relevant matching profiles as per your interests.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">How can you opt out?</h2>
      <p className="mb-4">
        If you do not want information collected through the use of cookies, most browsers contain a function that allows you to deny the cookie feature. You can also delete cookie files from your web browser at your discretion.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Important Notes:</h2>
      <ul className="list-disc pl-8 mb-4">
        <li className="mb-2">
          The use of cookies is a necessary part of our service and is required if you wish to access the Site. Disabling the cookie feature on your browser or deleting cookie files may affect your experience, and you may not be able to use all aspects of our Site and services.
        </li>
        <li className="mb-2">
          Cookies are used only to collect information sent to your browser from our Site. We <strong>cannot access any information not sent by us</strong>.
        </li>
      </ul>

      <p className="mt-6">
        The Cookies Policy may be updated from time to time. To check the updated policy, please visit this page regularly.
      </p>
    </div>
  );
};

// export default CookiesPolicy;

const COOKIES = ()=> {
  return (
    <div>
      <CookiesPolicy/>
      <Footer/>
    </div>
  )
}

export default COOKIES;