import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Container, Grid } from 'semantic-ui-react'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'

//load in css files
import 'semantic-ui-css/semantic.min.css'
import '../css/style.css'

import favicon from '../media/favicon.png'

export default ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<Helmet
				title={data.site.siteMetadata.title}
				meta={[
					{ name: 'description', content: 'Here you will see some personal musings along with great development information, techniques, and tips as Christian Helvin learns them in real-life development scenarios himself.' },
					{ name: 'keywords', content: 'christian helvin, php developer, christian patrick helvin, gatsby website, personal blog' },
					{ name: 'google-site-verification', content: 'Xq0R-4naHcH4nujuM1FFUuyByFPN85mR4u0p6itmDOM' },
					]}
					link={[
						{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
						]}
						/>
				<a href="#content" className="skip-main">Skip to main content</a>

				<Header siteTitle={data.site.siteMetadata.title} />

				<Container id="content">
					<Grid centered relaxed stackable>
						<Grid.Column width={10}>
							{children}
						</Grid.Column>
						<Grid.Column width={4}>
							<Sidebar />
						</Grid.Column>
					</Grid>
				</Container>

				<Footer />
			</>
		)}
	/>
)
