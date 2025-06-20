/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.mustafabuilderanddeveloper.com.pk',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [], // You can add routes here to exclude them from sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.mustafabuilderanddeveloper.com.pk/sitemap.xml',
    ],
  },
};
