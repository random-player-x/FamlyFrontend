import React, { useEffect, useState } from 'react';
import '../index.css';
import test1 from '../images/test1.jpeg'
import test2 from '../images/test2.jpeg'
import test3 from '../images/test3.jpeg'
import { Link } from 'react-router-dom';
import mainvideo from '../bgvideo.mp4'
const images = [test1, test2, test3]

// const RotatedImageSlider = () => {
//   return (
//     <div className="slider-container mt-[-65px] flex items-center ml-[-10px] p-[0px] lg:p-[30px] bg-black/40">
//       {/* Render 5-6 rotated divs */}
//       {Array.from({ length: 6 }).map((_, index) => (
//         <div key={index} className="rotated-div">
//           {/* Sliding Images */}
//           <div
//             className={`image-slider ${
//               index % 2 === 0 ? "slide-down" : "slide-up"
//             }`}
//           >
//             {/* Repeated images for seamless effect */}
//             {Array.from({ length: 3 }).map((_, imgIndex) => (
//               <img
//                 key={imgIndex}
//                 src={images[imgIndex]}
//                 alt={`image-${imgIndex}`}
//                 className="slider-image"
//               />
//             ))}
//             {/* Duplicate images for seamless loop */}
//             {Array.from({ length: 3 }).map((_, imgIndex) => (
//               <img
//                 key={`duplicate-${imgIndex}`}
//                 src={images[imgIndex]}
//                 alt={`image-${imgIndex}`}
//                 className="slider-image w-[100px]"
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default RotatedImageSlider;


export const MainBox = () => {

  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = window.sessionStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className="relative w-[90%] mx-auto mt-[100px] rounded-[50px] lg:h-[80%] md:h-[50%] h-[30%]  border-4 border-orange-400 overflow-hidden">
            {/* Text content */}
            <div className="absolute z-10 bg-orange-400 flex flex-col justify-center items-center text-center w-full h-full text-white">
              <video src={mainvideo} className='video-bg h-screen w-[100vw]' autoPlay loop muted></video>
              <div className='flex flex-col items-center absolute'>
              <div className="font-bold text-3xl md:text-6xl lg:text-8xl lg:mb-3 mx-2">
                    Start Of Something New
                </div>
                <div className="text-lg md:text-2xl lg:text-4xl lg:mb-5 mb-2">
                    Begins Here ...
                </div>
                <div className="flex">
                    {username ? ("") : (
                      <Link to='/signup' className="scale-75 lg:scale-100 relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-base font-medium text-gray-900 rounded-full group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0">
                            Login Account
                        </span>
                      </Link>
                    )}
                </div>
              </div>
            </div>

            {/* Background sliders */}
            {/* <RotatedImageSlider /> */}
        </div>
    );
};
