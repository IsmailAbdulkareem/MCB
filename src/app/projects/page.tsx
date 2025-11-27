"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { getAllProjects, getProjectsByCategory } from "@/lib/data-loader";
import { projectCategories } from "@/data/projects";

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const allProjects = getAllProjects();
    const filteredProjects = getProjectsByCategory(selectedCategory);

    return (
        <>
            <Hero
                title="Our Projects"
                subtitle="Explore our portfolio of successful construction projects"
                backgroundImage="/images/highrise2.jpg"
                height="medium"
            />

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="Browse Our Work"
                        subtitle="From highrise buildings to cozy bungalows, see what we've built"
                    />

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {projectCategories.map((category) => (
                            <button
                                key={category.slug}
                                onClick={() => setSelectedCategory(category.slug)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${selectedCategory === category.slug
                                        ? "bg-blue-600 text-white shadow-lg"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                name={project.name}
                                slug={project.slug}
                                category={project.category}
                                shortDescription={project.shortDescription}
                                image={project.image}
                                location={project.location}
                            />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">
                                No projects found in this category.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">
                                {allProjects.length}+
                            </div>
                            <div className="text-blue-100">Completed Projects</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">100%</div>
                            <div className="text-blue-100">Client Satisfaction</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">15+</div>
                            <div className="text-blue-100">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">450+</div>
                            <div className="text-blue-100">Happy Clients</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
