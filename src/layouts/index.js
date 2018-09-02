import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'

import './bootstrap.min.css'
import './style.css'
import favicon from '../images/favicon.png'

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
		>	
			<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=" async crossorigin="anonymous"></script>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
		</Helmet>

		<Header siteTitle={data.site.siteMetadata.title} />

		<div id="contentcontainer">
			<div className="container">
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
