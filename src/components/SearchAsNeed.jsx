import mobile1 from '../images/Home/a.png';
import mobile2 from '../images/Home/b.png';
import mobile3 from '../images/Home/c.png';
import mobile4 from '../images/mobile4.png';

import React, { useState, useEffect } from 'react';

const MainPage = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Function to check if the screen width is mobile-sized
    const checkIsMobile = () => {
        setIsMobile(window.innerWidth <= 1280); // 768px is a common breakpoint for mobile devices
    };

    // Add event listener for window resize
    useEffect(() => {
        checkIsMobile(); // Check on initial render
        window.addEventListener('resize', checkIsMobile); // Check on window resize

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return (
        <div className='mt-[10%]'>
            {isMobile ? (
                // Render mobile components
                <>
                    <MobileSearchasNeed />
                    <MobileKnowMoreFamily />
                    <MobileAiDriven />
                </>
            ) : (
                // Render desktop components
                <>
                    <SearchasNeed />
                    <KnowMoreFamily />
                    <AiDriven />
                </>
            )}
        </div>
    );
};
const SearchasNeed = () => {
    return(
        <div className="h-auto lg:flex lg:bg-white/80 lg:flex-row flex-col p-4 items-center bg-white/80 justify-center">
        <div className="flex lg:h-[80vh] justify-center items-center lg:w-[50%] font-bold">
            <img src={mobile1} alt="img" className='md:h-[500px] h-[250px]' />

        </div>
        <div className="lg:w-[40%] flex flex-col justify-center gap-4 p-10">
            <span className="text-4xl font-bold">
                Search as per your Needs
            </span>
            <span className="text-xl">
                Customised your search for your special family based on your needs
            </span>
        </div>
    </div>
    )
}
const KnowMoreFamily = () => {
    return (
        <div className="h-auto lg:flex lg:flex-row flex-col items-center bg-white/80 justify-center">
            <div className="lg:w-[40%] flex flex-col justify-center gap-4 p-10">
                <span className="text-4xl font-bold">
                    Know more about the Family
                </span>
                <span className="text-xl">
                    Get informed about the the members of the family you will be spending your life with
                </span>
            </div>
            <div className="flex lg:h-[80vh] justify-center items-center lg:w-[50%] font-bold">
                <div className="flex lg:h-[80vh]   justify-center items-center w-[100%] font-bold">
                    <img src={mobile2} alt="img" className='md:h-[500px] w-auto h-[250px]' />
                </div>
            </div>

        </div>
    );

}

const AiDriven = () => {
    return (
        <div className="h-auto lg:flex lg:flex-row flex-col items-center bg-white/80 gap-4 p-10 lg:gap-0 lg:p-0 justify-center">

            <div className="flex lg:h-[80vh] justify-center items-center lg:w-[50%] font-bold">
                <div className="flex lg:h-[80vh]   justify-center items-center w-[100%] font-bold ">
                <img src={mobile3} alt="img" className='md:h-[500px] h-[250px]' />
                </div>
            </div>
            <div className="lg:w-[40%] flex flex-col justify-center">
                <span className="text-4xl font-bold mb-5">
                    AI-driven match recommendations to suit your preferences
                </span>
                <span className="text-xl">
                    Get the perfect Match with the help of our Ai- recommendation engine which gives profile suggestions based on your preferneces
                </span>
            </div>

        </div>
    );

}

const MobileSearchasNeed = () => {
    return (
        <div className="h-auto flex flex-col p-4 items-center bg-white/80 justify-center">
            <div className="flex justify-center items-center w-full">
                <img src={mobile1} alt="img" className='h-[200px] md:h-[250px]' />
            </div>
            <div className="w-full flex flex-col justify-center gap-4 p-4 text-center">
                <span className="text-2xl md:text-3xl font-bold">
                    Search as per your Needs
                </span>
                <span className="text-lg md:text-xl">
                    Customise your search for your special family based on your needs
                </span>
            </div>
        </div>
    );
};

const MobileKnowMoreFamily = () => {
    return (
        <div className="h-auto flex flex-col p-4 items-center bg-white/80 justify-center">
            <div className="flex justify-center items-center w-full">
                <img src={mobile2} alt="img" className='h-[200px] md:h-[250px]' />
            </div>
            <div className="w-full flex flex-col justify-center gap-4 p-4 text-center">
                <span className="text-2xl md:text-3xl font-bold">
                    Know more about the Family
                </span>
                <span className="text-lg md:text-xl">
                    Get informed about the members of the family you will be spending your life with
                </span>
            </div>
        </div>
    );
};

const MobileAiDriven = () => {
    return (
        <div className="h-auto flex flex-col p-4 items-center bg-white/80 justify-center">
            <div className="flex justify-center items-center w-full">
                <img src={mobile3} alt="img" className='h-[200px] md:h-[250px]' />
            </div>
            <div className="w-full flex flex-col justify-center gap-4 p-4 text-center">
                <span className="text-2xl md:text-3xl font-bold">
                    AI-driven match recommendations to suit your preferences
                </span>
                <span className="text-lg md:text-xl">
                    Get the perfect match with the help of our AI recommendation engine, which gives profile suggestions based on your preferences
                </span>
            </div>
        </div>
    );
};

export default MainPage;