import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { User, Mail, Phone, Calendar, MapPin, Briefcase, Book, Users, Heart, Activity, Globe, Coffee } from 'lucide-react';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDisableModal, setShowDisableModal] = useState(false);
  const [password, setPassword] = useState('');
  const [disableLoading, setDisableLoading] = useState(false);
  const [disableError, setDisableError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = window.sessionStorage.getItem('token');
        const response = await axios.get('/api/auth/get-user',{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }); // Replace with your API endpoint
        setUserData(response.data.user);
        setLoading(false);
      } catch (err) {
        setError('Failed to load user data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleDisableAccount = async () => {
    try {
      setDisableLoading(true);
      setDisableError('');
      const token = window.sessionStorage.getItem('token');
      
      const response = await fetch('/api/auth/disable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            password: password,
            mobile_number: userData.mobile_number
        })
      });
      if(response.ok){
        window.sessionStorage.removeItem('token');
        window.sessionStorage.removeItem('username');
        navigate('/');
      }

      if (!response.ok) {
        throw new Error('Failed to disable account');
      }

      // Close modal and handle success (e.g., redirect to logout)
      setShowDisableModal(false);
      // You might want to add a redirect or logout function here
    } catch (err) {
      setDisableError('Failed to disable account. Please try again.');
    } finally {
      setDisableLoading(false);
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent"></div>
    </div>
  );

  if (error) return (
    <div className="text-red-500 text-center p-4">{error}</div>
  );

  const InfoSection = ({ icon: Icon, title, value }) => {
    if (!value) return null;
    return (
      <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
        <Icon className="w-5 h-5 text-orange-500 mt-1" />
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-gray-900">{value}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
              {userData.profile_photo ? (
                <img 
                  src={userData.profile_photo} 
                  alt={userData.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <User className="w-12 h-12 text-orange-500" />
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
              <div className="flex gap-4 mt-2">
                <span className="text-sm text-gray-500">
                  <Mail className="w-4 h-4 inline mr-1" />
                  {userData.email}
                </span>
                {userData.mobile_number && (
                  <span className="text-sm text-gray-500">
                    <Phone className="w-4 h-4 inline mr-1" />
                    {userData.mobile_number}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoSection icon={MapPin} title="Location" value={userData.location} />
          <InfoSection icon={Briefcase} title="Profession" value={userData.profession} />
          <InfoSection icon={Book} title="Education" value={userData.education} />
          <InfoSection icon={Users} title="Family Members" value={userData.family_members} />
          <InfoSection icon={Heart} title="Marital Status" value={userData.marital_status} />
          <InfoSection icon={Activity} title="Interests" value={userData.interest} />
          <InfoSection icon={Globe} title="Languages" value={userData.languages_known} />
          <InfoSection icon={Coffee} title="Diet" value={userData.diet} />
        </div>

        {/* Additional Information */}
        {(userData.bio || userData.hobbies) && (
          <div className="mt-6 bg-white rounded-xl shadow-md p-6">
            {userData.bio && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">About Me</h3>
                <p className="text-gray-700">{userData.bio}</p>
              </div>
            )}
            {userData.hobbies && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hobbies</h3>
                <p className="text-gray-700">{userData.hobbies}</p>
              </div>
            )}
          </div>
        )}

        {/* Verification Status */}
        <div className="mt-6 text-center">
          {userData.is_verified && (
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified Profile
            </span>
          )}
        </div>

        {/* Disable Account Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowDisableModal(true)}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Delete Account
          </button>
        </div>

        {/* Disable Account Modal */}
        {showDisableModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl p-6 max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Disable Account</h2>
              <p className="text-gray-600 mb-4">
                Please enter your password to confirm account disabling. This action cannot be undone.
              </p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-2 border rounded-lg mb-4"
              />
              {disableError && (
                <p className="text-red-500 mb-4">{disableError}</p>
              )}
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowDisableModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDisableAccount}
                  disabled={disableLoading}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:bg-red-400"
                >
                  {disableLoading ? 'Processing...' : 'Confirm Disable'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;