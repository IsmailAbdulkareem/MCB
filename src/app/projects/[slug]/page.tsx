import { notFound } from "next/navigation";
import Hero from "@/app/components/Hero";
import SectionTitle from "@/app/components/SectionTitle";
import Gallery from "@/app/components/Gallery";
import CTAButton from "@/app/components/CTAButton";
import ProjectCard from "@/app/components/ProjectCard";
import {
    getProjectBySlug,
    getAllProjects,
    getRelatedProjects,
} from "@/lib/data-loader";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.name} | MCB Construction`,
        description: project.description,
        openGraph: {
            title: `${project.name} | MCB Construction`,
            description: project.shortDescription,
            images: [project.image],
        },
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const relatedProjects = getRelatedProjects(slug, project.category, 3);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Project",
        name: project.name,
        description: project.description,
        image: project.image,
        location: project.location,
        performer: {
            "@type": "GeneralContractor",
            name: "MCB Construction",
            url: "https://www.mustafabuilderanddeveloper.com.pk",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Hero
                title={project.name}
                subtitle={project.shortDescription}
                backgroundImage={project.image}
                height="medium"
            />

            {/* Project Details */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                About This Project
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                {project.description}
                            </p>

                            {/* Features */}
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Key Features
                            </h3>
                            <div className="space-y-3 mb-8">
                                {project.features.map((feature, index) => (
                                    <div key={index} className="flex items-start">
                                        <svg
                                            className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md sticky top-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Project Details
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Category</div>
                                        <div className="text-gray-900 font-semibold capitalize">
                                            {project.category}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Location</div>
                                        <div className="text-gray-900 font-semibold">
                                            {project.location}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Timeline</div>
                                        <div className="text-gray-900 font-semibold">
                                            {project.timeline}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <CTAButton href="/contact" variant="primary" fullWidth>
                                        Start Your Project
                                    </CTAButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionTitle title="Project Gallery" />
                        <Gallery images={project.gallery} alt={project.name} />
                    </div>
                </section>
            )}

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionTitle
                            title="Related Projects"
                            subtitle={`More ${project.category} projects`}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedProjects.map((relatedProject) => (
                                <ProjectCard
                                    key={relatedProject.id}
                                    name={relatedProject.name}
                                    slug={relatedProject.slug}
                                    category={relatedProject.category}
                                    shortDescription={relatedProject.shortDescription}
                                    image={relatedProject.image}
                                    location={relatedProject.location}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-16 bg-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Inspired by This Project?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Let's discuss how we can bring your vision to life
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton href="/contact" variant="secondary" size="large">
                            Get Started
                        </CTAButton>
                        <CTAButton
                            href="/projects"
                            variant="outline"
                            size="large"
                            className="border-white text-white hover:bg-white hover:text-blue-600"
                        >
                            View More Projects
                        </CTAButton>
                    </div>
                </div>
            </section>
        </>
    );
}
