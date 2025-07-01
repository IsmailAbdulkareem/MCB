/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "mustafabuilderanddeveloper.com.pk", // non-www version
          },
        ],
        destination: "https://www.mustafabuilderanddeveloper.com.pk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
