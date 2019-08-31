import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Footer = () => (

	<footer id="footer">
		<div className="container">
			<hr />
			Built with &hearts; by Christian on <OutboundLink href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</OutboundLink>.
		</div>
	</footer>
)

export default Footer
