import { Services } from "../Data"
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const Inner_service = () => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <>
            <Slider {...settings}>
                {
                    Services.map(e => {
                        const { id, icon, image, title, descriptiom } = e
                        return (
                            <div key={id} className="shadow-md rounded-lg group overflow-hidden">
                                <div>
                                    <img src={image} alt="" className="w-full rounded-t-lg" />
                                </div>
                                <div className="relative last:text-center px-6 py-10 z-10 rounded-b-lg group-hover:bg-custom group-hover:rounded-b-lg after:content-[''] after:absolute after:bg-[url('./assets/Images/Shape/service_box_bg.png')] after:bg-no-repeat after:bg-cover after:bg-center after:left-0 after:bottom-[-180px] after:w-full after:h-full after:opacity-0 after:transition-all group-hover:after:opacity-100 group-hover:after:bottom-0">
                                    <div className="bg-white absolute left-0 right-0 top-[-40px] mx-auto w-[75px] h-[75px] flex justify-center items-center rounded-full group-hover:bg-custom transition">
                                        <img src={icon} alt="" className="group-hover:brightness-[4]" />
                                    </div>
                                    <h1 className="text-black text-2xl font-semibold pb-2 group-hover:text-white">{title}</h1>
                                    <p className="text-grey text-base group-hover:text-white pb-2">{descriptiom}</p>
                                    <button className="flex justify-center items-center font-medium text-base gap-2 text-custom mx-auto relative transition-all group-hover:text-white after:content-[''] after:absolute after:w-0   after:h-[2px] after:bg-custom after:-bottom-[2px] after:left-0 after:transition-all group-hover:after:bg-white group-hover:after:w-full group-hover:after:transition-all group-hover:after:ease-linear">Read More <FaArrowRight /></button>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    )
}

export default Inner_service