export interface FAQ {
    id: number;
    question: string;
    answer: string;
    category: string;
}

export const faqs: FAQ[] = [
    {
        id: 1,
        question: "What types of construction projects do you handle?",
        answer: "We handle a wide range of construction projects including highrise buildings, villas, bungalows, factories, and commercial spaces. Our expertise spans from new construction to renovations and remodeling.",
        category: "General"
    },
    {
        id: 2,
        question: "How do I get a quote for my project?",
        answer: "Simply contact us through our website, phone, or email. We'll schedule a consultation to discuss your project requirements and provide a detailed, transparent quote within 3-5 business days.",
        category: "General"
    },
    {
        id: 3,
        question: "Are you licensed and insured?",
        answer: "Yes, we are fully licensed, bonded, and insured. We maintain all necessary licenses and insurance coverage to protect both our team and your property throughout the construction process.",
        category: "General"
    },
    {
        id: 4,
        question: "What is the typical timeline for a construction project?",
        answer: "Timelines vary based on project scope. Residential homes typically take 10-18 months, villas 14-18 months, and highrise buildings 24-36 months. We provide detailed timelines during the planning phase.",
        category: "Timeline"
    },
    {
        id: 5,
        question: "Do you handle permits and inspections?",
        answer: "Yes, we manage all necessary permits, approvals, and inspections required for your project. We ensure full compliance with local building codes and regulations.",
        category: "Process"
    },
    {
        id: 6,
        question: "Can I make changes during construction?",
        answer: "Yes, changes can be made during construction. We use a formal change order process to document modifications, adjust timelines, and update costs accordingly.",
        category: "Process"
    },
    {
        id: 7,
        question: "What payment terms do you offer?",
        answer: "We typically work on a milestone-based payment schedule. Payments are divided into stages based on project completion percentages. Details are outlined in your contract.",
        category: "Payment"
    },
    {
        id: 8,
        question: "Do you offer warranties on your work?",
        answer: "Yes, we provide warranties on our workmanship and materials. Specific warranty terms vary by project type and are detailed in your contract. We stand behind the quality of our work.",
        category: "Warranty"
    },
    {
        id: 9,
        question: "How do you ensure quality control?",
        answer: "We implement strict quality control measures including regular inspections, adherence to building codes, use of quality materials, and experienced supervision throughout the project.",
        category: "Quality"
    },
    {
        id: 10,
        question: "Can you work with my architect or designer?",
        answer: "Absolutely! We frequently collaborate with clients' architects and designers. We can also provide design services if needed.",
        category: "Collaboration"
    },
    {
        id: 11,
        question: "What sets MCB Construction apart from other contractors?",
        answer: "Our commitment to quality, transparency, and customer satisfaction sets us apart. We combine experienced craftsmanship with modern techniques, maintain clear communication, and deliver projects on time and within budget.",
        category: "About Us"
    },
    {
        id: 12,
        question: "Do you provide emergency services?",
        answer: "Yes, we offer 24/7 emergency services for urgent issues like plumbing leaks, electrical problems, and structural concerns. Contact us immediately for emergency assistance.",
        category: "Services"
    }
];

export const faqCategories = [
    "All",
    "General",
    "Timeline",
    "Process",
    "Payment",
    "Warranty",
    "Quality",
    "Collaboration",
    "About Us",
    "Services"
];
