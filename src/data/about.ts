export interface AboutData {
    companyName: string;
    tagline: string;
    description: string;
    mission: string;
    vision: string;
    values: {
        title: string;
        description: string;
    }[];
    whyChooseUs: {
        title: string;
        description: string;
    }[];
    stats: {
        number: string;
        label: string;
    }[];
    history: {
        year: string;
        milestone: string;
    }[];
}

export const aboutData: AboutData = {
    companyName: "MCB Construction",
    tagline: "Building Dreams, Creating Legacies",
    description: "MCB Construction is a leading construction company specializing in residential, commercial, and industrial projects. With years of experience and a commitment to excellence, we transform visions into reality through quality craftsmanship, innovative solutions, and unwavering dedication to client satisfaction.",
    mission: "Our mission is to deliver exceptional construction services that exceed client expectations while maintaining the highest standards of quality, safety, and professionalism. We strive to build lasting relationships with our clients by providing transparent communication, reliable service, and outstanding results.",
    vision: "To be the most trusted and sought-after construction partner, recognized for innovation, quality, and customer satisfaction. We envision a future where every project we undertake sets new benchmarks in construction excellence and sustainable building practices.",
    values: [
        {
            title: "Quality Excellence",
            description: "We never compromise on quality. Every project receives our full commitment to superior craftsmanship and attention to detail."
        },
        {
            title: "Integrity & Transparency",
            description: "We operate with honesty and transparency in all our dealings, providing clear communication and realistic expectations."
        },
        {
            title: "Customer Satisfaction",
            description: "Our clients' satisfaction is our top priority. We listen, understand, and deliver solutions that meet and exceed expectations."
        },
        {
            title: "Innovation",
            description: "We embrace modern construction techniques and technologies to deliver efficient, sustainable, and cost-effective solutions."
        },
        {
            title: "Safety First",
            description: "We maintain rigorous safety standards to protect our team, clients, and communities in every project we undertake."
        },
        {
            title: "Sustainability",
            description: "We're committed to environmentally responsible construction practices that minimize impact and maximize efficiency."
        }
    ],
    whyChooseUs: [
        {
            title: "Experienced Team",
            description: "Our team consists of skilled professionals with years of experience in various construction disciplines."
        },
        {
            title: "Quality Assurance",
            description: "We implement strict quality control measures and use only premium materials to ensure lasting results."
        },
        {
            title: "On-Time Delivery",
            description: "We respect your time and budget. Our projects are completed on schedule without compromising quality."
        },
        {
            title: "Comprehensive Services",
            description: "From planning to completion, we offer end-to-end construction services under one roof."
        },
        {
            title: "Transparent Pricing",
            description: "No hidden costs. We provide detailed, upfront quotes and maintain transparency throughout the project."
        },
        {
            title: "Licensed & Insured",
            description: "Fully licensed, bonded, and insured for your peace of mind and protection."
        },
        {
            title: "Customer Support",
            description: "Dedicated support team available to address your concerns and ensure smooth project execution."
        },
        {
            title: "Warranty Protection",
            description: "We stand behind our work with comprehensive warranties on materials and workmanship."
        }
    ],
    stats: [
        {
            number: "500+",
            label: "Projects Completed"
        },
        {
            number: "15+",
            label: "Years Experience"
        },
        {
            number: "450+",
            label: "Happy Clients"
        },
        {
            number: "98%",
            label: "Satisfaction Rate"
        }
    ],
    history: [
        {
            year: "2008",
            milestone: "MCB Construction founded with a vision to deliver quality construction services."
        },
        {
            year: "2012",
            milestone: "Expanded services to include commercial and industrial projects."
        },
        {
            year: "2015",
            milestone: "Completed first major highrise project, establishing reputation in commercial construction."
        },
        {
            year: "2018",
            milestone: "Received industry recognition for excellence in sustainable building practices."
        },
        {
            year: "2020",
            milestone: "Reached milestone of 300+ completed projects and expanded team to 100+ professionals."
        },
        {
            year: "2023",
            milestone: "Introduced cutting-edge construction technologies and sustainable building solutions."
        },
        {
            year: "2024",
            milestone: "Celebrating over 500 successful projects and continued commitment to excellence."
        }
    ]
};
