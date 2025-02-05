import React from "react";
import wcu1 from "../images/wcu1.png";
import wcu2 from "../images/wcu2.png";
import wcu3 from "../images/wcu3.png";

const WhyChooseUs = () => {
  const features = [
    {
      icon: wcu3,
      title: "100% Personalised profile",
      description: "Discover profiles tailored to your location, interests, community and a variety of other filters."
    },
    {
      icon: wcu1,
      title: "100% Verified profiles",
      description: "Get access to verified profiles only"
    },
    {
      icon: wcu2,
      title: "Control over privacy",
      description: "Control who can see your contact details."
    }
  ];

  return (
    <div className="flex flex-col p-4 md:p-10 mt-8 md:mt-[10%] bg-white/60">
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-light text-center mb-8 md:mb-10">
        Why Choose Us?
      </h2>
      
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-[5%]">
        {features.map((feature, index) => (
          <div key={index} className="w-full md:w-[25%] flex flex-col items-center p-4">
            <div className="flex justify-center m-3 md:m-5">
              <img src={feature.icon} alt={feature.title} className="w-16 md:w-auto" />
            </div>
            
            <span className="font-bold text-xl md:text-2xl text-center mb-2">
              {feature.title}
            </span>
            
            <hr className="bg-black w-full h-[2px] my-1" />
            
            <span className="text-base md:text-lg text-center">
              {feature.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
