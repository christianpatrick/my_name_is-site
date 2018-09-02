module.exports = {
	siteMetadata: {
		title: "👋 Hi, My Name is Christian!",
		url: "https://mynameischristian.com"
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: `${__dirname}/src/posts`
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-87339836-6",
				// Puts tracking script in the head instead of the body
				head: false,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
				// Avoids sending pageview hits from custom paths
				exclude: [],
			},
		},
	],
}
