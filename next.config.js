/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      {
        // Redirect non-www and http to https://www version
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "mustafabuilderanddeveloper.com.pk", // non-www
          },
        ],
        destination: "https://www.mustafabuilderanddeveloper.com.pk/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.mustafabuilderanddeveloper.com.pk",
          },
        ],
        missing: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "https",
          },
        ],
        destination: "https://www.mustafabuilderanddeveloper.com.pk/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
