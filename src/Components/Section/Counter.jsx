import counter_1 from "../../assets/Images/Shape/counter_1.svg"
import counter_2 from "../../assets/Images/Shape/counter_2.svg"
import counter_3 from "../../assets/Images/Shape/counter_3.svg"
import counter_4 from "../../assets/Images/Shape/counter_4.svg"
import CountUp from "react-countup"

const Counter = () => {
    return (
        <div className='bg-custom bg-[url("./assets/Images/Shape/counter_bg.png")] bg-no-repeat bg-cover bg-center py-20'>
            <div className="container mx-auto">
                <div className="grid grid-cols-4 max-md:grid-cols-2 max-md:gap-y-8">
                    <div className="flex justify-center gap-x-1.5 max-md:block max-md:text-center max-md:space-y-3">
                        <div className="bg-white flex justify-center items-center z-10 w-[115px] h-[100px] clip-path-custom relative max-md:mx-auto">
                            <img src={counter_1} alt="counter_1" className="block my-auto" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[38px] tracking-[-3px] text-white"><CountUp end={986} />+</h3>
                            <p className="text-white font-medium text-base">Finished Project</p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-x-1.5 max-md:block max-md:text-center max-md:space-y-3">
                        <div className="bg-white flex justify-center items-center z-10 w-[115px] h-[100px] clip-path-custom relative max-md:mx-auto">
                            <img src={counter_2} alt="counter_2" className="block my-auto" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[38px] tracking-[-3px] text-white"><CountUp end={896} />+</h3>
                            <p className="text-white font-medium text-base">Happy Clients</p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-x-1.5 max-md:block max-md:text-center max-md:space-y-3">
                        <div className="bg-white flex justify-center items-center z-10 w-[115px] h-[100px] clip-path-custom relative max-md:mx-auto">
                            <img src={counter_3} alt="counter_3" className="block my-auto" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[38px] tracking-[-3px] text-white"><CountUp end={396} />+</h3>
                            <p className="text-white font-medium text-base">Skilled Experts</p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-x-1.5 max-md:block max-md:text-center max-md:space-y-3">
                        <div className="bg-white flex justify-center items-center z-10 w-[115px] h-[100px] clip-path-custom relative max-md:mx-auto">
                            <img src={counter_4} alt="counter_4" className="block my-auto" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[38px] tracking-[-3px] text-white"><CountUp end={496} />+</h3>
                            <p className="text-white font-medium text-base">Honorable Awards</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter