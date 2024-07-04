import { FaArrowRight, FaCalendarAlt, FaComments } from "react-icons/fa";
import Blog_1 from "../../assets/Images/Blog/blog_1.jpg"
import Avatar from "../../assets/Images/Shape/avatar.png"

const Blogs = ({ title }) => {
    return (
        <>
            <div className="shadow-lg rounded-2xl">
                <div>
                    <img src={Blog_1} alt="Blog_1" className="rounded-t-2xl w-full" />
                </div>
                <div className="p-8 max-md:p-7">
                    <div className="flex gap-x-6 text-grey text-[15px] pb-3">
                        <p className="flex items-center gap-x-2"><FaCalendarAlt /> 13 Feb, 2023</p>
                        <p className="flex items-center gap-x-2"><FaComments /> 3 Comments</p>
                    </div>
                    <h1 className="text-2xl font-semibold text-black pb-3 leading-8 max-md:text-[20px] max-md:leading-8">{title}</h1>
                    <p className="text-base text-grey leading-7 pb-4">Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate</p>
                    <div className="flex justify-between items-center pt-4 border-t-[1px] border-[#E0E0E0]">
                        <div className="flex items-center gap-x-1">
                            <img src={Avatar} alt="Avatar" className="w-10 h-10" />
                            <p className="text-base text-grey font-medium">By Webteck</p>
                        </div>
                        <div>
                            <button className="relative flex items-center gap-x-1.5 text-grey font-medium text-base after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-grey after:bottom-[-3px] after:left-0 hover:after:w-6/12 after:transition-all">Read More <FaArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs