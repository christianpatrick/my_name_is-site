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
				head: true,
				anonymize: true,
				respectDNT: true,
				exclude: [],
			},
		},
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: "./src/images/favicon.jpg",
				appName: 'My Name is Christian',
				appDescription: 'Here you will see some personal musings along with great development information, techniques, and tips as Christian Helvin learns them in real-life development scenarios himself.',
				developerName: 'Christian Helvin',
				developerURL: 'https://mynameischristian.com',
				dir: 'auto',
				lang: 'en-US',
				background: '#fff',
				theme_color: '#fff',
				display: 'standalone',
				orientation: 'any',
				start_url: '/?homescreen=1',
				version: '1.0',

				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					opengraph: false,
					twitter: false,
					yandex: false,
					windows: false
				}
			}
		}
	],
}
