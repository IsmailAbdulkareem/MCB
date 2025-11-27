import Link from "next/link";
import Image from "next/image";
import CTAButton from "./CTAButton";

interface ServiceCardProps {
    name: string;
    slug: string;
    shortDescription: string;
    image: string;
}

export default function ServiceCard({
    name,
    slug,
    shortDescription,
    image,
}: ServiceCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href={`/services/${slug}`}>
                <div className="relative h-48 w-full">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </Link>
            <div className="p-6">
                <Link href={`/services/${slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                        {name}
                    </h3>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-3">{shortDescription}</p>
                <CTAButton href={`/services/${slug}`} variant="outline" size="small">
                    Learn More
                </CTAButton>
            </div>
        </div>
    );
}
