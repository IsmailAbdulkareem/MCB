// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // For tables, strikethrough, etc.
import rehypeRaw from 'rehype-raw'; // For rendering raw HTML in markdown
import Navbar from '../../../components/Navbar';
import Link from 'next/link';

const blogDetails = {
  "quality-materials-in-construction": {
    title: "The Importance of Quality Materials in Construction",
    date: "2024-06-01",
    image: "/images/blog1.jpg",
    content: `## Introduction

In Pakistan’s rapidly growing construction sector, the importance of using quality materials cannot be overstated. Whether it’s a residential home, a commercial plaza, or a large infrastructure project, the choice of construction materials directly impacts the safety, durability, and overall value of the structure. As urbanization accelerates and new projects emerge across cities like Karachi, Lahore, and Islamabad, understanding why quality materials matter is more crucial than ever.

## Safety First

The primary reason for prioritizing quality materials in construction is safety. Buildings constructed with substandard materials are at a higher risk of structural failure, which can lead to catastrophic consequences, including loss of life and property. In Pakistan, where earthquakes and heavy monsoon rains are common, the use of high-grade cement, steel, and bricks ensures that structures can withstand natural disasters. Quality materials provide the necessary strength and stability, reducing the risk of collapse and making buildings safer for occupants.

## Long-Term Durability

Another significant benefit of using quality materials is the longevity of the structure. Inferior materials may save money in the short term, but they often lead to frequent repairs and maintenance, which can be costly over time. High-quality materials, on the other hand, are designed to resist wear and tear, moisture, and environmental factors. This means that buildings remain in good condition for decades, providing better value for money and peace of mind for owners and investors.

## Cost Efficiency

While quality materials may have a higher upfront cost, they are more cost-effective in the long run. Poor-quality materials can lead to construction defects, water leakage, and even structural damage, all of which require expensive repairs. By investing in reliable materials from the start, builders and homeowners can avoid these issues and save money on maintenance and replacements. Additionally, quality materials often come with warranties, offering further financial protection.

## Aesthetic Appeal and Value

The use of quality materials also enhances the aesthetic appeal of a building. Whether it’s the smooth finish of premium tiles, the shine of high-grade steel, or the uniformity of well-made bricks, quality materials contribute to a more attractive and professional appearance. This not only makes the property more enjoyable to live or work in but also increases its market value. In Pakistan’s competitive real estate market, properties built with superior materials tend to attract higher prices and more buyers.

## Environmental Impact

Sustainable construction is becoming increasingly important in Pakistan. Quality materials are often more environmentally friendly, as they are manufactured to higher standards and last longer, reducing the need for frequent replacements. Many reputable suppliers now offer eco-friendly options, such as energy-efficient insulation and recycled steel, helping builders reduce their carbon footprint.

## Conclusion

In conclusion, the importance of quality materials in construction cannot be ignored, especially in a country like Pakistan where safety, durability, and value are paramount. By choosing the right materials, builders and homeowners can ensure that their projects stand the test of time, provide a safe environment, and offer long-term savings. As the construction industry continues to evolve, prioritizing quality will remain the key to building a better, safer, and more sustainable future.
`,
  },
  "modern-home-construction-trends": {
    title: "Top 5 Trends in Modern Home Construction",
    date: "2024-05-25",
    image: "/images/blog2.jpg",
    content: `## 1. Sustainable and Eco-Friendly Building Practices

Sustainability is no longer just a buzzword; it’s a necessity. Pakistani homeowners are increasingly aware of the environmental impact of construction. As a result, there is a growing demand for eco-friendly materials such as fly ash bricks, recycled steel, and energy-efficient glass. Solar panels, rainwater harvesting systems, and proper insulation are becoming standard features in new homes, especially in cities like Lahore and Islamabad. These practices not only reduce the carbon footprint but also help homeowners save on energy costs in the long run.

## 2. Smart Home Technology Integration

The digital revolution has reached Pakistani homes. Smart home technology, once considered a luxury, is now becoming mainstream. Features like automated lighting, security cameras, smart locks, and climate control systems are being integrated into new constructions. With the rise of affordable internet and smartphone usage, homeowners can now control various aspects of their homes remotely, enhancing convenience, security, and energy efficiency.

## 3. Open Floor Plans and Minimalist Design

Modern Pakistani homes are moving away from traditional compartmentalized layouts. Open floor plans that combine living, dining, and kitchen areas are gaining popularity, creating a sense of spaciousness and promoting family interaction. Minimalist design, characterized by clean lines, neutral colors, and clutter-free spaces, is also on the rise. This trend reflects a shift towards simplicity and functionality, making homes easier to maintain and more aesthetically pleasing.

## 4. Use of High-Quality, Locally Sourced Materials

There is a renewed focus on using high-quality, locally sourced materials in home construction. Builders are opting for durable options like Pakistani marble, local wood, and high-grade cement. This not only supports the local economy but also ensures that homes are built to withstand the country’s unique climate conditions. Quality materials also contribute to the longevity and safety of the structure, which is a top priority for homeowners.

## 5. Multi-Functional Spaces and Home Offices

The COVID-19 pandemic has permanently changed the way people use their homes. There is a growing demand for multi-functional spaces that can serve as home offices, study areas, or even small gyms. Builders are now designing homes with flexible rooms that can be easily adapted to different needs. This trend is particularly evident in urban areas where space is at a premium, and families require versatile solutions for work, study, and leisure.

## Conclusion

Modern home construction in Pakistan is being shaped by sustainability, technology, innovative design, quality materials, and adaptability. As these trends continue to evolve, they promise to deliver homes that are not only beautiful and functional but also future-ready. For anyone planning to build or renovate a home in Pakistan, staying updated with these trends is essential for making informed decisions and creating a living space that truly meets the needs of modern life.
`,
  },
  "choose-right-contractor": {
    title: "How to Choose the Right Contractor for Your Project",
    date: "2024-05-18",
    image: "/images/blog3.jpg",
    content: `## Introduction

Choosing the right contractor is one of the most important decisions you’ll make when starting a construction project in Pakistan. Whether you’re building a new home, renovating an office, or constructing a commercial property, the contractor you select will have a significant impact on the quality, timeline, and cost of your project. With so many options available, it can be challenging to know where to start. Here are some essential tips to help you choose the right contractor for your project:

## 1. Check Credentials and Experience

Start by researching potential contractors’ credentials. Make sure they are registered with relevant authorities, such as the Pakistan Engineering Council (PEC) or local building control authorities. Experience matters—look for contractors who have successfully completed projects similar to yours. Ask for a portfolio of their previous work and, if possible, visit some of their completed sites to assess the quality firsthand.

## 2. Ask for References and Reviews

A reputable contractor should be able to provide references from past clients. Contact these references to ask about their experience, the quality of work, adherence to timelines, and how the contractor handled any issues that arose. Additionally, check online reviews on platforms like Facebook, Google, or local construction forums. Positive feedback from previous clients is a good indicator of reliability.

## 3. Verify Licenses and Insurance

Ensure that the contractor holds all necessary licenses and permits required for your type of project. This is crucial for legal compliance and safety. Also, check if the contractor has adequate insurance coverage, including liability and worker’s compensation. This protects you from potential liabilities in case of accidents or damages during construction.

## 4. Get Detailed Estimates and Contracts

Request detailed written estimates from at least three contractors. The estimate should include a breakdown of costs for materials, labor, equipment, and any other expenses. Don’t automatically choose the lowest bid—sometimes, a low price can mean compromised quality. Once you select a contractor, make sure to sign a comprehensive contract that outlines the scope of work, payment schedule, timeline, and warranty terms. This helps prevent misunderstandings and protects both parties.

## 5. Assess Communication and Professionalism

Effective communication is key to a successful project. Choose a contractor who is responsive, listens to your needs, and provides clear answers to your questions. Professionalism in their approach, punctuality, and transparency in dealings are all signs of a trustworthy contractor. A good contractor will keep you updated on progress and address any concerns promptly.

## 6. Inspect Ongoing Work

If possible, visit a site where the contractor is currently working. This will give you insight into their work practices, safety standards, and how they manage their team. A well-organized and clean site is usually a sign of a professional contractor.

## Conclusion

Selecting the right contractor in Pakistan requires careful research and due diligence. By checking credentials, seeking references, verifying licenses, comparing estimates, and assessing professionalism, you can make an informed decision. Remember, investing time in choosing the right contractor will pay off in the form of a smooth construction process and a high-quality finished project.
`,
  },
};

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = blogDetails[params.slug as keyof typeof blogDetails];

  if (!blog) return notFound();

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto py-12 px-4">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
        <p className="text-gray-500 mb-8">
          {new Date(blog.date).toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <Link href="/blog">
          <button className="mb-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            ← Back to Blog
          </button>
        </Link>
        <div className="prose prose-blue max-w-none prose-h2:mt-8 prose-h2:mb-2 prose-h3:mt-6 prose-h3:mb-2 prose-li:marker:text-blue-600">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h2: ({node, ...props}) => (
                <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-700" {...props} />
              ),
              h3: ({node, ...props}) => (
                <h3 className="text-xl font-semibold mt-6 mb-2 text-blue-600" {...props} />
              ),
              ul: ({node, ...props}) => (
                <ul className="list-disc pl-6 mb-4" {...props} />
              ),
              ol: ({node, ...props}) => (
                <ol className="list-decimal pl-6 mb-4" {...props} />
              ),
              li: ({node, ...props}) => (
                <li className="mb-1" {...props} />
              ),
              p: ({node, ...props}) => (
                <p className="mb-4" {...props} />
              ),
              img: ({node, ...props}) => (
                <img className="rounded shadow my-4" {...props} />
              ),
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}