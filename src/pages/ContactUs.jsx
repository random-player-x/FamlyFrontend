import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../components/Home/Footer';

const ContactForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile_number: '',
    priority: 'M',
    category: '',
    message: '',
    captcha: ''
  });

  const [wordCount, setWordCount] = useState(0); // Track word count

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'message') {
      const words = value.trim().split(/\s+/).filter(Boolean); // Count valid words
      if (words.length <= 300) {
        setWordCount(words.length); // Update word count
        setFormData({ ...formData, [name]: value }); // Update message
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (wordCount > 300) {
      toast.error('Message exceeds the 300-word limit. Please shorten your message.');
      return;
    }

    try {
      const response = await axios.post('http://13.235.72.216/auth/contact-form', formData);

      if (response.status === 201) {
        toast.success('Thanks for your response, we will contact you soon!');

        setTimeout(() => {
          navigate('/'); // Redirect to home or another page
        }, 1000);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong.');
    } finally {
      setFormData({
        name: '',
        email: '',
        mobile_number: '',
        priority: 'M',
        category: '',
        message: '',
        captcha: ''
      });
      setWordCount(0); // Reset word count
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/65 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Toaster position="top-center" />
        <div className="bg-white shadow-lg rounded-lg px-8 py-10">
          <h1 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Please feel free to post your questions, comments, and suggestions. We are eager to assist you and serve you better.
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
                <p className="mt-1 text-sm text-gray-500">
                  Please provide a valid and active e-mail ID so that we can get in touch with you.
                </p>
              </div>
              <div>
                <label htmlFor="mobile_number" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="mobile_number"
                  id="mobile_number"
                  value={formData.mobile_number}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="">--Select--</option>
                  <option value="Bug in application">Bug in application</option>
                  <option value="Complaint with regards to services">Complaint with regards to services</option>
                  <option value="Improvement suggestion">Improvement suggestion</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="Miscellaneous">Miscellaneous</option>
                </select>
                {!formData.category && (
                  <p className="mt-1 text-sm text-red-500">Must select one of the categories</p>
                )}
              </div>
              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                  Priority
                </label>
                <select
                  name="priority"
                  id="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="L">Low</option>
                  <option value="M">Medium</option>
                  <option value="H">High</option>
                </select>
              </div>
              <div>
                <label htmlFor="captcha" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter the displayed characters
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="captcha"
                    id="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                  <div className="bg-gray-200 px-4 py-2 rounded-md flex items-center justify-center min-w-[100px]">
                    vsen
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Characters that should be entered are case-sensitive.
                </p>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Suggestions / Feedback (max 300 words)
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                {wordCount} / 300 words
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const CONTACTUS = () => {
  return (
    <div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default CONTACTUS;
