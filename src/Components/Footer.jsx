import Logo from "../assets/Images/logo.svg"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane, FaAngleRight, FaMapPin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Menu } from "./Data"

const Footer = () => {

    return (
        <>
            <footer className="bg-[url('./assets/Images/footer_bg.jpg')] bg-cover bg-no-repeat bg-center py-12 max-md:px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-4 gap-4 max-md:grid-cols-1 max-md:gap-y-8">
                        <div>
                            <img src={Logo} alt="Logo" className="w-44 pb-3" />
                            <p className="text-[#737887] text-[15px] leading-6 pb-3">Professionally redefine transparent ROI through low-risk high-yield imperatives. Progressively create empowered. cost effective users via team driven.</p>
                            <ul className="flex gap-x-1.5">
                                <li>
                                    <NavLink to="" className="w-10 h-10 border-[1px] border-grey rounded-full flex justify-center items-center text-grey hover:text-white hover:bg-custom hover:border-custom transition">
                                        <FaFacebookF />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="" className="w-10 h-10 border-[1px] border-grey rounded-full flex justify-center items-center text-grey hover:text-white hover:bg-custom hover:border-custom transition">
                                        <FaTwitter />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="" className="w-10 h-10 border-[1px] border-grey rounded-full flex justify-center items-center text-grey hover:text-white hover:bg-custom hover:border-custom transition">
                                        <FaInstagram />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="" className="w-10 h-10 border-[1px] border-grey rounded-full flex justify-center items-center text-grey hover:text-white hover:bg-custom hover:border-custom transition">
                                        <FaLinkedin />
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="pb-3 max-md:pb-5">
                                <h1 className="font-semibold text-xl pb-2">QUICK LINKS</h1>
                                <span className="relative block w-2/6 h-[3px] bg-custom after:content-[''] after:absolute after:w-2.5 after:h-2.5 after:bg-white after:border-custom after:border-2 after:rounded-full after:right-[-5px] after:top-[-4px]"></span>
                            </div>
                            <ul className="space-y-2">
                                {
                                    Menu.map(e => {
                                        const { id, path, Name } = e
                                        return (
                                            <li key={id}>
                                                <NavLink to={path} className="flex items-center gap-x-1 text-base text-grey hover:text-custom transition">
                                                    <FaAngleRight />
                                                    {Name}
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <div className="pb-3 max-md:pb-5">
                                <h1 className="font-semibold text-xl pb-2">CONTACT US</h1>
                                <span className="relative block w-2/6 h-[3px] bg-custom after:content-[''] after:absolute after:w-2.5 after:h-2.5 after:bg-white after:border-custom after:border-2 after:rounded-full after:right-[-5px] after:top-[-4px]"></span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex gap-x-2.5">
                                    <div className="bg-custom w-12 flex justify-center items-center rounded-lg">
                                        <IoCall className="w-5 h-5 fill-white" />
                                    </div>
                                    <div>
                                        <p className="text-grey text-[15px]">PHONE NUMBER</p>
                                        <p className="text-black font-semibold text-base">+190-8800-0393</p>
                                    </div>
                                </div>
                                <div className="flex gap-x-2.5">
                                    <div className="bg-custom w-12 flex justify-center items-center rounded-lg">
                                        <IoIosMail className="w-5 h-5 fill-white" />
                                    </div>
                                    <div>
                                        <p className="text-grey text-[15px]">EMAIL ADDRESS</p>
                                        <p className="text-black font-semibold text-base">info@traga.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-x-2.5">
                                    <div className="bg-custom w-12 flex justify-center items-center rounded-lg">
                                        <FaMapPin className="w-5 h-5 fill-white" />
                                    </div>
                                    <div>
                                        <p className="text-grey text-[15px]">OFFICE LOCATION</p>
                                        <p className="text-black font-semibold text-base">54 Flemington, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="pb-3 max-md:pb-5">
                                <h1 className="font-semibold text-xl pb-2">GET IN TOUCH!</h1>
                                <span className="relative block w-2/6 h-[3px] bg-custom after:content-[''] after:absolute after:w-2.5 after:h-2.5 after:bg-white after:border-custom after:border-2 after:rounded-full after:right-[-5px] after:top-[-4px]"></span>
                            </div>
                            <p className="text-[#737887] text-[15px] leading-6 pb-3">Subsrcibe to our upcoming latest article and news resources. Sign up today for hints. tips and the latest product news.</p>
                            <form onSubmit={e => e.preventDefault()}>
                                <div className="flex">
                                    <input type="email" name="email" id="email" placeholder="Enter Email Address" className="h-14 pl-4 w-full rounded-s-md outline-none" />
                                    <button type="submit" className="bg-custom h-14 w-16 flex justify-center items-center rounded-e-md">
                                        <FaPaperPlane className="fill-white w-5 h-5" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
            <section className="bg-custom py-4">
                <div className="container ms-auto max-md:text-center">
                    <p className="text-white text-base font-medium">Copyright &copy; 2024 Themeholy. All Rights Reserved.</p>
                </div>
            </section>
        </>
    )
}

export default Footer