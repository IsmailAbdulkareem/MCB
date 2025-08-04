/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow", // ✅ FIXED: Added string value
          },
        ],
      },
    ];
  },

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
