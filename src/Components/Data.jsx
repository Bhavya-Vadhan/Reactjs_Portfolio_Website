import { FaCheckCircle, FaPlus, FaMinus } from "react-icons/fa"
import service_icon_1 from "../assets/Images/Shape/service_icon_1.svg"
import service_box_1 from "../assets/Images/service_box_1.jpg"
import team_1 from "../assets/Images/Teams/team_1.jpg"
import testi_1 from "../assets/Images/testi_1.jpg"

const Menu = [
    {
        id: 1,
        path: "",
        Name: "Home"
    },
    {
        id: 2,
        path: "About",
        Name: "About Us"
    },
    {
        id: 3,
        path: "Services",
        Name: "Services"
    },
    {
        id: 4,
        path: "Blog",
        Name: "Blog"
    },
    {
        id: 5,
        path: "Contact",
        Name: "Contact"
    }
]

const Services = [
    {
        id: 1,
        icon: service_icon_1,
        image: service_box_1,
        title: "Software Services",
        descriptiom: "Intrinsicly redefine competitive e-business before adaptive."
    },
    {
        id: 2,
        icon: service_icon_1,
        image: service_box_1,
        title: "Web Development",
        descriptiom: "Intrinsicly redefine competitive e-business before adaptive."
    },
    {
        id: 3,
        icon: service_icon_1,
        image: service_box_1,
        title: "UI/UX Design",
        descriptiom: "Intrinsicly redefine competitive e-business before adaptive."
    },
    {
        id: 4,
        icon: service_icon_1,
        image: service_box_1,
        title: "Digital Marketing",
        descriptiom: "Intrinsicly redefine competitive e-business before adaptive."
    }
]

const Team = [
    {
        id: 1,
        image: team_1,
        name: "Alex Furnandes",
        designation: "Project Manager"
    },
    {
        id: 2,
        image: team_1,
        name: "Alex Furnandes",
        designation: "Project Manager"
    },
    {
        id: 3,
        image: team_1,
        name: "Alex Furnandes",
        designation: "Project Manager"
    },
    {
        id: 4,
        image: team_1,
        name: "Alex Furnandes",
        designation: "Project Manager"
    }
]

const Package_detail = [
    {
        id: 1,
        heading: "Silver Package",
        descriptiom: "Pricing plan for IT Solution company",
        price: "$199.00",
        option: [
            {
                icon: <FaCheckCircle className="text-custom" />,
                title: "30 Days Trial Features"
            },
            {
                icon: <FaCheckCircle className="text-custom" />,
                title: "Unlimited Features"
            },
            {
                icon: <FaCheckCircle className="text-custom" />,
                title: "Multi-Language Content"
            },
            {
                icon: <FaCheckCircle className="text-grey" />,
                title: "Data backup and recovery"
            },
            {
                icon: <FaCheckCircle className="text-grey" />,
                title: "Synced To Cloud Database"
            }
        ]
    },
    {
        id: 2,
        heading: "Gold Package",
        descriptiom: "Pricing plan for IT Solution company",
        price: "$199.00",
        option: [
            {
                icon: <FaCheckCircle className="text-custom" />,
                title: "30 Days Trial Features"
            },
            {
                icon: <FaCheckCircle className="text-custom" />,
                title: "Unlimited Features"
            },
            {
                icon: <FaCheckCircle className="text-custom" />,
                title: "Multi-Language Content"
            },
            {
                icon: <FaCheckCircle className="text-custom" />,
                title: "Data backup and recovery"
            },
            {
                icon: <FaCheckCircle className="text-grey" />,
                title: "Synced To Cloud Database"
            }
        ]
    },
    {
        id: 3,
        heading: "Platinum Package",
        descriptiom: "Pricing plan for IT Solution company",
        price: "$199.00",
        option: [
            {
                icon: <FaCheckCircle className="text-custom" />,
                title: "30 Days Trial Features"
            },
            {
                icon: <FaCheckCircle className="text-custom" />,
                title: "Unlimited Features"
            },
            {
                icon: <FaCheckCircle className="text-custom" />,
                title: "Multi-Language Content"
            },
            {
                icon: <FaCheckCircle className="text-custom" />,
                title: "Data backup and recovery"
            },
            {
                icon: <FaCheckCircle className="text-custom" />,
                title: "Synced To Cloud Database"
            }
        ]
    }
]

const accordion = [
    {
        id: 1,
        heading: "Where can I get analytics help?",
        description: "Dramatically disseminate real-time portals rather than top-line action items. Uniquely provide access to low-risk high-yield products without dynamic products. Progressively re-engineer low-risk high-yield ideas rather than emerging alignments.",
        plus: <FaPlus />,
        minus: <FaMinus />
    },
    {
        id: 2,
        heading: "How long should a business plan be?",
        description: "Dramatically disseminate real-time portals rather than top-line action items. Uniquely provide access to low-risk high-yield products without dynamic products. Progressively re-engineer low-risk high-yield ideas rather than emerging alignments.",
        plus: <FaPlus />,
        minus: <FaMinus />
    },
    {
        id: 3,
        heading: "Do I need a business plan?",
        description: "Dramatically disseminate real-time portals rather than top-line action items. Uniquely provide access to low-risk high-yield products without dynamic products. Progressively re-engineer low-risk high-yield ideas rather than emerging alignments.",
        plus: <FaPlus />,
        minus: <FaMinus />
    }
]

const Testimonial_data = [
    {
        id: 1,
        image: testi_1,
        description: "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
        name: "David Farnandes",
        designation: "CEO at Anaton"
    },
    {
        id: 2,
        image: testi_1,
        description: "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
        name: "Jackline Techie",
        designation: "CEO at Kormola"
    },
    {
        id: 3,
        image: testi_1,
        description: "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
        name: "Abraham Khalil",
        designation: "CEO at Rimasu"
    }
]

export { Menu, Services, Team, Package_detail, accordion, Testimonial_data }