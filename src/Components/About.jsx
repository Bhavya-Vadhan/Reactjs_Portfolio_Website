import Breadcrumb from "./Props/Breadcrumb"
import Counter from "./Section/Counter"
import Teams from "./Section/Teams"
import Testimonial from "./Section/Testimonial"

const About = () => {
    return (
        <>
            <Breadcrumb title="About Us" />
            <Teams />
            <Counter />
            <Testimonial />
        </>
    )
}

export default About