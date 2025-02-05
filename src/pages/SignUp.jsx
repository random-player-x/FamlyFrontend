import React, { useState } from 'react';
import datinglogo from '../assets/datinglogo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../components/Home/Footer';
const SignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      HandleLogin(e); // Call login function
    } else {
      handleSignup(e); // Call signup function
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/webUser-register', {
        name: name,
        email: email,
        password: password,
        mobile_number: mobile,
      });
  
      if (response.status === 201 || response.data.message === 'User registered successfully') {
        toast.success('Signup successful!');
        window.sessionStorage.setItem('username', name);
        console.log('Response:', response.data);
  
        // Delay navigation to ensure toast appears
        setTimeout(() => {
          navigate('/'); // Redirect to home or another page
        }, 1000);
      } else {
        toast.error('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      toast.error(error.response?.data?.message || 'Something went wrong.');
    }
  };
  
  const HandleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('/api/auth/login', {
        password: password,
        mobile_number: mobile,
      });
  
      if (response.status === 200 || response.data.message === 'Login successful') {
        if(response.data.login_status == "Disabled"){
          toast.error('Login failed. Account is disabled.');
          window.location.reload();
          return;
        }
        toast.success('Login successful!');
        const token = response.data.token;
        window.sessionStorage.setItem('token', token);
        window.sessionStorage.setItem('username', response.data.name);
        
        setTimeout(() => {
          navigate('/'); // Redirect to home or another page
        }, 1000);
      } else {
        toast.error('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error(error.response?.data?.message || 'Something went wrong.');
    }
  };
  

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setName('');
    setEmail('');
    setPassword('');
    setMobile('');
    setErrorMessage('');
    setSuccessMessage('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100/80 to-orange-500/80">
      <div className="w-full max-w-md px-8 pb-8 bg-white rounded-xl shadow-lg">
        <Toaster position='top-center'/>
        <div className="flex justify-center">
          <Link to="/">
            <img src={datinglogo} alt="Famly.in" className="h-[120px]" />
          </Link>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-orange-700">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-600 mt-2 mb-2">
            {isLogin
              ? 'Log in to continue your Famly journey'
              : 'Sign up and join our community'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                required
              />
            </div>
          )}

          {!isLogin && (
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                required
              />
            </div>
          )}

          <div>
            <input
              type="text"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              required={!isLogin}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        {/* <div className="text-center">
          <button onClick={toggleForm} className="text-orange-600 hover:underline mt-3">
            {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Log In'}
          </button>
        </div> */}
      </div>
    </div>
  );
};

const SIGNUP = () => {
  return (
    <div className="app-container">
      <SignupPage />
      <Footer />
    </div>
  );
}

export default SIGNUP;
