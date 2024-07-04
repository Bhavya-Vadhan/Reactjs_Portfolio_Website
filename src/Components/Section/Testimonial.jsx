import { FaStar } from "react-icons/fa";
import Shape from "../../assets/Images/Shape/title_shape.svg"
import { Testimonial_data } from "../Data"
import Slider from "react-slick";

const Testimonial = () => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
            <div div className="py-32 overflow-hidden max-md:py-20 max-md:px-4" >
                <div className="container mx-auto">
                    <div className="pb-10 max-md:pb-6">
                        <div className="flex justify-center items-center gap-2 pb-3">
                            <img src={Shape} alt="Shape" />
                            <span className="text-base text-custom font-bold">CUSTOMER FEEDBACK</span>
                        </div>
                        <h1 className="text-4xl text-black text-center font-bold leading-[48px] max-md:text-[26px] max-md:leading-10">What Happy Clients Says <span className="text-custom font-normal block">About Us?</span></h1>
                    </div>
                    <Slider {...settings}>
                        {
                            Testimonial_data.map(e => {
                                const { id, image, description, name, designation } = e
                                return (
                                    <div className="shadow-3xl p-8 rounded-xl" key={id}>
                                        <div className="flex items-center gap-x-8 max-md:flex-col max-md:gap-y-5">
                                            <div className="min-w-[180px]">
                                                <img src={image} alt="" className="rounded-xl max-md:rounded-full" />
                                            </div>
                                            <div>
                                                <p className="text-grey text-base leading-7 pb-6">{description}</p>
                                                <div className="flex items-center justify-between border-t-[1px] border-[#E2E8FA] pt-6 max-md:flex-col-reverse max-md:gap-y-3 max-md:text-center">
                                                    <div>
                                                        <h3 className="text-xl text-black font-bold">{name}</h3>
                                                        <p className="text-grey text-sm font-medium">{designation}</p>
                                                    </div>
                                                    <div className="flex text-custom">
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Testimonial