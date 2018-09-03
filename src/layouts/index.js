import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'

//load in css files
import './bootstrap.min.css'
import './style.css'

import favicon from '../media/favicon.png'

//load in js libs
try {
	window.jQuery = window.$ = require('jquery/dist/jquery.min.js')
	require('bootstrap/dist/js/bootstrap.min.js')
} catch (e) {
	console.log(e)
}

const Layout = ({ children, data }) => (
	<div>
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
		<a href="#content" className="sr-only sr-only-focusable">Skip to main content</a>

		<Header siteTitle={data.site.siteMetadata.title} />

		<div id="contentcontainer">
			<div className="container" id="content" tabindex="-1">
				<div className="row">

					<main id="content" className="col-md-9 col-sm-8 pull-left">
						{children()}
					</main>

					<Sidebar />

				</div>
			</div>
		</div>

		<Footer />		
	</div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
