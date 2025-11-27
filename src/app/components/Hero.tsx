import Image from "next/image";
import CTAButton from "././CTAButton";

interface HeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    ctaText?: string;
    ctaLink?: string;
    height?: "small" | "medium" | "large";
}

export default function Hero({
    title,
    subtitle,
    backgroundImage,
    ctaText,
    ctaLink,
    height = "large",
}: HeroProps) {
    const heightClasses = {
        small: "h-64 sm:h-80",
        medium: "h-80 sm:h-96",
        large: "h-96 sm:h-[500px]",
    };

    return (
        <div className={`relative ${heightClasses[height]} flex items-center justify-center`}>
            {/* Background Image */}
            {backgroundImage && (
                <>
                    <Image
                        src={backgroundImage}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                </>
            )}

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl sm:text-2xl text-white mb-8">
                        {subtitle}
                    </p>
                )}
                {ctaText && ctaLink && (
                    <CTAButton href={ctaLink} variant="primary" size="large">
                        {ctaText}
                    </CTAButton>
                )}
            </div>
        </div>
    );
}
