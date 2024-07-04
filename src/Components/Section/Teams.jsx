import Shape from "../../assets/Images/Shape/title_shape.svg"
import { Team } from ".././Data"
import { FaPlus, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const Teams = () => {

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
            <div className='bg-[#F5F5F5] overflow-hidden py-24 bg-[url("./assets/Images/Shape/team_bg.png")] bg-no-repeat bg-cover bg-center max-md:py-20 max-md:px-4'>
                <div className="container mx-auto">
                    <div className="pb-10 max-md:pb-7">
                        <div className="flex justify-center items-center gap-2 pb-3">
                            <img src={Shape} alt="Shape" />
                            <span className="text-base text-custom font-semibold">GREAT TEAM</span>
                        </div>
                        <h1 className="text-4xl text-black font-bold text-center max-md:text-[24px]">See Our Skilled Expert <span className="text-custom font-normal">Team</span></h1>
                    </div>
                    <Slider {...settings}>
                        {
                            Team.map(e => {
                                const { id, image, name, designation } = e
                                return (
                                    <div key={id} className="group">
                                        <div className="relative">
                                            <img src={image} alt="" className="rounded-t-lg w-full" />
                                            <div className="group/item">
                                                <div className="absolute mt-[-70px] left-0 right-0 bg-custom w-9 h-9 flex justify-center items-center rounded-full text-white mx-auto z-10">
                                                    <FaPlus className="group-hover/item:rotate-45 transition-all" />
                                                </div>
                                                <div className="absolute mt-[-70px] left-0 right-0 flex justify-center gap-x-2 mx-auto scale-x-0 group-hover/item:scale-100 group-hover/item:duration-300 duration-300 group-hover/item:transition">
                                                    <NavLink className="bg-white w-9 h-9 flex justify-center items-center rounded-full text-custom">
                                                        <FaFacebookF />
                                                    </NavLink>
                                                    <NavLink className="bg-white w-9 h-9 flex justify-center items-center rounded-full text-custom mr-[50px]">
                                                        <FaTwitter />
                                                    </NavLink>
                                                    <NavLink className="bg-white w-9 h-9 flex justify-center items-center rounded-full text-custom">
                                                        <FaInstagram />
                                                    </NavLink>
                                                    <NavLink className="bg-white w-9 h-9 flex justify-center items-center rounded-full text-custom">
                                                        <FaLinkedinIn />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-b-lg text-center py-6 group-hover:bg-custom transition">
                                            <h1 className="text-2xl text-black font-bold pb-1 group-hover:text-white transition">{name}</h1>
                                            <h1 className="text-custom text-sm group-hover:text-white transition">{designation}</h1>
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

export default Teams