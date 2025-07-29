// app/blog/page.tsx
import Link from "next/link";

const blogPosts = [
  {
    slug: "quality-materials-in-construction",
    title: "The Importance of Quality Materials in Construction",
    date: "2024-06-01",
    summary: "Discover why using high-quality materials is crucial for the longevity and safety of any construction project.",
    image: "/images/blog1.jpg",
  },
  {
    slug: "modern-home-construction-trends",
    title: "Top 5 Trends in Modern Home Construction",
    date: "2024-05-25",
    summary: "Explore the latest trends shaping the construction industry, from smart homes to sustainable building practices.",
    image: "/images/blog2.jpg",
  },
  {
    slug: "choose-right-contractor",
    title: "How to Choose the Right Contractor for Your Project",
    date: "2024-05-18",
    summary: "A guide to selecting a reliable contractor to ensure your construction project runs smoothly and stays on budget.",
    image: "/images/blog3.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-500 text-sm mb-1">{post.date}</p>
                <p className="text-gray-700">{post.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
