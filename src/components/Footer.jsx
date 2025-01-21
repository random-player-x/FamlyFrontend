import React from "react";
import { SocialIcon } from 'react-social-icons'

export const Footer = () => {
  const [email, setEmail] = React.useState("");

  return (
    <footer className="relative pt-8 h-[40%]">
      <div className="bg-[#F47C20]/95 flex px-10 h-full">
       <div className="w-[50%] h-full flex flex-col justify-between">
        <div className="flex flex-col">
          <span className="text-4xl font-mono mb-2 font-bold mt-10">Contact Us</span>
            <div class="relative mb-6 mt-3">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 :text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                </svg>
              </div>
              <input onChange={(e)=>{
                setEmail(e.target.value);
              }} type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="username@mail.com"/>
            </div>        
        </div>
        <div className="text-base mb-3">
        Copyright © 2025 famly.in, All rights reserved
        </div>

       </div>
       <div className=" w-[50%] h-full flex justify-center items-center">
        <div className="flex gap-20">
        <div className="flex flex-col text-lg">
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Terms and Conditions</span>
          <span className="hover:underline cursor-pointer">Cookies Policy</span>
          <span className="hover:underline cursor-pointer">Fraud Alert</span>
        </div>
        <div className="flex text-lg flex-col items-left">
          Social Media
          <div className="flex space-x-4 mt-2">
        <span>
          <SocialIcon 
            url="https://instagram.com" 
            target="_blank"
            style={{ height: 40, width: 40, borderRadius: 8 }} 
          />
        </span>
        <span>
          <SocialIcon 
            url="https://facebook.com" 
            target="_blank"
            style={{ height: 40, width: 40, borderRadius: 8 }} 
          />
        </span>
        <span>
          <SocialIcon 
            url="https://linkedin.com" 
            target="_blank"
            style={{ height: 40, width: 40, borderRadius: 8 }} 
          />
        </span>
      </div>
        </div>
        </div>
       </div>
      </div>
    </footer>
  );
};
