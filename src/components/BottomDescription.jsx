import datinglogo from '../assets/datinglogo.png'


const Description = () => {
    return (
        // <div className=" bg-gradient-to-b from-gray-50/50 to-[#ff6600]/70 pt-[5%] w-auto h-[100vh] flex items justify-center">
        <div className=" mb-5 pt-5 bg-white/70">
            <div className="flex justify-center">
                <img className='h-[100px] lg:h-40' src={datinglogo} alt="" />
            </div>
            <div className='flex text-black/65 flex-col ml-5 lg:ml-10 gap-2 text-lg'>
                <span>- Famly, India’s trusted family-first matchmaking platform, was created to unite families, not just individuals, in marriage.</span>
                <span>- Famly empowers parents to find matches for their children with verified family profiles that share values and traditions.</span>
                <span>- It offers government ID-verified profiles, horoscope compatibility, and 20+ advanced filters for precise searches by community, location, age, religion, or language. </span>
                <span>- Secure communication through chat and video calls helps families build meaningful relationships.</span>
                <span>- Famly is more than matchmaking—it’s where traditions meet technology, bringing families together. </span>
                <span>- Join Famly today to celebrate the union of families and values. 
</span>
            </div>
        </div>
    );
    
}

export default Description;