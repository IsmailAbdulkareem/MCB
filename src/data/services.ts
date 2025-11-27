export interface Service {
    id: number;
    name: string;
    slug: string;
    shortDescription: string;
    description: string;
    image: string;
    features: string[];
    process: {
        step: number;
        title: string;
        description: string;
    }[];
    gallery: string[];
    faqs: {
        question: string;
        answer: string;
    }[];
}

export const services: Service[] = [
    {
        id: 1,
        name: "Plumbing Services",
        slug: "plumbing",
        shortDescription: "Expert plumbing services for kitchens, bathrooms, and pipeline systems.",
        description: "Our professional plumbing services cover everything from minor repairs to complete installations. We specialize in kitchen and bathroom plumbing, pipeline systems, water heater installation, drain cleaning, and emergency repairs. Our certified plumbers ensure quality workmanship and long-lasting solutions.",
        image: "/images/plumbing.jpg",
        features: [
            "Kitchen and bathroom plumbing",
            "Water heater installation and repair",
            "Drain cleaning and unclogging",
            "Pipe repair and replacement",
            "Emergency plumbing services",
            "Leak detection and repair",
            "Fixture installation"
        ],
        process: [
            {
                step: 1,
                title: "Inspection",
                description: "Our expert plumbers inspect your plumbing system to identify issues and recommend solutions."
            },
            {
                step: 2,
                title: "Quote",
                description: "We provide a detailed quote with transparent pricing and timeline."
            },
            {
                step: 3,
                title: "Execution",
                description: "Our team completes the work efficiently using quality materials and professional techniques."
            },
            {
                step: 4,
                title: "Quality Check",
                description: "We test all systems thoroughly and ensure everything works perfectly before completion."
            }
        ],
        gallery: ["/images/plumbing.jpg", "/images/plumbing-conduit.jpg", "/images/sanitary.jpg"],
        faqs: [
            {
                question: "How quickly can you respond to emergencies?",
                answer: "We offer 24/7 emergency plumbing services and can typically respond within 1-2 hours."
            },
            {
                question: "What types of plumbing issues do you handle?",
                answer: "We handle all plumbing issues including leaks, clogs, installations, repairs, and water heater services."
            }
        ]
    },
    {
        id: 2,
        name: "Electrical Services",
        slug: "electrical",
        shortDescription: "Certified electricians for residential and commercial electrical work.",
        description: "Our certified electricians provide comprehensive electrical services for homes and commercial buildings. From new installations to repairs and upgrades, we ensure all work meets safety standards and local codes. We handle everything from lighting to complete electrical system installations.",
        image: "/images/electrical.jpg",
        features: [
            "Residential electrical installation",
            "Commercial electrical systems",
            "Lighting installation and design",
            "Electrical panel upgrades",
            "Wiring and rewiring",
            "Safety inspections",
            "Emergency electrical repairs"
        ],
        process: [
            {
                step: 1,
                title: "Assessment",
                description: "We evaluate your electrical needs and current system condition."
            },
            {
                step: 2,
                title: "Planning",
                description: "Our team designs the optimal electrical solution for your property."
            },
            {
                step: 3,
                title: "Installation",
                description: "Licensed electricians install all components following safety codes."
            },
            {
                step: 4,
                title: "Testing",
                description: "We thoroughly test all electrical systems to ensure safe operation."
            }
        ],
        gallery: ["/images/electrical.jpg", "/images/complete electrical.jpg", "/images/conduit.jpg"],
        faqs: [
            {
                question: "Are your electricians licensed?",
                answer: "Yes, all our electricians are fully licensed, insured, and certified professionals."
            },
            {
                question: "Do you handle both residential and commercial work?",
                answer: "Absolutely! We provide electrical services for both residential and commercial properties."
            }
        ]
    },
    {
        id: 3,
        name: "Roofing Services",
        slug: "roofing",
        shortDescription: "High-quality roof repair, installation, and maintenance services.",
        description: "Our roofing specialists provide expert installation, repair, and maintenance services. We work with all roofing materials and styles, ensuring your roof is durable, weather-resistant, and aesthetically pleasing. From minor repairs to complete roof replacements, we deliver quality results.",
        image: "/images/roofing.jpg",
        features: [
            "Roof installation",
            "Roof repair and maintenance",
            "Roof inspection",
            "Leak detection and repair",
            "Gutter installation",
            "Storm damage repair",
            "Various roofing materials"
        ],
        process: [
            {
                step: 1,
                title: "Roof Inspection",
                description: "We conduct a thorough inspection to assess the condition of your roof."
            },
            {
                step: 2,
                title: "Recommendation",
                description: "Based on inspection, we recommend repair or replacement options."
            },
            {
                step: 3,
                title: "Installation",
                description: "Our skilled team installs or repairs your roof with quality materials."
            },
            {
                step: 4,
                title: "Final Inspection",
                description: "We perform a final check to ensure quality and weatherproofing."
            }
        ],
        gallery: ["/images/roofing.jpg"],
        faqs: [
            {
                question: "How long does a roof installation take?",
                answer: "Depending on the size and complexity, most roof installations take 1-3 days."
            },
            {
                question: "What roofing materials do you work with?",
                answer: "We work with asphalt shingles, metal roofing, tile, and various other materials."
            }
        ]
    },
    {
        id: 4,
        name: "Handyman Services",
        slug: "handyman",
        shortDescription: "Furniture assembly, repairs, installations, and general maintenance.",
        description: "Our handyman services cover a wide range of home improvement and maintenance tasks. From furniture assembly to minor repairs and installations, we handle it all. Save time and effort by letting our skilled handymen take care of your to-do list.",
        image: "/images/Handyman.jpg",
        features: [
            "Furniture assembly",
            "Minor repairs",
            "Fixture installation",
            "Drywall repair",
            "Door and window adjustments",
            "General maintenance",
            "Home improvement tasks"
        ],
        process: [
            {
                step: 1,
                title: "Task List",
                description: "Share your list of tasks and we'll provide an estimate."
            },
            {
                step: 2,
                title: "Scheduling",
                description: "We schedule a convenient time to complete your tasks."
            },
            {
                step: 3,
                title: "Completion",
                description: "Our handyman efficiently completes all tasks to your satisfaction."
            },
            {
                step: 4,
                title: "Review",
                description: "We review completed work with you to ensure everything is perfect."
            }
        ],
        gallery: ["/images/Handyman.jpg"],
        faqs: [
            {
                question: "What types of tasks can you handle?",
                answer: "We handle furniture assembly, minor repairs, installations, and general home maintenance tasks."
            },
            {
                question: "Do you have a minimum service charge?",
                answer: "We offer flexible pricing. Contact us with your task list for an accurate quote."
            }
        ]
    },
    {
        id: 5,
        name: "Remodeling Services",
        slug: "remodeling",
        shortDescription: "Transform kitchens, bathrooms, and basements with expert remodeling.",
        description: "Our comprehensive remodeling services transform your spaces into beautiful, functional areas. Whether it's a kitchen renovation, bathroom upgrade, or basement conversion, we handle everything from design to completion. We bring your vision to life with quality craftsmanship.",
        image: "/images/remodeling.jpg",
        features: [
            "Kitchen remodeling",
            "Bathroom remodeling",
            "Basement finishing",
            "Custom design",
            "Space planning",
            "Full project management",
            "Quality materials"
        ],
        process: [
            {
                step: 1,
                title: "Consultation",
                description: "We discuss your vision, needs, and budget for the remodel."
            },
            {
                step: 2,
                title: "Design",
                description: "Our team creates a detailed design plan for your approval."
            },
            {
                step: 3,
                title: "Remodeling",
                description: "We execute the remodel with skilled craftsmen and quality materials."
            },
            {
                step: 4,
                title: "Final Walk-through",
                description: "We review the completed project together and ensure your satisfaction."
            }
        ],
        gallery: ["/images/remodeling.jpg", "/images/completermodeling.png"],
        faqs: [
            {
                question: "How long does a typical remodel take?",
                answer: "Timeline varies by project size. Kitchen remodels typically take 4-8 weeks, bathrooms 2-4 weeks."
            },
            {
                question: "Will you handle permits?",
                answer: "Yes, we handle all necessary permits and ensure compliance with local building codes."
            }
        ]
    },
    {
        id: 6,
        name: "Window Services",
        slug: "windows",
        shortDescription: " Window installation, repair, and upgrade services.",
        description: "Our window services include installation of new windows, repairs, and energy-efficient upgrades. We work with various window styles and materials to enhance your home's appearance, comfort, and energy efficiency. Professional installation ensures proper fit and performance.",
        image: "/images/windows.jpg",
        features: [
            "New window installation",
            "Window repair",
            "Window replacement",
            "Energy-efficient upgrades",
            "Custom window solutions",
            "Various styles and materials",
            "Professional installation"
        ],
        process: [
            {
                step: 1,
                title: "Assessment",
                description: "We evaluate your current windows and discuss your needs."
            },
            {
                step: 2,
                title: "Selection",
                description: "Choose from our range of window styles, materials, and features."
            },
            {
                step: 3,
                title: "Installation",
                description: "Our team installs your windows with precision and care."
            },
            {
                step: 4,
                title: "Quality Check",
                description: "We ensure proper operation, sealing, and appearance."
            }
        ],
        gallery: ["/images/windows.jpg"],
        faqs: [
            {
                question: "How do I know if I need window replacement?",
                answer: "Signs include drafts, difficulty opening/closing, condensation, and high energy bills."
            },
            {
                question: "What window styles do you offer?",
                answer: "We offer double-hung, casement, sliding, bay, and custom window styles."
            }
        ]
    },
    {
        id: 7,
        name: "Concrete Services",
        slug: "concrete",
        shortDescription: "Professional concrete pouring, repair, and decorative solutions.",
        description: "Our concrete services cover everything from simple repairs to large-scale installations. We specialize in driveways, patios, foundations, decorative concrete, and more. Our experienced team ensures durable, long-lasting results with proper preparation and finishing.",
        image: "/images/concrete.jpg",
        features: [
            "Concrete pouring",
            "Driveway installation",
            "Patio construction",
            "Foundation work",
            "Decorative concrete",
            "Concrete repair",
            "Stamped concrete"
        ],
        process: [
            {
                step: 1,
                title: "Site Preparation",
                description: "We prepare the site with proper grading and base material."
            },
            {
                step: 2,
                title: "Formwork",
                description: "Precise forms are set up to ensure proper dimensions."
            },
            {
                step: 3,
                title: "Pouring",
                description: "Quality concrete is poured and leveled by experienced professionals."
            },
            {
                step: 4,
                title: "Finishing",
                description: "We apply the desired finish and allow proper curing time."
            }
        ],
        gallery: ["/images/concrete.jpg", "/images/pouring.jpg"],
        faqs: [
            {
                question: "How long does concrete take to cure?",
                answer: "Concrete reaches initial set in 24-48 hours but takes 28 days for full strength."
            },
            {
                question: "Do you offer decorative concrete options?",
                answer: "Yes, we offer stamped, stained, and various decorative concrete finishes."
            }
        ]
    },
    {
        id: 8,
        name: "Aluminum Work",
        slug: "aluminum",
        shortDescription: "Fabrication, installation, and repair of aluminum structures.",
        description: "We specialize in aluminum fabrication and installation for residential and commercial properties. Our services include aluminum windows, doors, railings, canopies, and custom structures. Aluminum offers durability, low maintenance, and modern aesthetics.",
        image: "/images/aluminum.jpg",
        features: [
            "Aluminum window installation",
            "Aluminum door fabrication",
            "Railing systems",
            "Canopy installation",
            "Custom aluminum structures",
            "Repairs and maintenance",
            "Powder coating options"
        ],
        process: [
            {
                step: 1,
                title: "Measurement",
                description: "Precise measurements are taken for custom fabrication."
            },
            {
                step: 2,
                title: "Fabrication",
                description: "Aluminum components are fabricated to exact specifications."
            },
            {
                step: 3,
                title: "Installation",
                description: "Professional installation ensures proper fit and function."
            },
            {
                step: 4,
                title: "Finishing",
                description: "Final adjustments and finishing touches are completed."
            }
        ],
        gallery: ["/images/aluminum.jpg"],
        faqs: [
            {
                question: "Why choose aluminum over other materials?",
                answer: "Aluminum is durable, lightweight, corrosion-resistant, and requires minimal maintenance."
            },
            {
                question: "Can you match existing aluminum work?",
                answer: "Yes, we can match colors and styles to blend with existing structures."
            }
        ]
    },
    {
        id: 9,
        name: "Door Installation",
        slug: "door-installation",
        shortDescription: "Professional door installation with frames, hardware, and finishing.",
        description: "Our door installation services cover interior and exterior doors, including frames, hardware, and all finishing touches. We work with various door types and materials, ensuring proper fit, security, and smooth operation. Expert installation enhances both functionality and aesthetics.",
        image: "/images/door.jpg",
        features: [
            "Interior door installation",
            "Exterior door installation",
            "Door frame installation",
            "Hardware installation",
            "Custom door solutions",
            "Door repair",
            "Various materials and styles"
        ],
        process: [
            {
                step: 1,
                title: "Selection",
                description: "Choose your door style, material, and hardware."
            },
            {
                step: 2,
                title: "Preparation",
                description: "We prepare the opening and ensure proper measurements."
            },
            {
                step: 3,
                title: "Installation",
                description: "Professional installation with precise alignment and leveling."
            },
            {
                step: 4,
                title: "Adjustment",
                description: "Final adjustments ensure smooth operation and proper sealing."
            }
        ],
        gallery: ["/images/door.jpg", "/images/door-polish.jpg"],
        faqs: [
            {
                question: "How long does door installation take?",
                answer: "Most door installations are completed in 2-4 hours per door."
            },
            {
                question: "Do you install both wood and metal doors?",
                answer: "Yes, we install all types of doors including wood, metal, fiberglass, and composite."
            }
        ]
    },
    {
        id: 10,
        name: "Villa Excavation",
        slug: "villa-excavation",
        shortDescription: "Professional excavation services for villa construction projects.",
        description: "Our villa excavation services provide the foundation for successful construction projects. We handle site preparation, foundation excavation, grading, and drainage work. With modern equipment and experienced operators, we ensure precise excavation for your villa project.",
        image: "/images/excavation.jpg",
        features: [
            "Site preparation",
            "Foundation excavation",
            "Grading and leveling",
            "Drainage solutions",
            "Soil removal",
            "Modern equipment",
            "Experienced operators"
        ],
        process: [
            {
                step: 1,
                title: "Site Survey",
                description: "We survey the site and plan the excavation work."
            },
            {
                step: 2,
                title: "Excavation",
                description: "Precise excavation using modern equipment and techniques."
            },
            {
                step: 3,
                title: "Grading",
                description: "Proper grading ensures drainage and foundation stability."
            },
            {
                step: 4,
                title: "Inspection",
                description: "Final inspection confirms readiness for construction."
            }
        ],
        gallery: ["/images/excavation.jpg"],
        faqs: [
            {
                question: "How long does villa excavation take?",
                answer: "Timeline depends on villa size and soil conditions, typically 1-2 weeks."
            },
            {
                question: "Do you handle permits for excavation?",
                answer: "Yes, we can assist with obtaining necessary excavation permits."
            }
        ]
    },
    {
        id: 11,
        name: "Steel Fabrication",
        slug: "steel-fabrication",
        shortDescription: "Custom steel fabrication and installation services.",
        description: "We provide custom steel fabrication services for structural, decorative, and functional applications. Our skilled fabricators create high-quality steel components and structures. From railings to structural beams, we deliver precise fabrication and professional installation.",
        image: "/images/steel.jpg",
        features: [
            "Custom steel fabrication",
            "Structural steel work",
            "Steel railings",
            "Staircases",
            "Gates and fencing",
            "Decorative steelwork",
            "Installation services"
        ],
        process: [
            {
                step: 1,
                title: "Design",
                description: "We create detailed designs based on your requirements."
            },
            {
                step: 2,
                title: "Fabrication",
                description: "Skilled fabricators create steel components in our workshop."
            },
            {
                step: 3,
                title: "Finishing",
                description: "Steel is cleaned, primed, and painted or powder coated."
            },
            {
                step: 4,
                title: "Installation",
                description: "Professional installation ensures structural integrity."
            }
        ],
        gallery: ["/images/steel.jpg", "/images/ms.jpg"],
        faqs: [
            {
                question: "What types of steel projects do you handle?",
                answer: "We handle structural steel, railings, gates, staircases, and custom fabrication."
            },
            {
                question: "Do you provide finishing services?",
                answer: "Yes, we offer painting, powder coating, and galvanizing options."
            }
        ]
    },
    {
        id: 12,
        name: "Farm Shedding",
        slug: "farm-shedding",
        shortDescription: "Durable farm shed construction for agricultural needs.",
        description: "Our farm shedding services provide durable, functional structures for agricultural operations. We design and build sheds for equipment storage, livestock housing, and general farm use. Our structures are built to withstand weather and provide long-lasting protection.",
        image: "/images/farm.jpg",
        features: [
            "Equipment storage sheds",
            "Livestock housing",
            "Hay storage",
            "Workshop sheds",
            "Custom designs",
            "Durable construction",
            "Weather-resistant"
        ],
        process: [
            {
                step: 1,
                title: "Consultation",
                description: "We discuss your farm needs and shed requirements."
            },
            {
                step: 2,
                title: "Design",
                description: "Custom design to meet your specific agricultural needs."
            },
            {
                step: 3,
                title: "Construction",
                description: "Durable construction using quality materials."
            },
            {
                step: 4,
                title: "Completion",
                description: "Final inspection and handover of your farm shed."
            }
        ],
        gallery: ["/images/farm.jpg"],
        faqs: [
            {
                question: "What sizes of farm sheds do you build?",
                answer: "We build custom-sized sheds to meet your specific needs, from small to very large."
            },
            {
                question: "What materials do you use?",
                answer: "We use steel framing with metal cladding for durability and longevity."
            }
        ]
    },
    {
        id: 13,
        name: "Project Pouring",
        slug: "project-pouring",
        shortDescription: "Large-scale concrete pouring for construction projects.",
        description: "We specialize in large-scale concrete pouring for commercial and residential construction projects. Our experienced team handles foundation pours, floor slabs, and structural concrete work. We use modern equipment and techniques to ensure quality results on schedule.",
        image: "/images/pouring.jpg",
        features: [
            "Foundation pouring",
            "Floor slab installation",
            "Structural concrete",
            "Large-scale projects",
            "Modern equipment",
            "Experienced team",
            "Quality control"
        ],
        process: [
            {
                step: 1,
                title: "Planning",
                description: "Detailed planning for concrete specifications and scheduling."
            },
            {
                step: 2,
                title: "Preparation",
                description: "Site preparation, formwork, and reinforcement installation."
            },
            {
                step: 3,
                title: "Pouring",
                description: "Coordinated concrete pouring with quality control."
            },
            {
                step: 4,
                title: "Curing",
                description: "Proper curing procedures to ensure concrete strength."
            }
        ],
        gallery: ["/images/pouring.jpg", "/images/concrete.jpg"],
        faqs: [
            {
                question: "What size projects can you handle?",
                answer: "We handle projects of all sizes, from small residential to large commercial pours."
            },
            {
                question: "Do you guarantee concrete quality?",
                answer: "Yes, we use quality concrete mix and follow strict quality control procedures."
            }
        ]
    },
    {
        id: 14,
        name: "Tile Installation",
        slug: "tile-installation",
        shortDescription: "Precision tile work for floors, walls, and outdoor spaces.",
        description: "Our tile installation services cover floors, walls, backsplashes, and outdoor areas. We work with ceramic, porcelain, natural stone, and various tile materials. Our skilled installers ensure precise layouts, proper adhesion, and beautiful results that last.",
        image: "/images/tile.jpg",
        features: [
            "Floor tile installation",
            "Wall tile installation",
            "Backsplash installation",
            "Outdoor tile work",
            "Various tile materials",
            "Custom patterns",
            "Precision workmanship"
        ],
        process: [
            {
                step: 1,
                title: "Surface Preparation",
                description: "Proper surface preparation ensures lasting adhesion."
            },
            {
                step: 2,
                title: "Layout",
                description: "We plan and mark the tile layout for optimal appearance."
            },
            {
                step: 3,
                title: "Installation",
                description: "Precise installation with proper spacing and leveling."
            },
            {
                step: 4,
                title: "Grouting",
                description: "Professional grouting and sealing for a finished look."
            }
        ],
        gallery: ["/images/tile.jpg"],
        faqs: [
            {
                question: "What types of tile do you install?",
                answer: "We install ceramic, porcelain, natural stone, glass, and mosaic tiles."
            },
            {
                question: "How long before we can use the tiled area?",
                answer: "Typically 24-48 hours after installation, depending on the application."
            }
        ]
    },
    {
        id: 15,
        name: "Block Masonry",
        slug: "block-masonry",
        shortDescription: "Professional masonry services for construction projects.",
        description: "Our block masonry services provide strong, durable construction for walls, foundations, and structures. We work with concrete blocks, bricks, and stone. Our experienced masons ensure proper techniques, alignment, and structural integrity in all masonry work.",
        image: "/images/masonry.jpg",
        features: [
            "Concrete block walls",
            "Brick masonry",
            "Stone masonry",
            "Foundation walls",
            "Retaining walls",
            "Structural masonry",
            "Expert craftsmanship"
        ],
        process: [
            {
                step: 1,
                title: "Foundation",
                description: "Proper foundation preparation for masonry work."
            },
            {
                step: 2,
                title: "Layout",
                description: "Precise layout ensures proper alignment and dimensions."
            },
            {
                step: 3,
                title: "Construction",
                description: "Skilled masons build the structure with quality materials."
            },
            {
                step: 4,
                title: "Finishing",
                description: "Final pointing and finishing for appearance and durability."
            }
        ],
        gallery: ["/images/masonry.jpg"],
        faqs: [
            {
                question: "What types of masonry projects do you handle?",
                answer: "We handle walls, foundations, retaining walls, and various masonry structures."
            },
            {
                question: "How long does masonry work take?",
                answer: "Timeline depends on project size and complexity. We provide estimates during consultation."
            }
        ]
    },
    {
        id: 16,
        name: "Bamboo Plaster",
        slug: "bamboo-plaster",
        shortDescription: "Expert wall and ceiling plastering and finishing.",
        description: "Our plastering services provide smooth, durable finishes for walls and ceilings. We specialize in bamboo mesh plastering, which offers excellent crack resistance and a smooth base for painting. Our skilled plasterers ensure even application and professional results.",
        image: "/images/plaster.jpg",
        features: [
            "Wall plastering",
            "Ceiling plastering",
            "Bamboo mesh application",
            "Smooth finishing",
            "Crack repair",
            "Texture application",
            "Professional techniques"
        ],
        process: [
            {
                step: 1,
                title: "Surface Preparation",
                description: "Surfaces are cleaned and prepared for plastering."
            },
            {
                step: 2,
                title: "Mesh Application",
                description: "Bamboo mesh is applied for reinforcement where needed."
            },
            {
                step: 3,
                title: "Plastering",
                description: "Multiple coats are applied for a smooth, even surface."
            },
            {
                step: 4,
                title: "Finishing",
                description: "Final smoothing and finishing prepares for painting."
            }
        ],
        gallery: ["/images/plaster.jpg"],
        faqs: [
            {
                question: "What is bamboo plaster?",
                answer: "Bamboo plaster uses bamboo mesh reinforcement for crack-resistant, durable wall finishes."
            },
            {
                question: "How long before I can paint?",
                answer: "Plaster should dry for 7-14 days before painting for best results."
            }
        ]
    },
    {
        id: 17,
        name: "Painting Services",
        slug: "painting",
        shortDescription: "Professional interior and exterior painting services.",
        description: "Our painting services transform your spaces with professional results. We handle interior and exterior painting for residential and commercial properties. From preparation to final coat, we ensure smooth, lasting finishes using quality paints and proven techniques.",
        image: "/images/painting.jpg",
        features: [
            "Interior painting",
            "Exterior painting",
            "Surface preparation",
            "Color consultation",
            "Quality paints",
            "Clean workmanship",
            "Texture finishes"
        ],
        process: [
            {
                step: 1,
                title: "Preparation",
                description: "Surfaces are cleaned, repaired, and primed as needed."
            },
            {
                step: 2,
                title: "Protection",
                description: "Floors and furniture are protected from paint."
            },
            {
                step: 3,
                title: "Painting",
                description: "Multiple coats are applied for even, lasting coverage."
            },
            {
                step: 4,
                title: "Clean-up",
                description: "Thorough clean-up and final inspection."
            }
        ],
        gallery: ["/images/painting.jpg"],
        faqs: [
            {
                question: "How long does painting take?",
                answer: "Interior rooms typically take 1-2 days, exteriors 3-5 days depending on size."
            },
            {
                question: "Do you help with color selection?",
                answer: "Yes, we offer color consultation to help you choose the perfect colors."
            }
        ]
    },
    {
        id: 18,
        name: "Door Polish",
        slug: "door-polish",
        shortDescription: "Professional door polishing and finishing services.",
        description: "Our door polishing services restore and enhance the beauty of your wooden doors. We provide sanding, staining, and polishing to bring out the natural grain and protect the wood. Professional finishing adds elegance and extends door life.",
        image: "/images/door-polish.jpg",
        features: [
            "Door sanding",
            "Staining services",
            "Polish application",
            "Varnish finishing",
            "Wood restoration",
            "Color matching",
            "Professional techniques"
        ],
        process: [
            {
                step: 1,
                title: "Preparation",
                description: "Doors are removed and prepared for finishing."
            },
            {
                step: 2,
                title: "Sanding",
                description: "Thorough sanding creates a smooth surface."
            },
            {
                step: 3,
                title: "Staining",
                description: "Stain is applied to achieve the desired color."
            },
            {
                step: 4,
                title: "Polishing",
                description: "Multiple coats of polish create a beautiful, protective finish."
            }
        ],
        gallery: ["/images/door-polish.jpg", "/images/door.jpg"],
        faqs: [
            {
                question: "How often should doors be polished?",
                answer: "We recommend re-polishing every 3-5 years to maintain appearance and protection."
            },
            {
                question: "Can you match existing door finishes?",
                answer: "Yes, we can match stains and finishes to existing woodwork."
            }
        ]
    },
    {
        id: 19,
        name: "Stone Elevation",
        slug: "stone-elevation",
        shortDescription: "Facade and exterior stone work for beautiful elevations.",
        description: "Our stone elevation services create stunning building facades and exteriors. We work with natural stone, manufactured stone, and various cladding materials. Professional installation ensures durability, weather resistance, and impressive curb appeal.",
        image: "/images/stone.jpg",
        features: [
            "Stone facade installation",
            "Natural stone work",
            "Manufactured stone",
            "Exterior cladding",
            "Custom designs",
            "Weather-resistant",
            "Expert installation"
        ],
        process: [
            {
                step: 1,
                title: "Design",
                description: "We create a design plan and select appropriate stone."
            },
            {
                step: 2,
                title: "Preparation",
                description: "Wall surface is prepared for stone installation."
            },
            {
                step: 3,
                title: "Installation",
                description: "Stone is installed with precision and proper techniques."
            },
            {
                step: 4,
                title: "Sealing",
                description: "Joints are sealed for weather protection and longevity."
            }
        ],
        gallery: ["/images/stone.jpg"],
        faqs: [
            {
                question: "What types of stone do you use?",
                answer: "We work with granite, limestone, sandstone, and manufactured stone options."
            },
            {
                question: "How long does stone elevation last?",
                answer: "With proper installation, stone facades can last 50+ years with minimal maintenance."
            }
        ]
    },
    {
        id: 20,
        name: "MS Fabrication",
        slug: "ms-fabrication",
        shortDescription: "Mild steel fabrication for various applications.",
        description: "We specialize in mild steel (MS) fabrication for structural, decorative, and functional applications. Our workshop produces high-quality MS components including gates, railings, frames, and structural elements. Professional fabrication ensures strength and durability.",
        image: "/images/ms.jpg",
        features: [
            "Custom MS fabrication",
            "Gates and fencing",
            "Railings",
            "Structural components",
            "Frames and supports",
            "Welding services",
            "Powder coating"
        ],
        process: [
            {
                step: 1,
                title: "Design",
                description: "Detailed design based on your requirements and specifications."
            },
            {
                step: 2,
                title: "Fabrication",
                description: "Precision fabrication in our fully-equipped workshop."
            },
            {
                step: 3,
                title: "Finishing",
                description: "Grinding, priming, and coating for corrosion protection."
            },
            {
                step: 4,
                title: "Installation",
                description: "Professional on-site installation and assembly."
            }
        ],
        gallery: ["/images/ms.jpg", "/images/gate.jpg", "/images/steel.jpg"],
        faqs: [
            {
                question: "What is MS fabrication?",
                answer: "MS (Mild Steel) fabrication involves creating structures and components from mild steel."
            },
            {
                question: "Do you provide anti-rust treatment?",
                answer: "Yes, all MS work includes rust prevention through priming and coating."
            }
        ]
    },
    {
        id: 21,
        name: "SS Railing",
        slug: "ss-railing",
        shortDescription: "Stainless steel railing installation for stairs and balconies.",
        description: "Our stainless steel railing services provide modern, durable solutions for stairs, balconies, and terraces. SS railings offer corrosion resistance, minimal maintenance, and contemporary aesthetics. We custom fabricate and install railings to meet safety standards and design preferences.",
        image: "/images/railing.jpg",
        features: [
            "Stair railings",
            "Balcony railings",
            "Terrace railings",
            "Glass panel railings",
            "Custom designs",
            "Corrosion-resistant",
            "Modern aesthetics"
        ],
        process: [
            {
                step: 1,
                title: "Measurement",
                description: "Precise on-site measurements for custom fabrication."
            },
            {
                step: 2,
                title: "Fabrication",
                description: "SS railings are fabricated to exact specifications."
            },
            {
                step: 3,
                title: "Installation",
                description: "Professional installation with secure mounting."
            },
            {
                step: 4,
                title: "Finishing",
                description: "Final polishing and adjustments for perfect appearance."
            }
        ],
        gallery: ["/images/railing.jpg"],
        faqs: [
            {
                question: "Why choose stainless steel railings?",
                answer: "SS railings are durable, corrosion-resistant, low-maintenance, and modern in appearance."
            },
            {
                question: "Can you install glass panel railings?",
                answer: "Yes, we offer SS railings with glass panels for a contemporary look."
            }
        ]
    },
    {
        id: 22,
        name: "Marble Stairs",
        slug: "marble-stairs",
        shortDescription: "Elegant marble stair installation and finishing.",
        description: "Our marble stair services provide elegant, durable staircases. We handle complete installation including treads, risers, and finishing. Marble stairs add timeless beauty and value to any property. Professional installation ensures precise fit and lasting quality.",
        image: "/images/marble-stairs.jpg",
        features: [
            "Marble tread installation",
            "Riser installation",
            "Various marble types",
            "Custom fabrication",
            "Professional finishing",
            "Sealing services",
            "Expert installation"
        ],
        process: [
            {
                step: 1,
                title: "Selection",
                description: "Choose marble type, color, and finish."
            },
            {
                step: 2,
                title: "Fabrication",
                description: "Marble is cut and finished to precise dimensions."
            },
            {
                step: 3,
                title: "Installation",
                description: "Expert installation ensures level, secure placement."
            },
            {
                step: 4,
                title: "Finishing",
                description: "Final polishing and sealing for beauty and protection."
            }
        ],
        gallery: ["/images/marble-stairs.jpg"],
        faqs: [
            {
                question: "What types of marble do you offer?",
                answer: "We offer various marble types including white, beige, gray, and colored options."
            },
            {
                question: "How do I maintain marble stairs?",
                answer: "Regular cleaning with mild soap and periodic sealing maintains marble beauty."
            }
        ]
    },
    {
        id: 23,
        name: "Electrical Conduit",
        slug: "electrical-conduit",
        shortDescription: "Professional electrical wiring and conduit installation.",
        description: "Our electrical conduit services provide safe, organized electrical wiring systems. We install conduit for new construction and renovations, ensuring compliance with electrical codes. Proper conduit installation protects wiring and facilitates future maintenance.",
        image: "/images/conduit.jpg",
        features: [
            "Conduit installation",
            "Wire pulling",
            "Junction boxes",
            "Code compliance",
            "New construction",
            "Renovation work",
            "Professional installation"
        ],
        process: [
            {
                step: 1,
                title: "Planning",
                description: "Electrical plan review and conduit routing."
            },
            {
                step: 2,
                title: "Installation",
                description: "Conduit installation following electrical codes."
            },
            {
                step: 3,
                title: "Wire Pulling",
                description: "Wires are pulled through conduit system."
            },
            {
                step: 4,
                title: "Testing",
                description: "Complete system testing for safety and functionality."
            }
        ],
        gallery: ["/images/conduit.jpg", "/images/complete electrical.jpg"],
        faqs: [
            {
                question: "What type of conduit do you use?",
                answer: "We use PVC, metal, and flexible conduit depending on application and requirements."
            },
            {
                question: "Do you handle residential and commercial?",
                answer: "Yes, we install electrical conduit for both residential and commercial projects."
            }
        ]
    },
    {
        id: 24,
        name: "Main Gate Installation",
        slug: "main-gate",
        shortDescription: "Custom MS and wooden gate installation.",
        description: "Our main gate installation services provide security, functionality, and aesthetic appeal. We custom fabricate and install gates in mild steel, stainless steel, and wood. From design to installation, we create gates that enhance your property entrance.",
        image: "/images/gate.jpg",
        features: [
            "Custom gate design",
            "MS gate fabrication",
            "Wooden gates",
            "Automated gate systems",
            "Security features",
            "Decorative designs",
            "Professional installation"
        ],
        process: [
            {
                step: 1,
                title: "Design",
                description: "Custom design based on your preferences and requirements."
            },
            {
                step: 2,
                title: "Fabrication",
                description: "Gate is fabricated with quality materials."
            },
            {
                step: 3,
                title: "Installation",
                description: "Professional installation with proper mounting and hardware."
            },
            {
                step: 4,
                title: "Automation",
                description: "Optional automation system installation if requested."
            }
        ],
        gallery: ["/images/gate.jpg", "/images/ms.jpg"],
        faqs: [
            {
                question: "Can you automate existing gates?",
                answer: "Yes, we can add automation systems to most existing gates."
            },
            {
                question: "What materials do you recommend?",
                answer: "MS with proper coating offers durability and cost-effectiveness for most applications."
            }
        ]
    },
    {
        id: 25,
        name: "Plumbing Conduit",
        slug: "plumbing-conduit",
        shortDescription: "Plumbing conduit installation and maintenance.",
        description: "Our plumbing conduit services ensure proper pipe routing and protection. We install conduit for water supply, drainage, and sewage systems. Proper conduit installation protects pipes and facilitates maintenance while meeting plumbing codes.",
        image: "/images/plumbing-conduit.jpg",
        features: [
            "Water supply conduit",
            "Drainage conduit",
            "Sewage system conduit",
            "Pipe protection",
            "Code compliance",
            "New construction",
            "Renovation work"
        ],
        process: [
            {
                step: 1,
                title: "Planning",
                description: "Review plumbing plans and determine conduit routing."
            },
            {
                step: 2,
                title: "Installation",
                description: "Install conduit following plumbing codes and best practices."
            },
            {
                step: 3,
                title: "Pipe Installation",
                description: "Install pipes through conduit system."
            },
            {
                step: 4,
                title: "Testing",
                description: "Pressure testing and leak checks ensure proper installation."
            }
        ],
        gallery: ["/images/plumbing-conduit.jpg", "/images/plumbing.jpg"],
        faqs: [
            {
                question: "Why use plumbing conduit?",
                answer: "Conduit protects pipes, facilitates maintenance, and meets building codes."
            },
            {
                question: "What materials do you use?",
                answer: "We use PVC and other approved materials based on application requirements."
            }
        ]
    },
    {
        id: 26,
        name: "Sanitary Installation",
        slug: "sanitary",
        shortDescription: "Complete sanitary fixture installation services.",
        description: "Our sanitary installation services cover toilets, sinks, showers, and all bathroom fixtures. We ensure proper installation, connections, and sealing for leak-free operation. Professional installation guarantees functionality and longevity of your sanitary fixtures.",
        image: "/images/sanitary.jpg",
        features: [
            "Toilet installation",
            "Sink installation",
            "Shower installation",
            "Bathtub installation",
            "Fixture connections",
            "Leak prevention",
            "Professional workmanship"
        ],
        process: [
            {
                step: 1,
                title: "Preparation",
                description: "Ensure proper plumbing connections are in place."
            },
            {
                step: 2,
                title: "Installation",
                description: "Install fixtures with precision and proper sealing."
            },
            {
                step: 3,
                title: "Connections",
                description: "Connect water supply and drainage properly."
            },
            {
                step: 4,
                title: "Testing",
                description: "Test all connections for leaks and proper operation."
            }
        ],
        gallery: ["/images/sanitary.jpg", "/images/plumbing.jpg"],
        faqs: [
            {
                question: "Do you remove old fixtures?",
                answer: "Yes, we handle removal of old fixtures as part of the installation service."
            },
            {
                question: "How long does installation take?",
                answer: "Most single fixture installations are completed in 1-2 hours."
            }
        ]
    },
    {
        id: 27,
        name: "Carpainting Services",
        slug: "carpainting",
        shortDescription: "Professional carpainting and refinishing services.",
        description: "Our carpainting services provide high-quality finishes for wooden furniture, cabinets, and millwork. We specialize in custom colors, stains, and protective coatings. Professional carpainting enhances appearance and protects surfaces for years of beauty.",
        image: "/images/car-paint.jpg",
        features: [
            "Furniture painting",
            "Cabinet refinishing",
            "Custom colors",
            "Stain application",
            "Protective coatings",
            "Surface preparation",
            "Professional finish"
        ],
        process: [
            {
                step: 1,
                title: "Preparation",
                description: "Surfaces are cleaned, sanded, and prepared."
            },
            {
                step: 2,
                title: "Priming",
                description: "Primer is applied for better adhesion and coverage."
            },
            {
                step: 3,
                title: "Painting",
                description: "Multiple coats are applied for even, lasting finish."
            },
            {
                step: 4,
                title: "Finishing",
                description: "Final protective coating and quality inspection."
            }
        ],
        gallery: ["/images/car-paint.jpg"],
        faqs: [
            {
                question: "Can you match existing colors?",
                answer: "Yes, we can match colors or help you select new ones."
            },
            {
                question: "How long before furniture can be used?",
                answer: "Typically 24-48 hours for full curing, depending on the finish used."
            }
        ]
    },
    {
        id: 28,
        name: "Kitchen Wardrobe",
        slug: "kitchen-wardrobe",
        shortDescription: "Custom kitchen cabinets and wardrobe installation.",
        description: "Our kitchen wardrobe services provide custom cabinets and storage solutions. We design and install kitchen cabinets, wardrobes, and closet systems tailored to your space and needs. Quality materials and professional installation ensure durable, beautiful results.",
        image: "/images/wardrobe.jpg",
        features: [
            "Custom kitchen cabinets",
            "Wardrobe design",
            "Closet systems",
            "Storage solutions",
            "Quality materials",
            "Professional installation",
            "Custom finishes"
        ],
        process: [
            {
                step: 1,
                title: "Design",
                description: "We create a custom design based on your space and needs."
            },
            {
                step: 2,
                title: "Fabrication",
                description: "Cabinets are fabricated to exact specifications."
            },
            {
                step: 3,
                title: "Installation",
                description: "Professional installation ensures proper fit and function."
            },
            {
                step: 4,
                title: "Finishing",
                description: "Final adjustments and hardware installation."
            }
        ],
        gallery: ["/images/wardrobe.jpg"],
        faqs: [
            {
                question: "What materials do you use?",
                answer: "We offer plywood, MDF, and solid wood options with various finishes."
            },
            {
                question: "How long does installation take?",
                answer: "Kitchen cabinets typically take 2-5 days, wardrobes 1-3 days depending on size."
            }
        ]
    },
    {
        id: 29,
        name: "Garden Design",
        slug: "garden-design",
        shortDescription: "Professional landscaping and garden maintenance services.",
        description: "Our garden design services create beautiful outdoor spaces. We provide landscape design, installation, and maintenance services. From simple gardens to elaborate landscapes, we bring your outdoor vision to life with plants, hardscaping, and ongoing care.",
        image: "/images/garden.jpg",
        features: [
            "Landscape design",
            "Garden installation",
            "Plant selection",
            "Hardscape installation",
            "Irrigation systems",
            "Garden maintenance",
            "Lawn care"
        ],
        process: [
            {
                step: 1,
                title: "Consultation",
                description: "We discuss your vision and assess your outdoor space."
            },
            {
                step: 2,
                title: "Design",
                description: "Create a comprehensive landscape design plan."
            },
            {
                step: 3,
                title: "Installation",
                description: "Install plants, hardscaping, and irrigation as designed."
            },
            {
                step: 4,
                title: "Maintenance",
                description: "Optional ongoing maintenance to keep your garden beautiful."
            }
        ],
        gallery: ["/images/garden.jpg", "/images/garden1.jpg"],
        faqs: [
            {
                question: "Do you provide ongoing maintenance?",
                answer: "Yes, we offer maintenance plans to keep your garden looking its best."
            },
            {
                question: "Can you work with existing landscapes?",
                answer: "Absolutely! We can enhance or redesign existing landscapes."
            }
        ]
    },
    {
        id: 30,
        name: "Camera Installation",
        slug: "camera-installation",
        shortDescription: "Professional security camera installation services.",
        description: "Our camera installation services provide comprehensive security solutions. We install CCTV systems, IP cameras, and complete surveillance systems for homes and businesses. Professional installation ensures optimal coverage, clear footage, and reliable monitoring.",
        image: "/images/camera.jpg",
        features: [
            "CCTV installation",
            "IP camera systems",
            "DVR/NVR setup",
            "Remote viewing",
            "Night vision cameras",
            "Indoor and outdoor",
            "Professional wiring"
        ],
        process: [
            {
                step: 1,
                title: "Site Survey",
                description: "Assess property and determine optimal camera placement."
            },
            {
                step: 2,
                title: "System Design",
                description: "Design camera system based on coverage needs."
            },
            {
                step: 3,
                title: "Installation",
                description: "Install cameras, wiring, and recording equipment."
            },
            {
                step: 4,
                title: "Configuration",
                description: "Configure system and set up remote viewing access."
            }
        ],
        gallery: ["/images/camera.jpg"],
        faqs: [
            {
                question: "Can I view cameras remotely?",
                answer: "Yes, we set up remote viewing through mobile apps and web browsers."
            },
            {
                question: "How many cameras do I need?",
                answer: "We assess your property during the site survey and recommend appropriate coverage."
            }
        ]
    }
];
