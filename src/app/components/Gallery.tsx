import Image from "next/image";

interface GalleryProps {
    images: string[];
    alt: string;
}

export default function Gallery({ images, alt }: GalleryProps) {
    if (!images || images.length === 0) return null;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                    <Image
                        src={image}
                        alt={`${alt} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            ))}
        </div>
    );
}
