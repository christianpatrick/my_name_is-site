import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'

const NotFoundPage = () => (
	<Layout>
		<h1>404 Page Not Found!</h1>
		<p>There's no route here! May I suggest trying <Link to="/">again</Link>?</p>
	</Layout>
	)

export default NotFoundPage
