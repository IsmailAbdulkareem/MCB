export interface Project {
    id: number;
    name: string;
    slug: string;
    category: "highrise" | "villa" | "bungalow" | "factory";
    description: string;
    shortDescription: string;
    image: string;
    gallery: string[];
    location: string;
    timeline: string;
    features: string[];
}

export const projects: Project[] = [
    // Highrise Buildings
    {
        id: 1,
        name: "Modern Office Tower",
        slug: "modern-office-tower",
        category: "highrise",
        shortDescription: "State-of-the-art office building with sustainable features",
        description: "A cutting-edge commercial office tower featuring 25 floors of premium office space. This project incorporates sustainable building practices, energy-efficient systems, and modern amenities. The building includes high-speed elevators, advanced HVAC systems, and a stunning glass facade that maximizes natural light while minimizing energy consumption.",
        image: "/images/highrise1.jpg",
        gallery: ["/images/highrise1.jpg", "/images/highrise2.jpg", "/images/highrise3.jpg"],
        location: "Downtown Business District",
        timeline: "24 months",
        features: [
            "25 floors of premium office space",
            "LEED certified sustainable design",
            "High-speed elevator systems",
            "Advanced HVAC and energy management",
            "Underground parking for 200+ vehicles",
            "Modern glass curtain wall facade",
            "Rooftop terrace and amenities"
        ]
    },
    {
        id: 2,
        name: "Residential Complex",
        slug: "residential-complex",
        category: "highrise",
        shortDescription: "Luxury residential high-rise with premium amenities",
        description: "An exclusive residential complex featuring luxury apartments with breathtaking city views. This 30-story development offers spacious living areas, high-end finishes, and world-class amenities including a fitness center, swimming pool, and concierge services. Each residence is designed with attention to detail and modern lifestyle needs.",
        image: "/images/highrise2.jpg",
        gallery: ["/images/highrise2.jpg", "/images/highrise1.jpg", "/images/highrise3.jpg"],
        location: "Premium Residential Zone",
        timeline: "30 months",
        features: [
            "30 floors with 180 luxury apartments",
            "Panoramic city and ocean views",
            "State-of-the-art fitness center",
            "Infinity swimming pool",
            "24/7 concierge and security",
            "Smart home automation",
            "Children's play area and parks"
        ]
    },
    {
        id: 3,
        name: "Mixed-Use Development",
        slug: "mixed-use-development",
        category: "highrise",
        shortDescription: "Combined commercial and residential space",
        description: "A dynamic mixed-use development that seamlessly integrates commercial, retail, and residential spaces. This innovative project creates a vibrant community where residents can live, work, and shop all in one location. The lower floors feature high-end retail and dining options, while upper floors offer premium apartments.",
        image: "/images/highrise3.jpg",
        gallery: ["/images/highrise3.jpg", "/images/highrise1.jpg", "/images/highrise2.jpg"],
        location: "Urban Center",
        timeline: "36 months",
        features: [
            "20 floors of mixed-use space",
            "Ground floor retail and dining",
            "Office spaces on floors 2-10",
            "Residential units on floors 11-20",
            "Shared amenities and green spaces",
            "Integrated parking solutions",
            "Sustainable urban design"
        ]
    },
    // Villa Projects
    {
        id: 4,
        name: "Luxury Villa",
        slug: "luxury-villa",
        category: "villa",
        shortDescription: "Modern luxury villa with premium finishes and amenities",
        description: "An exquisite luxury villa showcasing contemporary architecture and premium finishes throughout. This 6-bedroom masterpiece features expansive living spaces, a private pool, landscaped gardens, and smart home technology. Every detail has been carefully considered to create a home of unparalleled luxury and comfort.",
        image: "/images/villa1.jpg",
        gallery: ["/images/villa1.jpg", "/images/villa2.jpg", "/images/villa3.jpg"],
        location: "Elite Residential Community",
        timeline: "18 months",
        features: [
            "6 spacious bedrooms with en-suite bathrooms",
            "Open-plan living and dining areas",
            "Gourmet kitchen with premium appliances",
            "Private infinity pool",
            "Landscaped gardens",
            "Home automation system",
            "3-car garage and staff quarters"
        ]
    },
    {
        id: 5,
        name: "Contemporary Villa",
        slug: "contemporary-villa",
        category: "villa",
        shortDescription: "Sleek contemporary design with smart home features",
        description: "A stunning contemporary villa featuring clean lines, minimalist design, and cutting-edge technology. This 5-bedroom residence incorporates smart home features, energy-efficient systems, and seamless indoor-outdoor living spaces. The design emphasizes natural light, open spaces, and modern luxury.",
        image: "/images/villa2.jpg",
        gallery: ["/images/villa2.jpg", "/images/villa1.jpg", "/images/villa3.jpg"],
        location: "Modern Suburb",
        timeline: "16 months",
        features: [
            "5 bedrooms with modern design",
            "Full home automation",
            "Solar panel system",
            "Floor-to-ceiling windows",
            "Outdoor entertainment area",
            "Infinity edge pool",
            "Minimalist landscaping"
        ]
    },
    {
        id: 6,
        name: "Mediterranean Villa",
        slug: "mediterranean-villa",
        category: "villa",
        shortDescription: "Classic Mediterranean style with modern comforts",
        description: "A beautiful Mediterranean-style villa combining timeless architecture with modern amenities. This charming 4-bedroom home features arched doorways, terracotta roof tiles, and a central courtyard. The design captures the essence of Mediterranean living while providing all contemporary comforts.",
        image: "/images/villa3.jpg",
        gallery: ["/images/villa3.jpg", "/images/villa1.jpg", "/images/villa2.jpg"],
        location: "Coastal Area",
        timeline: "14 months",
        features: [
            "4 bedrooms with traditional charm",
            "Central courtyard with fountain",
            "Terracotta roof tiles",
            "Arched windows and doorways",
            "Outdoor kitchen and dining",
            "Wine cellar",
            "Mediterranean landscaping"
        ]
    },
    // Bungalow Projects
    {
        id: 7,
        name: "Modern Bungalow",
        slug: "modern-bungalow",
        category: "bungalow",
        shortDescription: "Contemporary single-story home with open floor plan",
        description: "A beautifully designed modern bungalow featuring an open floor plan and contemporary finishes. This single-story home maximizes space and natural light while providing comfortable, accessible living. Perfect for families or those seeking single-level living without compromising on style or space.",
        image: "/images/bungalow1.jpg",
        gallery: ["/images/bungalow1.jpg", "/images/bungalow2.jpg", "/images/bungalow3.jpg"],
        location: "Suburban Neighborhood",
        timeline: "10 months",
        features: [
            "3 bedrooms on single level",
            "Open-plan living area",
            "Modern kitchen with island",
            "Covered outdoor patio",
            "Attached 2-car garage",
            "Energy-efficient design",
            "Low-maintenance finishes"
        ]
    },
    {
        id: 8,
        name: "Traditional Bungalow",
        slug: "traditional-bungalow",
        category: "bungalow",
        shortDescription: "Classic bungalow design with modern amenities",
        description: "A charming traditional bungalow that honors classic architectural elements while incorporating modern conveniences. This 3-bedroom home features a welcoming front porch, craftsman-style details, and efficient use of space. The design provides timeless appeal with contemporary comfort.",
        image: "/images/bungalow2.jpg",
        gallery: ["/images/bungalow2.jpg", "/images/bungalow1.jpg", "/images/bungalow3.jpg"],
        location: "Established Community",
        timeline: "9 months",
        features: [
            "3 bedrooms with classic design",
            "Front porch and entry",
            "Craftsman-style details",
            "Updated kitchen and bathrooms",
            "Hardwood flooring",
            "Fireplace in living room",
            "Mature landscaping"
        ]
    },
    {
        id: 9,
        name: "Eco-Friendly Bungalow",
        slug: "eco-friendly-bungalow",
        category: "bungalow",
        shortDescription: "Sustainable bungalow with energy-efficient features",
        description: "An environmentally conscious bungalow designed with sustainability at its core. This 3-bedroom home features solar panels, rainwater harvesting, high-efficiency insulation, and eco-friendly materials throughout. Perfect for those seeking to minimize their environmental impact without sacrificing comfort.",
        image: "/images/bungalow3.jpg",
        gallery: ["/images/bungalow3.jpg", "/images/bungalow1.jpg", "/images/bungalow2.jpg"],
        location: "Green Community",
        timeline: "11 months",
        features: [
            "3 bedrooms with sustainable materials",
            "Solar panel system",
            "Rainwater harvesting",
            "High-efficiency HVAC",
            "LED lighting throughout",
            "Native plant landscaping",
            "Composting area"
        ]
    },
    // Factory Projects
    {
        id: 10,
        name: "Industrial Factory",
        slug: "industrial-factory",
        category: "factory",
        shortDescription: "Modern industrial facility with advanced manufacturing capabilities",
        description: "A state-of-the-art industrial facility designed for modern manufacturing operations. This 50,000 sq ft factory features high ceilings, overhead crane systems, efficient workflow design, and modern utilities. The facility incorporates safety features, environmental controls, and flexible space for various manufacturing processes.",
        image: "/images/factory1.jpg",
        gallery: ["/images/factory1.jpg", "/images/factory2.jpg"],
        location: "Industrial Park",
        timeline: "20 months",
        features: [
            "50,000 sq ft manufacturing space",
            "High-clearance ceilings",
            "Overhead crane systems",
            "Three-phase power supply",
            "Office and admin areas",
            "Loading docks",
            "Environmental controls"
        ]
    },
    {
        id: 11,
        name: "Warehouse Complex",
        slug: "warehouse-complex",
        category: "factory",
        shortDescription: "Large-scale warehouse with efficient logistics design",
        description: "An expansive warehouse complex designed for optimal logistics and storage operations. This 75,000 sq ft facility features modern racking systems, multiple loading bays, climate-controlled sections, and advanced security. The design maximizes storage efficiency while facilitating smooth operations.",
        image: "/images/factory2.jpg",
        gallery: ["/images/factory2.jpg", "/images/factory1.jpg"],
        location: "Logistics Hub",
        timeline: "18 months",
        features: [
            "75,000 sq ft storage space",
            "Multiple loading bays",
            "Modern racking systems",
            "Climate-controlled sections",
            "Advanced security systems",
            "Office and break areas",
            "Efficient traffic flow design"
        ]
    }
];

export const projectCategories = [
    { name: "All Projects", slug: "all" },
    { name: "Highrise Buildings", slug: "highrise" },
    { name: "Villas", slug: "villa" },
    { name: "Bungalows", slug: "bungalow" },
    { name: "Factories", slug: "factory" }
];
