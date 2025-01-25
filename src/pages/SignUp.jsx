import React, { useState } from 'react';
import datinglogo from '../assets/datinglogo.png';
import { Link } from 'react-router-dom';


const SignupPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login:', { email, password });
    } else {
      console.log('Signup:', { email, username, password });
    }
  };

  const HandleSignup = (e) => {
    e.preventDefault();
    console.log('Signup:', { email, username, password });
  }

  const HandleLogin = (e) => {

  }

  const toggleForm = () => {
    setIsLogin(!isLogin);
    // Reset form fields when switching
    setEmail('');
    setPassword('');
    setUsername('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100/80 to-orange-500/80">
      <div className="w-full max-w-md px-8 pb-8 bg-white rounded-xl shadow-lg">
        <div className='flex justify-center'>
            <Link to = '/'>
            <img src={datinglogo} alt='Famly.in' className='h-[120px]' />
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

          {!isLogin && (
            <div>
              <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                required={!isLogin}
              />
            </div>
          )}

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

        <div className="text-center">
          <button 
            onClick={toggleForm}
            className="text-orange-600 hover:underline mt-3"
          >
            {isLogin 
              ? 'Need an account? Sign Up' 
              : 'Already have an account? Log In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;