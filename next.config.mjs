/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    async redirects() {
      return [
        {
          source: "/(.*)",
          has: [
            {
              type: "host",
              value: "mustafabuilderanddeveloper.com.pk", // non-www version
            },
          ],
          destination: "https://www.mustafabuilderanddeveloper.com.pk/:1", // www version
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  