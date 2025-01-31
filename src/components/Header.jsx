import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import datinglogo from '../assets/datinglogo.png';


export const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const firstScreenRef = useRef(null);
  const [username, setUsername] = useState('');

  if(window.sessionStorage.getItem('username')){
    setUsername(window.sessionStorage.getItem('username'));
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the first section is less than 5% visible, hide the header
        setShowHeader(entry.intersectionRatio > 0.05);
      },
      {
        root: null, // Observe within the viewport
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0% to 100%
      }
    );

    if (firstScreenRef.current) {
      observer.observe(firstScreenRef.current);
    }

    return () => {
      if (firstScreenRef.current) {
        observer.unobserve(firstScreenRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full transition-transform duration-500 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        } bg-gradient-to-b from-gray-600/80 via-gray-400/30 to-white/20 flex justify-between items-center z-50`}
      >
        <div className='absolute'>
        </div>
        <div className="flex items-center text-lg ">
        <img src={datinglogo} alt="heart" className=" ml-5 w-[40px] lg:w-[60px] inline" />
          <div className="flex m text-[#F47C20] font-bold text-2xl lg:text-4xl mr-5 justify-center">
            famly.in
            </div>
        </div>
        <div className="flex">
          {username ? (<div className='flex bg-orange-500 font-mono py-1 px-6 m-5 text-sm lg:text-lg rounded-full lg:m-5'>
            {username}
          </div>): (

          <Link to='/signup' className="flex py-1 px-6 m-5 text-sm lg:text-lg rounded-full bg-orange-500 hover:bg-orange-600 text-white lg:m-5">
          Register
          </Link>
          )}

        </div>
      </div>

      {/* First screen reference div */}
      <div ref={firstScreenRef} className=" w-full">
        {/* Empty div to measure visibility */}
      </div>
    </>
  );
};

export default Header;

