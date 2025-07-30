/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  // Add custom headers to allow Google indexing
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow", // ✅ Let Google index this page
          },
        ],
      },
    ];
  },

  // Redirect non-www to www version
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "mustafabuilderanddeveloper.com.pk",
          },
        ],
        destination: "https://www.mustafabuilderanddeveloper.com.pk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
