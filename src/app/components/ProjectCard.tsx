import Link from "next/link";
import Image from "next/image";
import CTAButton from "./CTAButton";

interface ProjectCardProps {
    name: string;
    slug: string;
    category: string;
    shortDescription: string;
    image: string;
    location: string;
}

export default function ProjectCard({
    name,
    slug,
    category,
    shortDescription,
    image,
    location,
}: ProjectCardProps) {
    const categoryColors: { [key: string]: string } = {
        highrise: "bg-blue-100 text-blue-800",
        villa: "bg-green-100 text-green-800",
        bungalow: "bg-purple-100 text-purple-800",
        factory: "bg-orange-100 text-orange-800",
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href={`/projects/${slug}`}>
                <div className="relative h-56 w-full">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                        <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${categoryColors[category] || "bg-gray-100 text-gray-800"
                                }`}
                        >
                            {category}
                        </span>
                    </div>
                </div>
            </Link>
            <div className="p-6">
                <Link href={`/projects/${slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                        {name}
                    </h3>
                </Link>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                    <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                    {location}
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{shortDescription}</p>
                <CTAButton href={`/projects/${slug}`} variant="outline" size="small">
                    View Project
                </CTAButton>
            </div>
        </div>
    );
}
