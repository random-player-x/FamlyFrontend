import React from "react";
import { SocialIcon } from 'react-social-icons'

export const Footer = () => {
  const [email, setEmail] = React.useState("");

  return (
    <footer className="relative pt-10 h-[40%]">
      <div className="bg-[#F47C20]/95 pt-[3%] flex flex-col px-10 h-full">
       <div className=" w-full h-full flex justify-center items-center">
        <div className="flex gap-20">
        <div className="flex flex-col text-lg">
          <span className="hover:underline cursor-pointer">About Us</span>
        </div>
        <div className="flex flex-col text-lg">
          <span className="hover:underline cursor-pointer">Help & Support</span>
          <a href="/contactus" target="_blank"><span className="hover:underline cursor-pointer">Contact Us</span></a>
          <span className="hover:underline cursor-pointer">Feedback</span>
          <span className="hover:underline cursor-pointer">FAQs</span>
        </div>
        <div className="flex flex-col text-lg">
        <span className="hover:underline cursor-pointer">Information</span>
        <a href="/privacypolicy" target="_blank"><span className="hover:underline cursor-pointer">Privacy Policy</span></a>
        <a href="/tnc" target="_blank"><span className="hover:underline cursor-pointer">Terms and Conditions</span></a>        
          <span className="hover:underline cursor-pointer">Cookies Policy</span>
          <a href="fraudsalerts" target="_blank"><span className="hover:underline cursor-pointer">Fraud Alert</span></a>
        </div>

        </div>
       </div>
       <div className="flex justify-between mb-4">
       <span className=" flex items-end">Copyright © 2025 famly.in, All rights reserved</span>

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
    </footer>
  );
};
