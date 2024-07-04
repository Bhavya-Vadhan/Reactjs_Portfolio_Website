import { NavLink } from "react-router-dom"

const Breadcrumb = ({ title }) => {
    return (
        <>
            <div className='bg-[url("./assets/Images/breadcumb-bg.jpg")] bg-no-repeat bg-cover relative py-40 after:content-[""] after:absolute after:left-0 after:bottom-0 after:bg-gradient-to-tl	from-[#898e9b] to-[#222b42] after:w-[500px] after:h-full after:clip-path-traingle max-md:after:hidden max-md:py-24'>
                <div className="container mx-auto text-white text-center">
                    <h1 className="text-[50px] pb-2 font-semibold max-md:text-[42px]">{title}</h1>
                    <ul className="flex justify-center gap-x-2 text-base font-medium max-md:text-[15px]">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>/</li>
                        <li>{title}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb