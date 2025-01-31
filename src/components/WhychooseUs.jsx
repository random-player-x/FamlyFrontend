
import React from "react";
import wcu1 from "../images/wcu1.png";
import wcu2 from "../images/wcu2.png";
import wcu3 from "../images/wcu3.png";
export const WeDifferent = () => {

    return (
        <div className=" h-auto flex flex-col mt-[10%] bg-white/60 p-10">

                <div className="text-3xl flex justify-center bg--400 lg:text-6xl font-light ">
                    Why Choose Us ?
                </div>
                <div className="text-xl block lg:flex  justify-center gap-[10%] mt-10">
                <div className="w-[20%] bg--400 flex flex-col items-center">
                        <div className="flex justify-center m-5"><img src={wcu3} alt="" /></div>
                        <span className="font-bold text-xl">100% Personalised profile</span>
                        <hr className="bg-black w-full h-[2px] m-1" />
                        <span className="text-sm text-center">Discover profiles tailored to your location, interests, community and a variety of other filters.</span>
                    </div>
                    <div className="w-[20%] bg--400 flex flex-col items-center">
                    <div className="flex justify-center m-5"><img src={wcu1} alt="" /></div>
                        <span className="font-bold text-xl"> 100% Verified profiles</span>
                        <hr className="bg-black w-full h-[2px] m-1" />
                        <span className="text-sm text-center">Get access to verified profiles only</span>
                    </div>
                    <div className="w-[20%] bg--400 flex flex-col items-center">
                    <div className="flex justify-center m-5"><img src={wcu2} alt="" /></div>
                        <span className="font-bold  text-xl">Control over privacy</span>
                        <hr className="bg-black w-full h-[2px] m-1" />
                        <span className="text-sm text-center">Controll who can see your contact details.</span>
                    </div>
                </div>
        </div>
    );
}