import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import CTAButton from "../components/CTAButton";
import Image from "next/image";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/data-loader";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | MCB Construction",
    description:
        "Read the latest construction tips, industry insights, and project showcases from MCB Construction experts.",
    openGraph: {
        title: "Blog | MCB Construction",
        description:
            "Construction tips, industry insights, and project showcases from MCB Construction experts.",
        images: ["/images/blog1.jpg"],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "MCB Construction Blog",
    description:
        "Construction tips, industry insights, and project showcases.",
    url: "https://www.mustafabuilderanddeveloper.com.pk/blog",
    publisher: {
        "@type": "Organization",
        name: "MCB Construction",
    },
};

export default function BlogPage() {
    const blogPosts = getAllBlogPosts();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Hero
                title="Our Blog"
                subtitle="Construction tips, insights, and industry updates"
                backgroundImage="/images/blog1.jpg"
                height="medium"
            />

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="Latest Articles"
                        subtitle="Stay informed with expert advice and construction insights"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article
                                key={post.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </Link>
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mr-3">
                                            {post.category}
                                        </span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <Link href={`/blog/${post.slug}`}>
                                        <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                                            {post.title}
                                        </h2>
                                    </Link>
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm text-gray-500">
                                            <div className="font-semibold text-gray-700">
                                                {post.author}
                                            </div>
                                            <div>{new Date(post.publishedDate).toLocaleDateString()}</div>
                                        </div>
                                        <CTAButton
                                            href={`/blog/${post.slug}`}
                                            variant="outline"
                                            size="small"
                                        >
                                            Read More
                                        </CTAButton>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
