require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

const helpQuery = `
{
	allMdx(filter: {
		frontmatter: {
			type: {
				eq: "Help"
			}
		}
	}) {
		edges {
			node {
				frontmatter {
					title
				}
				rawBody
				id
				fields {
					slug
				}
				excerpt
			}
		}
	}
}

`

const queries = [
	{
		query: helpQuery,
		transformer: ({ data }) => data.allMdx.edges.map(({ node }) => node),
	}
]


module.exports = {
   siteMetadata: {
      title: `Modern Diary app for iPhone, iPad and Mac`,
      description: `Beautiful, powerful, and safe. Diarly is a journaling app for Mac, iPhone and iPad designed to let you focus on your writing. Pure in its form, powerful in functions.`,
      author: `@DiarlyApp`,
      siteUrl: `https://www.diarly.app`,
	},
   plugins: [
		`gatsby-plugin-sass`,
      `gatsby-plugin-sharp`,
		`gatsby-remark-images`,
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-offline`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: "GTM-WN987PS",
				includeInDevelopment: false,
			},
		},
		{
			resolve: `gatsby-plugin-algolia`,
			options: {
				appId: process.env.ALGOLIA_APP_ID,
				apiKey: process.env.ALGOLIA_ADMIN_KEY,
				indexName: "Diarly",
				queries,
				chunkSize: 1000
			}
		},

		{
			// Enables RSS Feed
			resolve: `gatsby-plugin-feed-mdx`,
			options: {
				query: `
					{
						site {
							siteMetadata {
								title
								description
								siteUrl
								site_url: siteUrl
							}
						}
					}
				`,
				feeds: [
					{
						serialize: ({ query: { site, allMdx } }) =>
							allMdx.edges.map(edge => ({
								...edge.node.frontmatter,
								description: edge.node.frontmatter.description,
								date: edge.node.frontmatter.date,
								url: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
								guid: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
								custom_elements: [{ 'content:encoded': edge.node.html }],
							})),
							query: `
							{
								allMdx(
									filter: {frontmatter: {type: {eq: "Blog"}}},
									sort: {order: DESC, fields: frontmatter___date}
								) {
									edges {
										node {
											html
											id
											frontmatter {
												title
												date(formatString: "MMMM DD, YYYY")
												description
											}
											fields {
												slug
											}
										}
									}
								}
							}
						`,
						output: '/rss-feed.xml',
						title: "Diarly Blog RSS Feed",
					},
				],
			},
	},

		{
			resolve: `gatsby-plugin-mdx`,
			
			options: {
				extensions: [`.md`, `.mdx`],
				
				// a workaround to solve mdx-remark plugin compat issue we add gatsby-remark-images (with same options) to both `plugins` and `gatsbyRemarkPlugins`
				plugins: [{
					resolve: `gatsby-remark-images`,
					options: {
						maxWidth: 800,
						backgroundColor: `transparent`,
						tracedSVG: {
							background: "#f5f6f9",
							color: "#ffffff"
						}
					},
				}],
				
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-copy-linked-files`,
						options: {
							ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`, `md`],
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800,
							linkImagesToOriginal: false,
							backgroundColor: "transparent",
							tracedSVG: {
								background: "#f5f6f9",
								color: "#ffffff"
							},
							wrapperStyle: "box-shadow: none",
							withWebp: false,
							quality: 80,
						},
					},
				],
			},
		},
		{
			resolve: "gatsby-plugin-page-creator",
			options: {
				path: `${__dirname}/src/pages`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
            path: `${__dirname}/src`,
         },
      },
      {
			resolve: `gatsby-plugin-manifest`,
         options: {
				name: `Diarly App`,
            short_name: `Diarly`,
            start_url: `/`,
            background_color: `#F7F8FA`,
            theme_color: `#28074f`,
            display: `minimal-ui`,
            icon: `src/images/diarly-icon.png`,
         },
      },
      {
			resolve: `gatsby-plugin-google-fonts`,
         options: {
				fonts: [
					`DM Sans`,
					`DM Serif`,
					`Caveat`
            ],
         }
      },
		{
			resolve: `gatsby-plugin-google-analytics-gdpr`,
			options: {
				// The property ID; the tracking code won't be generated without it.
				trackingId: "UA-119771784-2",
				// Optional parameter (default false) - Enable analytics in development mode.
				enableDevelopment: false, // default false
				// Optional parameter (default true) - Some countries (such as Germany) require you to use the _anonymizeIP function for Google Analytics. Otherwise you are not allowed to use it.
				anonymizeIP: true,
				// Optional parameter (default false) - Starts google analytics with cookies enabled. In some countries (such as Germany) this is not allowed.
				autoStartWithCookiesEnabled: false,
				// Optional parameter - Configuration for react-ga and google analytics 
				reactGaOptions: {
					debug: true,
					gaOptions: {
						sampleRate: 10
					}
				}
			},
		},
		{
			resolve: `gatsby-plugin-cookiehub-banner`,
			options: {
				// The ID is part of the CookieHub URL: https://cookiehub.net/cc/YOUR_COOKIEHUB_ID.js
				cookieHubId: "36073bda",
				// Optional parameter (default false) - Use new v2 API.
				cookieHubV2Api: true,
				// Categories configured with CookieHub
				categories: [
					{
						categoryName: 'analytics', // Unique id of the category which is set by Cookiehub.
						cookieName: 'gatsby-plugin-google-analytics-gdpr_cookies-enabled' // Your custom cookie name
					},
					{
						categoryName: 'marketing',
						cookieName: 'marketing-enabled'
					},
				],
			},
		},
		{
			resolve: 'gatsby-redirect-from',
			options: {
				query: 'allMdx'
			}
		},
		`gatsby-plugin-meta-redirect`, // make sure this is always the last one
	],
}
