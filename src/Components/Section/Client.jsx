import logo from "../../assets/Images/Logo/brand_1.png"
import Slider from "react-slick";

const Client = () => {

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
                    slidesToShow: 2
                }
            }
        ]
    };

    return (
        <>
            <div div className="bg-black py-14 overflow-hidden clip-path-client max-md:clip-path-inherit max-md:rounded-xl max-md:mx-4 max-md:py-10" >
                <div className="container mx-auto">
                    <Slider {...settings}>
                        <div className="px-2">
                            <img src={logo} alt="" className="block mx-auto" />
                        </div>
                        <div className="px-2">
                            <img src={logo} alt="" className="block mx-auto" />
                        </div>
                        <div className="px-2">
                            <img src={logo} alt="" className="block mx-auto" />
                        </div>
                        <div className="px-2">
                            <img src={logo} alt="" className="block mx-auto" />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Client