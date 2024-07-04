import { FaPlay, FaCheckSquare } from "react-icons/fa";
import Hero_img from "../assets/Images/hero_img.png"
import Hero_mobile_img from "../assets/Images/hero_mobile_img.png"
import About_img from "../assets/Images/About_1.jpg"
import About_img_2 from "../assets/Images/About_2.jpg"
import About_img_3 from "../assets/Images/About_3.jpg"
import Shape from "../assets/Images/Shape/title_shape.svg"
import About_shape from "../assets/Images/Shape/about_shape.png"
import Button from "./Section/Button"
import Counter from "./Section/Counter";
import Video_shape from "../assets/Images/video_shape.png"
import Inner_service from "./Section/Inner_service";
import Teams from "./Section/Teams";
import { Package_detail, accordion } from "./Data"
import Faq from "../assets/Images/faq.png"
import Blogs from "./Props/Blogs";
import Client from "./Section/Client";
import Testimonial from "./Section/Testimonial";
import Slider from "react-slick";
import { useState } from "react";

const Home = () => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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

    const [check, setCheck] = useState(false)

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#f7f8fd] to-[#e4e2fc] -mt-24 overflow-hidden pb-28 max-md:pb-20 max-md:pt-28 max-md:px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 items-center max-md:grid-cols-1 max-md:flex max-md:flex-col-reverse max-md:gap-y-10">
                        <div className="relative z-10 after:content-[''] after:absolute after:bg-[url('./assets/Images/Shape/hero_shape.png')] after:bg-cover after:bg-no-repeat after:w-[650px] after:h-[650px] after:top-[-100px] after:left-0 after:z-[-1] max-md:after:hidden max-md:text-center">
                            <span className="inline-block pb-2 text-custom font-semibold text-xl max-md:text-lg">SECURE & IT SERVICES</span>
                            <h1 className="text-[40px] text-black font-bold pb-4 max-md:text-[35px] max-md:leading-[46px]">Webteck Best IT Solution 2024</h1>
                            <p className="text-base text-grey leading-6 pb-7 max-md:text-[15px]">Energistically harness ubiquitous imperatives without state of the art collaboration and idea-sharing. Monotonectally parallel task cross-unit experiences and front-end.</p>
                            <div className="flex items-center gap-8 max-md:block max-md:space-y-5">
                                <div className="max-md:flex max-md:justify-center">
                                    <Button title="About Us" width="w-36" hover="bg-black" />
                                </div>
                                <div className="flex items-center gap-2 max-md:justify-center">
                                    <div className="bg-custom text-white flex justify-center items-center rounded-full w-14	h-14 relative after:content-[''] after:absolute after:w-14 after:h-14 after:rounded-full after:bg-black after:z-[-1]">
                                        <FaPlay />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-black text-lg">Watch Our Story</h3>
                                        <p className="text-grey font-semibold text-sm">Subscribe Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-9 relative z-10 after:content-[''] after:absolute after:w-[500px] after:h-[500px] after:bg-custom after:-left-12 after:-bottom-12 after:rounded-full after:z-[-1] max-md:after:hidden max-md:mr-0">
                            <img src={Hero_img} alt="Hero_img" className="relative z-[5] max-md:hidden" />
                            <img src={Hero_mobile_img} alt="Hero_mobile_img" className="hidden max-md:block max-md:w-[320px] max-md:h-[400px]" />
                        </div>
                    </div>
                </div>
            </section >

            {/* About Us */}
            <section section className="py-16 relative overflow-hidden max-md:px-4 after:content-[''] after:absolute after:bottom-0 after:right-0 after:bg-[url(./assets/Images/about_bg.png)] after:bg-cover after:bg-no-repeat after:w-[500px] after:h-[490px]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 items-center max-md:grid-cols-1 max-md:gap-y-9">
                        <div className="relative">
                            <img src={About_img} alt="About_img" className="rounded-lg ml-[50px] max-md:ml-0" />
                            <div className="absolute right-16 bottom-12 border-[10px] border-white rounded-lg max-md:right-0 max-md:bottom-0 max-md:border-[6px] max-md:max-w-[240px]">
                                <img src={About_img_2} alt="About_img_2" />
                            </div>
                            <div className="absolute left-[-50px] top-[70px] max-md:max-w-[120px]">
                                <img src={About_img_3} alt="About_img_3" className="rounded-lg" />
                            </div>
                            <div className="absolute top-16 -left-28 z-[-1] max-md:hidden">
                                <img src={About_shape} alt="About_shape" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 pb-4">
                                <img src={Shape} alt="Shape" />
                                <span className="text-base text-custom font-semibold">ABOUT TRAGA IT SOLUTIONS</span>
                            </div>
                            <h1 className="text-4xl pb-4 text-black font-bold leading-[48px] max-md:text-[22px] max-md:leading-[32px]">Preparing For Your Business Provide Best <span className="text-custom font-normal">IT Solution</span></h1>
                            <p className="text-grey text-base pb-4 max-md:text-[15px]">Quickly re-engineer intuitive e-services whereas compelling niches. Professionally syndicate strategic e-commerce without covalent leadership skills. Globally customize equity invested imperatives.</p>
                            <ul className="pb-5 space-y-3">
                                <li className="flex items-center gap-x-3 text-black font-medium text-base max-md:text-[15px]"><FaCheckSquare className="text-custom w-6 h-6" />Dramatically re-engineer value added IT systems via mission</li>
                                <li className="flex items-center gap-x-3 text-black font-medium text-base max-md:text-[15px]"><FaCheckSquare className="text-custom w-6 h-6" />Website & Mobile application design & Development</li>
                                <li className="flex items-center gap-x-3 text-black font-medium text-base max-md:text-[15px]"><FaCheckSquare className="text-custom w-6 h-6" />Professional User Experince & Interface researching</li>
                            </ul>
                            <Button title="Discover More" width="w-48" />
                        </div>
                    </div>
                </div>
            </section >

            {/* Counter */}
            < Counter />

            {/* Video Section */}
            <div div className="bg-[#f5f5f5] py-24 max-md:px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 gap-x-12 max-md:grid-cols-1 max-md:gap-y-12">
                        <div>
                            <div className="flex items-center gap-2 pb-4 max-md:justify-center">
                                <img src={Shape} alt="Shape" />
                                <span className="text-base text-custom font-semibold">GREAT IT SKILLS</span>
                            </div>
                            <h1 className="text-4xl pb-4 text-black font-bold leading-[48px] max-md:text-center max-md:text-[26px] max-md:leading-9">More Than 24+ Years Experience We Provide<span className="text-custom font-normal"> IT Solution</span></h1>
                            <p className="text-grey text-base pb-6 max-md:text-center max-md:text-[15px]">Collaboratively envisioneer user friendly supply chains and cross unit imperative. Authoritativel fabricate competitive resource and holistic. Holisticly restore real time resources whereas standardized networks.</p>
                            <ul className="space-y-3">
                                <li>
                                    <h3 className="text-black font-semibold pb-2.5">Business Strategy</h3>
                                    <div className="w-full bg-white h-3 rounded-full p-1 relative">
                                        <div className="w-[85%]	h-full bg-custom rounded-full"></div>
                                        <span className="absolute top-[-34px] right-[95px] text-black font-semibold max-md:right-[55px]">85%</span>
                                    </div>
                                </li>
                                <li>
                                    <h3 className="text-black font-semibold pb-2.5">Software Development</h3>
                                    <div className="w-full bg-white h-3 rounded-full p-1 relative">
                                        <div className="w-[95%]	h-full bg-custom rounded-full"></div>
                                        <span className="absolute top-[-34px] right-[35px] text-black font-semibold max-md:right-[25px]">95%</span>
                                    </div>
                                </li>
                                <li>
                                    <h3 className="text-black font-semibold pb-2.5">Website Security</h3>
                                    <div className="w-full bg-white h-3 rounded-full p-1 relative">
                                        <div className="w-[90%]	h-full bg-custom rounded-full"></div>
                                        <span className="absolute top-[-34px] right-[65px] text-black font-semibold max-md:right-[40px]">90%</span>
                                    </div>
                                </li>
                                <li>
                                    <h3 className="text-black font-semibold pb-2.5">Artificial Intelligence</h3>
                                    <div className="w-full bg-white h-3 rounded-full p-1 relative">
                                        <div className="w-[80%]	h-full bg-custom rounded-full"></div>
                                        <span className="absolute top-[-34px] right-[125px] text-black font-semibold max-md:right-[75px]">80%</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img src={Video_shape} alt="Video_shape" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Services */}
            <div div className="py-32 overflow-hidden max-md:py-20 max-md:px-4" >
                <div className='container mx-auto'>
                    <div className='grid items-center grid-cols-2 pb-10 max-md:grid-cols-1 max-md:gap-y-4'>
                        <div>
                            <div className="flex items-center gap-2 pb-3 max-md:justify-center">
                                <img src={Shape} alt="Shape" />
                                <span className="text-base text-custom font-semibold">WHAT WE DO</span>
                            </div>
                            <h1 className="text-4xl text-black font-bold leading-[48px] max-md:text-center max-md:text-[26px] max-md:leading-9">We Provide Exclusive Service For <span className="text-custom font-normal">Your Business</span></h1>
                        </div>
                        <div className="flex justify-end max-md:justify-center">
                            <Button title="View All Services" width="w-48" />
                        </div>
                    </div>
                    <Inner_service />
                </div>
            </div>

            {/* Teams */}
            < Teams />

            {/* Testimonial */}
            <Testimonial />

            {/* Call to action */}
            <div div className="bg-[url('./assets/Images/cta_bg.jpg')] bg-no-repeat bg-cover bg-center py-32 max-md:px-4 max-md:py-24" >
                <div className="container mx-auto text-center">
                    <div className="flex justify-center items-center gap-2 pb-3">
                        <img src={Shape} alt="Shape" />
                        <span className="text-base text-custom font-semibold">CONTACT US</span>
                    </div>
                    <h1 className="text-4xl pb-8 text-white font-semibold leading-[48px] max-md:text-[25px] max-md:leading-9">Need Any Kind Of IT Solution For <span className="text-custom font-normal block max-md:inline-block">Your Business?</span></h1>
                    <div className="flex justify-center">
                        <Button title="Get in Touch" text="text-black" color="bg-white" hover="bg-custom" width="w-44" />
                    </div>
                </div>
            </div>

            {/* Package */}
            <div className="py-32 max-md:py-20 max-md:px-4" >
                <div className="container mx-auto">
                    <div>
                        <div className="flex justify-center items-center gap-2 pb-3">
                            <img src={Shape} alt="Shape" />
                            <span className="text-base text-custom font-semibold">OUR PRICING</span>
                        </div>
                        <h1 className="text-4xl pb-8 text-black font-bold leading-[48px] text-center max-md:text-[26px]">Popular Pricing  <span className="text-custom font-normal">Package</span></h1>
                    </div>
                    <div className="grid grid-cols-3 gap-x-6 max-md:grid-cols-1 max-md:gap-y-7">
                        {
                            Package_detail.map(e => {
                                const { id, heading, descriptiom, price, option } = e;
                                return (
                                    <div key={id} className="group">
                                        <div className='bg-black rounded-t-xl text-white py-8 relative z-10 overflow-hidden after:content-[""] after:absolute after:w-[110px] after:h-[110px] after:bg-custom after:top-[-28px] after:left-[-80px] after:rounded-[50%] after:opacity-60 after:z-[-1] group-hover:after:w-[120%] group-hover:after:h-[115%] group-hover:after:rounded-none group-hover:after:opacity-100  before:content-[""] before:absolute before:w-[110px] before:h-[110px] before:bg-custom before:top-[-78px] before:left-[-20px] before:rounded-[50%] before:z-[-1] before:transition-all before:opacity-60 group-hover:before:w-[105%] group-hover:before:h-[135%] group-hover:before:rounded-none group-hover:before:transition-all group-hover:before:opacity-100 max-md:py-5'>
                                            <h3 className="text-[28px] font-semibold px-8 pb-1">{heading}</h3>
                                            <p className="text-base text-white border-b-2 border-custom px-8 pb-8 group-hover:border-white transition-all max-md:text-[15px]">{descriptiom}</p>
                                            <h4 className="font-semibold text-[26px] px-8 pt-8">{price}<span className="font-normal text-base">/Per Month
                                            </span></h4>
                                            <div className='after:content-[""] after:absolute after:bg-[url("./assets/Images/Shape/price_particle.png")] after:bg-no-repeat after:bg-cover after:w-[189px] after:h-[165px] after:bottom-0 after:right-0 group-hover:after:brightness-200'></div>
                                        </div>
                                        <div className="bg-[#f5f5f5] p-8 rounded-b-xl">
                                            <ul className="space-y-3">
                                                {
                                                    option.map(e => {
                                                        const { icon, title } = e;
                                                        return (
                                                            <li className="flex gap-x-2 items-center">{icon}{title}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <div className="pt-8">
                                                <Button title="Purchase Now" width="w-44" color="bg-black" hover="bg-custom" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* Client Logo */}
            <Client />

            {/* Accordion */}
            <div div className="bg-[#f5f5f5] py-24 max-md:px-4" >
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-y-12">
                        <div>
                            <div className="flex items-center gap-2 pb-3 max-md:justify-center">
                                <img src={Shape} alt="Shape" />
                                <span className="text-base text-custom font-semibold">FREQUENTLY ASK QUESTION</span>
                            </div>
                            <h1 className="text-4xl pb-8 text-black font-bold leading-[48px] max-md:text-[23px]">Talk To About Any<span className="text-custom font-normal"> Question?</span></h1>
                            <div className="space-y-5">
                                {
                                    accordion.map(e => {
                                        const { id, heading, description, plus, minus } = e;
                                        return (
                                            <div key={id}>
                                                <div className="bg-white rounded-md py-4 px-6 cursor-pointer flex justify-between items-center max-md:px-4" onClick={() => setCheck(!check)}>
                                                    <h1 className="font-bold text-lg max-md:text-[15px]">{heading}</h1>
                                                    {
                                                        check ? minus : plus
                                                    }
                                                </div>
                                                {
                                                    check ? <div className="bg-white py-4 px-6">
                                                        <p className="text-base text-[#A1A6B0] leading-6">{description}</p>
                                                    </div> : null
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="ml-auto">
                            <img src={Faq} alt="Faq" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Blogs */}
            <div div className="py-24 overflow-hidden max-md:px-4" >
                <div className="container mx-auto">
                    <div>
                        <div className="flex justify-center items-center gap-2 pb-3">
                            <img src={Shape} alt="Shape" />
                            <span className="text-base text-custom font-semibold">NEWS & ARTICLES</span>
                        </div>
                        <h1 className="text-4xl pb-8 text-black font-bold leading-[48px] text-center max-md:text-[26px] max-md:leading-9">Get Every Single Update Blog</h1>
                    </div>
                    <Slider {...settings}>
                        <Blogs title="Regional Manager limited time management." />
                        <Blogs title="What’s the Holding Back It Solution Industry?" />
                        <Blogs title="Latin derived from Cicero’s 1st-century BC" />
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Home