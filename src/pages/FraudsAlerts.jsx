import React from "react";

const FraudAlertsPage = () => {
  return (
    <div className="bg-gray-50/65 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Fraud Alerts</h1>

        <p className="text-gray-600 mb-4">
          famly is committed to providing you with a safe and secure platform to search for and find your life partner. While we strive to help users discover the best matches, it is crucial for users to exercise sound judgment to assess another person's genuineness and interest in marriage.
        </p>

        <p className="text-gray-600 mb-6">
          Despite our efforts to maintain a secure platform, we recommend taking the following precautions while using our site and app:
        </p>

        <ul className="list-decimal list-inside text-gray-700 space-y-4">
          <li>
            <strong>Verify Profile Information:</strong>
            <ul className="list-disc list-inside pl-6 mt-2">
              <li>
                If a user appears to have provided false or incorrect information about their education, profession, income, family, etc., mark such profiles as <span className="font-bold">'Report Abuse'</span> and refrain from contacting them.
              </li>
            </ul>
          </li>

          <li>
            <strong>Avoid Personal Favors:</strong>
            <ul className="list-disc list-inside pl-6 mt-2">
              <li>
                If a user requests personal favors such as transporting goods, depositing funds on their behalf, or lending money, immediately cease communication and report the user as advised above.
              </li>
            </ul>
          </li>

          <li>
            <strong>Beware of Fake Websites:</strong>
            <ul className="list-disc list-inside pl-6 mt-2">
              <li>
                Be cautious of fraudulent or imitation websites that mimic famly’s appearance but are not associated with us. Ensure the URL is <a href="http://www.famly.com" className="text-blue-500 underline">www.famly.com</a> when using our platform.
              </li>
              <li>
                Representatives from fake sites may contact you for membership fees or profile registration. Exercise caution and report such incidents to our customer service team.
              </li>
            </ul>
          </li>

          <li>
            <strong>Protect Your Account:</strong>
            <ul className="list-disc list-inside pl-6 mt-2">
              <li>
                Beware of individuals pretending to represent famly, asking for your login credentials. famly never asks for your password or other confidential details, either over the phone or in person.
              </li>
            </ul>
          </li>

          <li>
            <strong>Secure Financial Information:</strong>
            <ul className="list-disc list-inside pl-6 mt-2">
              <li>
                Never share your bank account number, online banking credentials, credit card details, or any financial information. Be wary of anyone asking for money. Use sound judgment and avoid hasty decisions.
              </li>
            </ul>
          </li>

          <li>
            <strong>Safe Meetings:</strong>
            <ul className="list-disc list-inside pl-6 mt-2">
              <li>
                Arrange meetings with prospective partners in a safe, public location. Inform your family or friends about the meeting.
              </li>
            </ul>
          </li>

          <li>
            <strong>Conduct Background Research:</strong>
            <ul className="list-disc list-inside pl-6 mt-2">
              <li>
                Perform a thorough background check on potential partners before making any commitments.
              </li>
            </ul>
          </li>

          <li>
            <strong>Independent Verification:</strong>
            <ul className="list-disc list-inside pl-6 mt-2">
              <li>
                famly serves as a preliminary medium for contact and exchange of information. Users are strongly advised to conduct independent checks or due diligence before making decisions based on profile information. The responsibility of verifying profile authenticity lies with the user.
              </li>
            </ul>
          </li>
        </ul>

        <p className="text-gray-600 mt-6">
          If you encounter any of the above scenarios or suspect a fake profile, please notify us immediately at <a href="mailto:help@famly.com" className="text-blue-500 underline">help@famly.com</a>.
        </p>
      </div>
    </div>
  );
};

export default FraudAlertsPage;
