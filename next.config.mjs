export default {
    reactStrictMode: true,
    images: {
      domains: ['your-clerk-domain.com'], // Update with the Clerk domain for image hosting
    },
    env: {
      CLERK_FRONTEND_API: process.env.CLERK_FRONTEND_API,
      CLERK_API_KEY: process.env.CLERK_API_KEY,
      CLERK_API_VERSION: process.env.CLERK_API_VERSION,
    },
  };
  