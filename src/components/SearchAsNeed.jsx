import mobile1 from '../images/mobile1.png';
import mobile2 from '../images/mobile2.png';
import mobile3 from '../images/mobile3.png';
import mobile4 from '../images/mobile4.png';


const SearchAsNeed = () => {
    return (
        <div className='mt-[10%]'>
        <div className="h-auto flex bg-white/80 justify-center">
            <div className="flex h-[80vh] rounded-full bg-orange-50 justify-center items-center w-[50%] font-bold">
                <div className=' p-5 h-full flex flex-col justify-center'>
                    <img src={mobile1} className='' alt="" />
                </div>
                <div className=' p-5 h-full flex flex-col justify-end pb-10'>
                <img src={mobile2} alt="" />
                </div>
            </div>
            <div className="w-[40%] flex flex-col justify-center gap-4 p-10">
            <span className="text-4xl font-bold">
                Search as per your Needs 
                </span>
                <span className="text-xl">
                Customised your search for your special family based on your needs
                </span>
            </div>
        </div>
        <KnowMoreFamily/>
        <AiDriven/>
        </div>
    );
    
    
}

const KnowMoreFamily = ()=> {
    return (
        <div className="h-auto flex bg-white/80 justify-center">
             <div className="w-[40%] flex flex-col justify-center gap-4 p-10">
             <span className="text-4xl font-bold">
                Know more about the Family
                </span>
                <span className="text-xl">
                Get informed about the the members of the family you will be spending your life with
                </span>
            </div>
            <div className="flex h-[80vh] bg-orange-50 rounded-full justify-center items-center w-[50%] font-bold">
                <div className=' p-5 h-full flex flex-col justify-center'>
                    <img src={mobile3} className='' alt="" />
                </div>
                <div className=' p-5 h-full flex flex-col justify-end pb-10'>
                <img src={mobile4} alt="" />
                </div>
            </div>

        </div>
    );

}

const AiDriven = ()=> {
    return (
        <div className="h-auto flex bg-white/80 justify-center">

            <div className="flex h-[80vh] rounded-full bg-orange-50 justify-center items-center w-[50%] font-bold">
                <div className=' p-5 h-full flex flex-col justify-center'>
                    <img src={mobile3} className='' alt="" />
                </div>
                <div className=' p-5 h-full flex flex-col justify-end pb-10'>
                <img src={mobile4} alt="" />
                </div>
            </div>
            <div className="w-[40%] flex flex-col justify-center gap-4 p-10">
             <span className="text-4xl font-bold">
                 AI-driven match recommendations to suit your preferences
                </span>
                <span className="text-xl">
                Get the perfect Match with the help of our Ai- recommendation engine which gives profile suggestions based on your preferneces
                </span>
            </div>

        </div>
    );

}

export default SearchAsNeed;