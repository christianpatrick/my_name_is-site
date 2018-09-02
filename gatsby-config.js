module.exports = {
	siteMetadata: {
		title: "👋 Hi, My Name is Christian!",
		siteUrl: "https://mynameischristian.com"
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-remark',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'posts',
				path: `${__dirname}/src/posts`
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-87339836-6",
				head: true,
				anonymize: true,
				respectDNT: true,
				exclude: [],
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				output: `/sitemap.xml`,
				exclude: [],
				query: `
				{
					site {
						siteMetadata {
							siteUrl
						}
					}

					allSitePage {
						edges {
							node {
								path
							}
						}
					}
				}`
			}
		}
	],
}
