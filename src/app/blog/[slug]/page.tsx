import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/app/components/CTAButton";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/data-loader";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const posts = getAllBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | MCB Construction Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
            type: "article",
            publishedTime: post.publishedDate,
            authors: [post.author],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        author: {
            "@type": "Organization",
            name: post.author,
        },
        publisher: {
            "@type": "Organization",
            name: "MCB Construction",
            logo: {
                "@type": "ImageObject",
                url: "https://www.mustafabuilderanddeveloper.com.pk/images/MCB-logo.jpg",
            },
        },
        datePublished: post.publishedDate,
        dateModified: post.publishedDate,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Image */}
            <div className="relative h-96">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
            </div>

            {/* Blog Post Content */}
            <article className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Badge */}
                    <div className="mb-4">
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                            {post.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        {post.title}
                    </h1>

                    {/* Meta Information */}
                    <div className="flex items-center text-gray-600 mb-8 pb-8 border-b">
                        <div className="flex items-center mr-6">
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center mr-6">
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div
                        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
                        dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
                    />

                    {/* Share Section */}
                    <div className="mt-12 pt-8 border-t">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Share this article
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href={`https://facebook.com/sharer/sharer.php?u=https://www.mustafabuilderanddeveloper.com.pk/blog/${post.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Facebook
                            </a>
                            <a
                                href={`https://twitter.com/intent/tweet?url=https://www.mustafabuilderanddeveloper.com.pk/blog/${post.slug}&text=${post.title}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
                            >
                                Twitter
                            </a>
                            <a
                                href={`https://linkedin.com/shareArticle?url=https://www.mustafabuilderanddeveloper.com.pk/blog/${post.slug}&title=${post.title}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Back to Blog */}
                    <div className="mt-12">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Back to Blog
                        </Link>
                    </div>
                </div>
            </article>

            {/* CTA Section */}
            <section className="py-16 bg-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Have Questions About Construction?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Our team is here to help with expert advice and solutions
                    </p>
                    <CTAButton href="/contact" variant="secondary" size="large">
                        Contact Us
                    </CTAButton>
                </div>
            </section>
        </>
    );
}
