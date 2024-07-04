import { NavLink } from "react-router-dom"
import Logo from "../assets/Images/logo.svg"
import { IoSearch, IoClose } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { TbMenu2 } from "react-icons/tb";
import { useState } from "react";

const Header = () => {

    const [open, updateOpen] = useState(false);

    const menu = () => updateOpen(true)

    const second_menu = () => updateOpen(false)

    return (
        <>
            <div className="p-4 relative z-10">
                <div className='container flex justify-between items-center flex-wrap mx-auto'>
                    <div className="logo-box">
                        <NavLink to="">
                            <img src={Logo} alt="Logo" />
                        </NavLink>
                    </div>
                    <ul className="flex space-x-[30px] text-[16px] font-medium max-md:hidden">
                        <li>
                            <NavLink to="" className="hover:text-custom transition">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="about-us" className="hover:text-custom transition">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="services" className="hover:text-custom transition">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="blog" className="hover:text-custom transition">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="contact-us" className="hover:text-custom transition">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="flex space-x-4 max-md:hidden">
                        <IoSearch className="text-[30px] border-[1px] w-[45px] h-[45px] p-[12px] rounded border-[#bdbdbd] hover:bg-custom hover:fill-white hover:border-custom transition-all cursor-pointer" />
                        <BsCart3 className="text-[30px] border-[1px] w-[45px] h-[45px] p-[12px] rounded border-[#bdbdbd] hover:bg-custom hover:fill-white hover:border-custom transition-all cursor-pointer" />
                    </div>
                    <div className="bg-custom text-white hidden max-md:flex max-md:justify-center max-md:items-center w-[50px] h-[50px] rounded-lg" onClick={menu}>
                        <TbMenu2 className="w-[25px] h-[25px]" />
                    </div>
                </div>
            </div>
            {
                open ? <div className="fixed top-0 left-0 z-[9999] w-screen h-screen bg-[#00000099]">
                    <div className={`h-full w-3/4 bg-white border-[3px] border-r-custom ${open ? "animate-menu" : "translate-x-[50px]"}`}>
                        <div className="bg-[#E2E8FA] py-7 relative">
                            <NavLink to="">
                                <img src={Logo} alt="Logo" className="mx-auto block" />
                            </NavLink>
                            <div className="absolute -right-5 top-[-40px] bottom-0 my-auto bg-custom w-9 h-9 rounded-full text-white flex justify-center items-center" onClick={second_menu}>
                                <IoClose className="w-[20px] h-[20px]" />
                            </div>
                        </div>
                    </div>
                </div >
                    : null
            }
        </>
    )
}

export default Header