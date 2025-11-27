import Image from "next/image";

interface Testimonial {
    name: string;
    role: string;
    company: string;
    testimonial: string;
    image: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        name: "John Anderson",
        role: "Homeowner",
        company: "Villa Project",
        testimonial:
            "MCB Construction transformed our vision into reality. The attention to detail and quality of work exceeded our expectations. Our new villa is absolutely stunning!",
        image: "/images/testimonial1.jpg",
        rating: 5,
    },
    {
        name: "Sarah Mitchell",
        role: "Property Developer",
        company: "Highrise Development",
        testimonial:
            "Working with MCB was a pleasure. They delivered our commercial project on time and within budget. Their professionalism and expertise are unmatched.",
        image: "/images/testimonial2.jpg",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Business Owner",
        company: "Factory Construction",
        testimonial:
            "The team at MCB Construction handled our factory project with expertise and efficiency. They understood our needs and delivered exceptional results.",
        image: "/images/testimonial3.jpg",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
                >
                    {/* Rating */}
                    <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                                key={i}
                                className="w-5 h-5 text-yellow-400 fill-current"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                        ))}
                    </div>

                    {/* Testimonial */}
                    <p className="text-gray-600 mb-6 italic">"{testimonial.testimonial}"</p>

                    {/* Author */}
                    <div className="flex items-center">
                        <div className="relative w-12 h-12 mr-4">
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                fill
                                className="rounded-full object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">
                                {testimonial.role} - {testimonial.company}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
