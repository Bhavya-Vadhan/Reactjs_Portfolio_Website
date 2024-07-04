import { FaArrowRight } from "react-icons/fa";

const Button = ({ title, width, text = "text-white", text_hover = "text-white", color = "bg-custom", hover = "bg-black" }) => {
    return (
        <button className={`flex items-center justify-center gap-2.5 ${color} text-base font-medium font-sm ${text} ${width} h-12 rounded-md relative z-10 hover:${text_hover} after:content-[''] after:absolute after:w-full after:h-0 after:${hover} after:top-0 after:bottom-0 after:my-auto after:left-0 after:rounded-md after:z-[-1] hover:after:h-full after:transition-all after:duration-200 after:ease-linear`}>{title} < FaArrowRight /></button>
    )
}

export default Button